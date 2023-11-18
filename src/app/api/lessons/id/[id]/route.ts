import { NextResponse } from "next/server";
import prisma  from "@/lib/prisma";

export async function DELETE(req: Request, {params} : { params: { id: string }}) {
  try {
    const id = params.id
    const lessons = await prisma.lesson.delete({
      where: {
        id
      },
      include: {
        questions: true,
        score: true,
      }
    })

    if (!lessons) {
      return NextResponse.json({ message: "No users id found" }, { status: 404 });
    }
      return NextResponse.json({ message: "OK", lessons }, { status: 200 });
    
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    throw error;
  }
}