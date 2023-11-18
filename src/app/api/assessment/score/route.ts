import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const scores = await prisma.score.findMany();
    if (!scores || scores.length === 0) {
      return NextResponse.json({ message: "No scores found" }, { status: 404 });
    }
    return NextResponse.json(scores);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newScore = await prisma.score.create({ 
      data: {
        id: body.id,
        preTestScore: body.preTestScore,
        preTestLenght: body.preTestLenght,
        lessonScore: body.lessonScore,
        lessonLength: body.lessonLength,
        userEmail: body.userEmail,
        unitId: body.unitId,
        lessonId: body.lessonId,
      }, 
    });

    return NextResponse.json(newScore, {status: 200})    
  } catch (error) {
    if (error instanceof Error) {
      // Handle the error
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    // Handle other cases or rethrow the error
    throw error;
  }
}

export async function PATCH(req: NextRequest){
  try {
   const body = await req.json();
   const updateScore = await prisma.score.update({
    where: {id: body.id},
    data: {
      preTestScore: body.preTestScore,
      preTestLenght: body.preTestLenght,
      lessonScore: body.lessonScore,
    }
   });

   return NextResponse.json(updateScore, {status: 200}) 
  } catch (error) {
    if (error instanceof Error) {
      // Handle the error
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    // Handle other cases or rethrow the error
    throw error;
  }
}

