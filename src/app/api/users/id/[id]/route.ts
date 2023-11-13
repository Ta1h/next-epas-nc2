import { NextResponse } from "next/server";
import prisma  from "@/lib/prisma";

export async function GET(req: Request, {params} : { params: { id: string }}) {
  try {
    const id = params.id
    const users = await prisma.user.findUnique({
        where: {
            id
        }
    });
    if (!users) {
      return NextResponse.json({ message: "No users id found" }, { status: 404 });
    }
    return NextResponse.json({ message: "OK", users }, { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}

export async function PUT(req: Request, {params} : { params: { id: string }}) {
    try {
    const id = params.id
    const json = await req.json()
    
    const updated = await prisma.user.update({
        where: {
            id
        },
        data: json
    });
    if (!updated) {
        return NextResponse.json({ message: "No users id found" }, { status: 404 });
    }
        return NextResponse.json({ message: "OK", updated }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
    }
}

export async function DELETE(req: Request, {params} : { params: { id: string }}) {
    try {
    const id = params.id
    const deleted = await prisma.user.delete({
        where: {
          id
        },
        include: {
          scores: true
        }
    });
    if (!deleted) {
        return NextResponse.json({ message: "No users id found" }, { status: 404 });
    }
        return NextResponse.json({ message: "OK", deleted }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
    }
}