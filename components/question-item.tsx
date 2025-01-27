'use client'

import { useState, JSX } from 'react'
import { ChevronRight } from 'lucide-react'
import { Modal } from './Modal'
import { motion } from 'framer-motion'

type QuestionItemProps = {
    question: string
    answer: string
    id: number
    diagram?: {
        type: string
        content: string | JSX.Element
    }
}

export function QuestionItem({ question, id: index, answer, diagram }: QuestionItemProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <div className="border-b border-gray-200 dark:border-gray-700">
                <button
                    className="flex justify-between items-center w-full py-4 px-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg shadow-md dark:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => setIsModalOpen(true)}
                >
                    <h3 className="md:text-xl font-semibold text-gray-800 dark:text-white">{question}</h3>
                    <ChevronRight
                        size={20}
                        className="text-gray-500 dark:text-gray-400 transition-transform duration-300 transform group-hover:rotate-90"
                    />
                </button>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={question}
                content={answer}
                diagram={diagram}
            />
        </motion.div>
    )
}
