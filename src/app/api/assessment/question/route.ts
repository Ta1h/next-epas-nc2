import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const questions = await prisma.question.findMany({
        include: {
          lesson: true, 
          choices: true, 
        },
    });
    if (!questions || questions.length === 0) {
      return NextResponse.json({ message: "No lessons found" }, { status: 404 });
    }
    return NextResponse.json(questions);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const questions = await prisma.question.create({
      data: {
        text: body.text,
        lessonId: body.lessonId,
        choices: {
          create: body.choices,
        },
      },
      include: {
        choices: true,
      },
    });
    
    return NextResponse.json(questions, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    throw error;
  }
}


