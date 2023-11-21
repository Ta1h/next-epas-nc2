import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;

    // Delete choices associated with questions
    await prisma.choice.deleteMany({
      where: {
        question: {
          lessonId: id,
        },
      },
    });
    // Delete questions associated with the lesson
    await prisma.question.deleteMany({
      where: {
        lessonId: id,
      },
    });
    // Delete scores associated with the lesson
    await prisma.score.deleteMany({
      where: {
        lessonId: id,
      },
    });
    // Delete the lesson
    const lesson = await prisma.lesson.delete({
      where: {
        id,
      },
      include: {
        questions: true,
        score: true,
      },
    });

    if (!lesson) {
      return NextResponse.json({ message: "No lesson found with the given id" }, { status: 404 });
    }

    return NextResponse.json({ message: "OK", lesson }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    throw error;
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }){
  try {
    const id = params.id
    const body = await req.json()
    const lessons = await prisma.lesson.update({
      where: { id: id },
      data: {
        lessonNumber: body.lessonNumber,
        lessonTitle: body.lessonTitle,
        lessonUrl: body.lessonUrl
      }
    });

    if (!lessons) {
      return NextResponse.json({ message: "No lesson found with the given id" }, { status: 404 });
    }

    return NextResponse.json({ message: "OK", lessons }, { status: 200 });

  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    throw error;
  }
}