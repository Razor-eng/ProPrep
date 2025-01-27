import { Progress } from "@/components/ui/progress";

interface QuestionProgressProps {
    category: string;
    progressCount: number;
    totalQuestions: number;
}

const QuestionProgress = ({ category, progressCount, totalQuestions }: QuestionProgressProps) => {
    const progressPercentage = (progressCount / totalQuestions) * 100;

    return (
        <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in">
                {category} Questions
            </h1>
            <div className="w-full max-w-xl mx-auto">
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">
                    {Math.round(progressPercentage)}% Complete ({progressCount}/{totalQuestions} questions)
                </p>
            </div>
        </div>
    );
};

export default QuestionProgress;