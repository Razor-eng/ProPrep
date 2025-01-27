export type Difficulty = "Easy" | "Medium" | "Hard";

export type Category = "Frontend" | "Backend" | "Database" | "System Design" | "DSA";

export interface Question {
  id: string;
  title: string;
  category: Category;
  difficulty: Difficulty;
  content: string;
  technology: string;
  answer: string;
  company?: string;
  tags: string[];
}

export interface Technology {
  name: string;
  category: Category;
  icon: string;
}

export interface BookmarkedQuestion {
  questionId: string;
  timestamp: number;
}