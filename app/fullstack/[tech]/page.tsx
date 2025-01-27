'use client'

import { useParams } from 'next/navigation'
import { QuestionList } from '@/components/question-list'
import { frontendQuestionsData, backendQuestionsData, databaseQuestionsData } from '@/lib/fullstackQuestions'
import { Skeleton } from '@/components/ui/skeleton';

export interface Question {
    question: string;
    answer: string;
}

const TechPage = () => {
    const { tech } = useParams()

    let questionsData: Question[] = []

    if (tech === 'frontend') {
        questionsData = frontendQuestionsData
    } else if (tech === 'backend') {
        questionsData = backendQuestionsData
    } else if (tech === 'database') {
        questionsData = databaseQuestionsData
    } else {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-6">Invalid Category</h1>
                <p>The category "{tech}" is not recognized. Please choose from 'frontend', 'backend', or 'database'.</p>
            </div>
        )
    }

    if (!questionsData.length) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
                <Skeleton className="h-12 w-3/4 max-w-md bg-gray-200 dark:bg-gray-700" />
                <Skeleton className="h-6 w-1/2 max-w-sm bg-gray-200 dark:bg-gray-700" />
                <Skeleton className="h-6 w-1/3 max-w-xs bg-gray-200 dark:bg-gray-700" />
                {/* Skeleton for each question's content */}
                <div className="space-y-4 w-full max-w-4xl">
                    <Skeleton className="h-12 w-full bg-gray-200 dark:bg-gray-700" />
                    <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700" />
                    <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700" />
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">
                {typeof tech === 'string' ? tech.charAt(0).toUpperCase() + tech.slice(1) : 'Category'} Questions
            </h1>
            <div className="w-full max-w-4xl">
                <QuestionList questionsData={questionsData} />
            </div>
        </div>
    )
}

export default TechPage
