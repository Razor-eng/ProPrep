'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Brain } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-6"
    >
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Master Your Tech Interviews
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Comprehensive preparation platform for technical interviews. Practice with real questions from top tech companies.
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/questions">
            Start Practicing
          </Link>
        </Button>
        <Button variant="outline" size="lg">
          <Brain className="mr-2 h-4 w-4" />
          View Study Plan
        </Button>
      </div>
    </motion.div>
  );
}