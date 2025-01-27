'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { questions } from '@/lib/questions';
import { Brain, Clock, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StudyPlanPage() {
  const [focusArea, setFocusArea] = useState('all');
  const [timeCommitment, setTimeCommitment] = useState(2); // hours per day
  const [difficulty, setDifficulty] = useState('all');

  const generatePlan = () => {
    let filteredQuestions = questions;

    if (focusArea !== 'all') {
      filteredQuestions = filteredQuestions.filter(q => q.category === focusArea);
    }

    if (difficulty !== 'all') {
      filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
    }

    const questionsPerDay = Math.ceil(timeCommitment * 2); // Assuming 30 mins per question
    const weeklyPlan = Array.from({ length: 7 }, (_, dayIndex) => {
      const dayQuestions = filteredQuestions
        .slice(dayIndex * questionsPerDay, (dayIndex + 1) * questionsPerDay);
      return {
        day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayIndex],
        questions: dayQuestions,
      };
    });

    return weeklyPlan;
  };

  const plan = generatePlan();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Study Plan Generator</h1>
        <p className="text-muted-foreground">
          Create a personalized study plan based on your preferences and availability.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Focus Area
            </CardTitle>
            <CardDescription>Choose your primary study focus</CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={focusArea} onValueChange={setFocusArea}>
              <SelectTrigger>
                <SelectValue placeholder="Select focus area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Areas</SelectItem>
                <SelectItem value="Frontend">Frontend</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="Database">Database</SelectItem>
                <SelectItem value="System Design">System Design</SelectItem>
                {/* <SelectItem value="DSA">DSA</SelectItem> */}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Time Commitment
            </CardTitle>
            <CardDescription>Hours per day you can dedicate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Slider
                value={[timeCommitment]}
                onValueChange={([value]) => setTimeCommitment(value)}
                min={1}
                max={6}
                step={0.5}
              />
              <p className="text-center text-sm text-muted-foreground">
                {timeCommitment} hours per day
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Difficulty Level
            </CardTitle>
            <CardDescription>Select your preferred difficulty</CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Your Weekly Plan</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plan.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{day.day}</CardTitle>
                  <CardDescription>
                    {day.questions.length} questions to practice
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {day.questions.map((question) => (
                      <li key={question.id} className="text-sm">
                        • {question.title}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}