'use client';

import { useEffect, useState } from 'react';
import { questions } from '@/lib/questions';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Building,
  Search,
  Sliders,
  BookmarkIcon,
  BookmarkPlusIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { StorageService } from '@/lib/storage';
import { useToast } from '@/hooks/use-toast';
import { Question } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function QuestionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchFilteredQuestions = () => {
      setTimeout(() => {
        const fetchedQuestions = questions.filter((question) => {
          const matchesSearch =
            question.title.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesCategory =
            selectedCategory === 'all' || question.category === selectedCategory;
          const matchesDifficulty =
            selectedDifficulty === 'all' || question.difficulty === selectedDifficulty;
          return matchesSearch && matchesCategory && matchesDifficulty;
        });
        setFilteredQuestions(fetchedQuestions);
        setLoading(false);
      }, 500);
    };

    fetchFilteredQuestions();
  }, [searchQuery, selectedCategory, selectedDifficulty]);

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Interview Questions</h1>
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <Sliders className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="space-y-4 mt-4">
                {/* Category Filter */}
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Frontend">Frontend</SelectItem>
                    <SelectItem value="Backend">Backend</SelectItem>
                    <SelectItem value="Database">Database</SelectItem>
                    <SelectItem value="System Design">System Design</SelectItem>
                    {/* <SelectItem value="DSA">DSA</SelectItem> */}
                  </SelectContent>
                </Select>

                {/* Difficulty Filter */}
                <Select
                  value={selectedDifficulty}
                  onValueChange={setSelectedDifficulty}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Difficulties</SelectItem>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </SheetContent>
          </Sheet>

          {/* Filters for Larger Screens */}
          <div className="hidden md:flex items-center gap-2">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Frontend">Frontend</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="Database">Database</SelectItem>
                <SelectItem value="System Design">System Design</SelectItem>
                {/* <SelectItem value="DSA">DSA</SelectItem> */}
              </SelectContent>
            </Select>
            <Select
              value={selectedDifficulty}
              onValueChange={setSelectedDifficulty}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Questions Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredQuestions.map((question, index) => (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
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
                  <div className="flex items-center gap-2">
                    {question.company && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Building className="mr-1 h-4 w-4" />
                        {question.company}
                      </div>
                    )}
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
                </div>
                <CardTitle className="line-clamp-2">{question.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {question.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className={`w-full text-primary-foreground ${getButtonColorByTheme()}`}
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
        ))}
      </div>
      {filteredQuestions.length === 0 &&
        <div className='text-muted-foreground text-center pt-36'>
          <p>No questions found. Try adjusting the filter.</p>
        </div>
      }
    </div>
  );
}
