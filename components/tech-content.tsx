'use client';

import { useState } from 'react';
import type { Question } from '@/lib/types';
import { StorageService } from '@/lib/storage';
import QuestionProgress from './question-progress';
import QuestionCard from './question-card';
import QuestionFilters from './question-filters';
import { motion } from 'framer-motion';

interface TechContentProps {
  category: string;
  questions: Question[];
}

export function TechContent({ category, questions }: TechContentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<"All" | "Easy" | "Medium" | "Hard">("All");
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [view, setView] = useState<"grid" | "list">("grid");

  const progress = StorageService.getProgress(category);

  const filteredQuestions = questions
    .filter((question) => {
      const matchesSearch = question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        question.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = selectedDifficulty === "All" || question.difficulty === selectedDifficulty;
      return matchesSearch && matchesDifficulty;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      }
      return b.title.localeCompare(a.title);
    });

  return (
    <div className="space-y-8 px-4 py-6 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <QuestionProgress
          category={category}
          progressCount={progress.length}
          totalQuestions={questions.length}
        />
        <QuestionFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          view={view}
          setView={setView}
        />
      </motion.div>

      <div className={view === "grid" ?
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" :
        "flex flex-col space-y-4"
      }>
        {filteredQuestions.map((question, id) => (
          <QuestionCard
            key={question.id}
            id={id}
            question={question}
            category={category}
            view={view}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          />
        ))}
      </div>
    </div>
  );
}