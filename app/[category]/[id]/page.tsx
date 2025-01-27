"use client"
import { notFound, useParams } from 'next/navigation';
import { categories } from '@/lib/data';
import { questions } from '@/lib/questions';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Question } from '@/lib/types';
import { TechContent } from '@/components/tech-content';
import { technologies } from '@/lib/technologies';

export default function TechPage() {
  const { category, id } = useParams();
  const [loading, setLoading] = useState(true);
  const [categoryQuestions, setCategoryQuestions] = useState<Question[]>([]);
  const isCategoryAvailable = categories.find(c => c.id.toLowerCase() === (category as string).toLowerCase())?.name;
  const tech = technologies.find(t => t.name.toLowerCase() === (id as string).toLowerCase())?.name;

  if (!isCategoryAvailable || !tech) {
    notFound();
  }

  useEffect(() => {
    const fetchCategoryQuestions = () => {
      setTimeout(() => {
        const fetchedQuestions = questions.filter(
          q => q.technology.toLowerCase() === tech.toLowerCase()
        );
        setCategoryQuestions(fetchedQuestions);
        setLoading(false);
      }, 500);
    };

    fetchCategoryQuestions();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} className="h-6 w-3/4 mx-auto" />
          ))}
          <Skeleton className="h-6 w-2/3 mx-auto" />
          <Skeleton className="h-40 w-full rounded-md" />
        </div>
      </div>
    );
  }

  return (
    <TechContent category={tech} questions={categoryQuestions} />
  );
}