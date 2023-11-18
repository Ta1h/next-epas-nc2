import { Score } from "@prisma/client";

export type User = {
  id: string
  email: string;
  name: string | null;
  role: string;
  created: string;
};

export type Unit = {
	id: string;
	unitNumber: string;
	unitTitle: string;
  lessons: Lesson[],
  score: Score[],
};
  
export type Lesson = {
  id: string;
  lessonNumber: string;
  lessonTitle: string;
  lessonPdf: bytes;
  unitId: string;
};
  
export type Choice = {
  id: string;
  text: string;
  questionId: string;
  value: Int;
};
  
export type Question = {
  id: string;
  text: string;
  lessonId: string;
  lesson: Lesson;
  choices: Choice[];
};
  