'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Binary, Code2, Database, Network } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const categories = [
  {
    title: "Frontend",
    icon: <Code2 className="h-8 w-8" />,
    description: "Master web technologies, frameworks, and UI/UX concepts",
    path: "/frontend",
    gradient: "from-purple-500/20 to-purple-500/10 hover:from-purple-500/30 hover:to-purple-500/20",
    iconColor: "text-purple-500",
  },
  {
    title: "Backend",
    icon: <Database className="h-8 w-8" />,
    description: "Learn server-side programming, APIs, and databases",
    path: "/backend",
    gradient: "from-blue-500/20 to-blue-500/10 hover:from-blue-500/30 hover:to-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    title: "Database",
    icon: <Database className="h-8 w-8" />,
    description: "Master relational and NoSQL databases, queries, and optimization.",
    path: "/database",
    gradient: "from-teal-500/20 to-teal-500/10 hover:from-teal-500/30 hover:to-teal-500/20",
    iconColor: "text-teal-500",
  },
  {
    title: "System Design",
    icon: <Network className="h-8 w-8" />,
    description: "Design scalable and reliable distributed systems",
    path: "/system-design",
    gradient: "from-green-500/20 to-green-500/10 hover:from-green-500/30 hover:to-green-500/20",
    iconColor: "text-green-500",
  },
  // {
  //   title: "DSA",
  //   icon: <Binary className="h-8 w-8" />,
  //   description: "Practice essential data structures and algorithms for technical interviews.",
  //   path: "/dsa",
  //   gradient: "from-orange-500/20 to-orange-500/10 hover:from-orange-500/30 hover:to-orange-500/20",
  //   iconColor: "text-orange-500",
  // }
];


export function Categories() {
  return (
    <section className="space-y-6">
      <motion.h2
        className="text-3xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Categories
      </motion.h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={`${category.path}`}
              className="block transition-all duration-300 hover:scale-105 h-full"
            >
              <Card className={`h-full bg-gradient-to-br ${category.gradient} border-2 border-background/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl`}>
                <CardHeader className='flex items-center justify-center'>
                  <div className={`${category.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                    {category.icon}
                  </div>
                  <CardTitle className="mt-4 text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        )
        )}
      </motion.div>
    </section>
  );
}
