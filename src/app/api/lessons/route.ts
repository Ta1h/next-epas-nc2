import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const lessons = await prisma.lesson.findMany({
      include: {
        score: true,
        questions: true,
      }
    });
    if (!lessons || lessons.length === 0) {
      return NextResponse.json({ message: "No lessons found" }, { status: 404 });
    }
    return NextResponse.json(lessons);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const lessons = await prisma.lesson.create({
      data: {
        lessonNumber: body.lessonNumber,
        lessonTitle: body.lessonTitle,
        lessonUrl: body.lessonUrl,
        unitId: body.unitId,
      },
    });

    return NextResponse.json(lessons, {status: 200})
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    throw error;
  }
}


