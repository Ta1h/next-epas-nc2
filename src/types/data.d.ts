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
};
  
export type Lesson = {
  id: string;
  lessonNumber: string;
  lessonTitle: string;
  lessonPdf: string;
  unitId: string;
};

export type CorrectAnswer = {
  id: string;
  questionId: string;
  choiceId: string;
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
  correctAnswer: CorrectAnswer;
};
  