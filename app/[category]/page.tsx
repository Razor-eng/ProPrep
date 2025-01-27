"use client"
import { notFound, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Technology } from '@/lib/types';
import { technologies } from '@/lib/technologies';
import { TechnologyContent } from '@/components/technology-content';

export default function CategoryPage() {
    const { category } = useParams();
    const [loading, setLoading] = useState(true);
    const [categoryTechs, setCategoryTechs] = useState<Technology[]>([]);
    if (!category) {
        notFound();
    }

    useEffect(() => {
        const fetchCategoryQuestions = () => {
            setTimeout(() => {
                const fetchedTechs = technologies.filter(
                    q => q.category.toLowerCase() === (category as string).split('-').join(" ").toLowerCase()
                );
                setCategoryTechs(fetchedTechs);
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
        <TechnologyContent category={(category as string).split('-').join(" ")} techs={categoryTechs} />
    );
}