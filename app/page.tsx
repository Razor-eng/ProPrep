"use client"
import { Categories } from '@/components/categories';
import { Hero } from '@/components/hero';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <Categories />
      <div className="flex items-center justify-center pb-4">
        <motion.div
          className="w-full md:w-[300px] text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
            delay: 0.2,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant={'outline'}
            size={'lg'}
            className="inline-block font-medium text-primary hover:text-primary/80 rounded-lg shadow-lg transition duration-300 ease-in-out w-full text-lg md:text-base border-primary"
          >
            <Link href="/fullstack">
              Prepare Fullstack
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}