import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookmarkIcon, BookmarkPlusIcon, BuildingIcon, CheckCircle, CodeXml, Eye } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { StorageService } from "@/lib/storage";
import { motion } from "framer-motion";
import { Question } from "@/lib/types";
import Link from "next/link";

interface QuestionCardProps {
    question: Question;
    category: string;
    view: "grid" | "list";
    openDialog: string | null;
    setOpenDialog: (id: string | null) => void;
    id: number;
}

const QuestionCard = ({ question, category, view, openDialog, setOpenDialog, id: index }: QuestionCardProps) => {
    const { toast } = useToast();

    const toggleBookmark = (questionId: string) => {
        if (StorageService.isBookmarked(questionId)) {
            StorageService.removeBookmark(questionId);
            toast({
                title: "Bookmark removed",
                description: "Question removed from bookmarks",
            });
        } else {
            StorageService.addBookmark(questionId);
            toast({
                title: "Bookmarked!",
                description: "Question added to bookmarks",
            });
        }
    };

    const handleQuestionClick = (questionId: string) => {
        StorageService.setLastVisited(questionId);
    };

    const getButtonColorByTheme = () => {
        const htmlElement = document.documentElement;
        const theme = htmlElement.className;

        switch (theme) {
            case 'forest':
                return 'bg-[hsl(141,83.2%,53.3%)] hover:bg-[hsl(141,83.2%,48.3%)]';
            case 'sunset':
                return 'bg-[hsl(35,83.2%,53.3%)] hover:bg-[hsl(35,83.2%,48.3%)]';
            case 'ocean':
                return 'bg-[hsl(201,83.2%,53.3%)] hover:bg-[hsl(201,83.2%,48.3%)]';
            case 'dark':
                return 'bg-[hsl(217.2,91.2%,59.8%)] hover:bg-[hsl(217.2,91.2%,54.8%)]';
            default:
                return 'bg-primary hover:bg-primary/90';
        }
    };

    return (
        <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <Card className={`animate-fade-in transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-card/50 to-background border-2 border-background/50 dark:border-gray-800 shadow-lg backdrop-blur-sm h-full hover:shadow-xl ${view === "list" ? "flex flex-col md:flex-row items-start w-full md:gap-4" : "flex flex-col justify-between"}`}>
                <CardHeader className={`${view === "list" ? "flex-1 w-full md:min-w-[300px]" : ""}`}>
                    <div className="flex flex-row items-start justify-between space-y-0">
                        <div className="flex-1">
                            <CardTitle className="line-clamp-2 text-base sm:text-lg text-foreground">{question.title}</CardTitle>
                            <CardDescription className="flex items-center mt-1 gap-2">
                                <Link href={`/${question.category.toLowerCase().split(" ").join("-")}`} className="flex items-center gap-1 hover:text-primary/70 transition-colors">
                                    {question.company ? <BuildingIcon size={16} /> : <CodeXml size={16} />}
                                    {question.company ? question.company : question.category}
                                </Link>
                                {StorageService.getProgress(category).includes(question.id) && (
                                    <CheckCircle className="h-4 w-4 text-success" />
                                )}
                            </CardDescription>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleBookmark(question.id)}
                            className="hover:text-primary shrink-0"
                        >
                            {StorageService.isBookmarked(question.id) ?
                                <BookmarkIcon className="fill-primary text-primary" />
                                :
                                <BookmarkPlusIcon />
                            }
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className={`space-y-4 ${view === "list" ? "md:w-auto md:min-w-[200px] flex md:flex-col gap-2 items-center justify-center" : ""}`}>
                    <div className="flex flex-wrap gap-2 h-fit">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                            {question.category}
                        </Badge>
                        <Badge
                            variant="outline"
                            className={
                                question.difficulty === "Easy"
                                    ? "bg-success/10 text-success border-success/20"
                                    : question.difficulty === "Medium"
                                        ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                                        : "bg-destructive/10 text-destructive border-destructive/20"
                            }
                        >
                            {question.difficulty}
                        </Badge>
                    </div>
                    <Dialog
                        open={openDialog === question.id}
                        onOpenChange={(open) => {
                            setOpenDialog(open ? question.id : null);
                            if (!open) {
                                StorageService.updateProgress(question.id, category, true);
                            }
                        }}
                    >
                        <DialogTrigger asChild>
                            <Button
                                className={`${view === "list" ? "w-fit md:w-full" : "w-full"} text-primary-foreground ${getButtonColorByTheme()}`}
                                onClick={() => handleQuestionClick(question.id)}
                            >
                                View Answer
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>{question.title}</DialogTitle>
                                <DialogDescription asChild>
                                    <div className="space-y-4">
                                        <div className="font-semibold text-foreground">Question:</div>
                                        <div className="text-muted-foreground">{question.content}</div>
                                        <div className="font-semibold text-foreground mt-4">Answer:</div>
                                        <div className="text-muted-foreground whitespace-pre-wrap">
                                            {question.answer}
                                        </div>
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default QuestionCard;
