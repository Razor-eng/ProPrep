'use client'

import { useState, JSX } from 'react'
import { QuestionItem } from './question-item'
import { Search } from 'lucide-react'
import { Input } from './ui/input'

interface Question {
    question: string
    answer: string
    diagram?: {
        type: string
        content: string | JSX.Element
    }
}

interface QuestionListProps {
    questionsData: Question[]
}

export function QuestionList({ questionsData }: QuestionListProps) {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredQuestions = questionsData.filter(
        (item) =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-4 text-gray-800 dark:text-white">
            <div className="relative">
                <Input
                    type="text"
                    placeholder="Search questions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-md"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground dark:text-gray-500" size={20} />
            </div>
            {filteredQuestions.map((item, index) => (
                <QuestionItem key={index} id={index} question={item.question} answer={item.answer} diagram={item.diagram} />
            ))}
        </div>
    )
}
