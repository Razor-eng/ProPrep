'use client';

import { useState, useEffect } from 'react';
import { BookmarkCheck } from 'lucide-react';
import { questions } from '@/lib/questions';
import { StorageService } from '@/lib/storage';
import { CategoryContent } from '@/components/category-content';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { Question } from '@/lib/types';

export default function BookmarksPage() {
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookmarkedQuestions = () => {
      setTimeout(() => {
        const fetchedQuestions = questions.filter((question) =>
          StorageService.isBookmarked(question.id)
        );
        setBookmarkedQuestions(fetchedQuestions);
        setLoading(false);
      }, 500);
    };

    fetchBookmarkedQuestions();
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
    <div className="space-y-6">
      {bookmarkedQuestions.length === 0 ? (
        <div className="text-center py-12">
          <BookmarkCheck className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 text-lg font-semibold">No bookmarked questions yet</h2>
          <p className="text-muted-foreground">
            Bookmark your favorite questions to easily review them later.
          </p>
          <div className="mt-6">
            <Link href="/questions">
              <Button variant="outline">Browse Questions</Button>
            </Link>
          </div>
        </div>
      ) : (
        <CategoryContent questions={bookmarkedQuestions} category="Bookmarked" />
      )}
    </div>
  );
}
