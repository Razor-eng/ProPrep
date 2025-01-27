import { frontendQuestions } from "./questions/frontend";
import { backendQuestions } from "./questions/backend";
import { systemDesignQuestions } from "./questions/system-design";
// import { dsaQuestions } from "./questions/dsa";
import { Question } from "./types";
import { databaseQuestions } from "./questions/database";

export const questions: Question[] = [
    ...frontendQuestions,
    ...backendQuestions,
    ...databaseQuestions,
    ...systemDesignQuestions,
    // ...dsaQuestions
];