import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const lessons = await prisma.question.findMany({
        include: {
            lesson: true, 
            choices: true, 
            correctAnswer: true, 
        },
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

// type CorrectAnswer = {
//   id: string;
//   questionId: string;
// };

type Choice = {
  id: string;
  text: string;
  questionId: string;
};

type PostData = {
  id: string
  text: string;
  lessonId: string;
  choices: Choice[];
  correctAnswer: {
    choiceId: string;
  };
};

export async function POST(req: Request) {
  try {
    const postData: PostData = await req.json(); // Parse the incoming JSON data from the request body

    // Create a new lesson/question based on the postData
    const newQuestion = await prisma.question.create({
      data: {
        text: postData.text,
        lesson: {
          connect: { id: postData.lessonId },
        },
        choices: {
          create: postData.choices.map((choice) => ({
            text: choice.text,
            question: {
              connect: { id: postData.id }, // Connect the choice to the questionId
            },
          })),
        },
        correctAnswer: {
          connect: { id: postData.correctAnswer.choiceId },
        },
      },
      include: {
        lesson: true,
        choices: true,
        correctAnswer: true,
      },
    });

    return NextResponse.json(newQuestion, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}


