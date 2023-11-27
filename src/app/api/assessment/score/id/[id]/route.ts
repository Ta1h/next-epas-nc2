import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const body = await req.json();

    console.log(body)
    const scores = await prisma.score.findMany({
      
    });
    
    return NextResponse.json(scores);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    console.log('Received PATCH request with body:', body);

    // Make sure the 'id' property is present in the request body
    if (!body.id) {
      return NextResponse.json(
        { message: 'Missing or undefined "id" in the request body' },
        { status: 400 }
      );
    }

    const updateScore = await prisma.score.update({
      where: { id: body.id },
      data: {
        preTestScore: body.preTestScore,
        lessonScore: body.lessonScore,
        lessonLength: body.lessonLength,
      },
    });

    console.log('Updated score:', updateScore);

    return NextResponse.json(updateScore, { status: 200 });
  } catch (error) {
    console.error('Error updating score:', error);

    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    throw error;
  }
}