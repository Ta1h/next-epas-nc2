import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const units = await prisma.unit.findMany({
      include: {
        lessons: true,
        score: true,
      },
    });
    if (!units || units.length === 0) {
      return NextResponse.json({ message: "No units found" }, { status: 404 });
    }
    return NextResponse.json(units);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
