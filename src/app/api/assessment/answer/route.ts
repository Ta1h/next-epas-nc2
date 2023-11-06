import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const lessons = await prisma.correctAnswer.findMany();
    if (!lessons || lessons.length === 0) {
      return NextResponse.json({ message: "No lessons found" }, { status: 404 });
    }
    return NextResponse.json(lessons);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
