import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import * as z from 'zod'

const userSchema = z.object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  });

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, username, password } = userSchema.parse(body);

        // check if email already exists
        const existingUserByEmail = await prisma.user.findUnique({
            where: { email: email }
        });
        if(existingUserByEmail){
            return NextResponse.json({ user: null, message: "This Email is already exist" }, { status: 409 });
        }

        // check if username already exists
        const existingUserByUsername = await prisma.user.findUnique({
            where: { username: username }
        });
        if(existingUserByUsername){
            return NextResponse.json({ user: null, message: "This Username is already exist" }, { status: 409 });
        }

        // storing data to database 

        const hashedPassword = await hash(password, 10);
        const newUser = await prisma.user.create({
            data:{
                email,
                username,
                password: hashedPassword,
            }
        });

        // securing hashed password using rest
        const { password: newUserPassword, ...rest} = newUser; 

        return NextResponse.json({user: rest, message: 'user created succesfully'}, {status: 201});

    } catch (error) {
        return NextResponse.json({message: "Something went wrong.."}, {status : 500});
    }
}
