"use client";
import Link from 'next/link';
import { FaReact, FaServer, FaDatabase } from 'react-icons/fa'; // React Icons
import { motion } from 'framer-motion';

export default function Home() {
    const techCategories = [
        {
            href: "/fullstack/frontend",
            icon: FaReact,
            color: 'text-blue-500',
            title: "Frontend",
            description: "Explore the world of web interfaces and user experiences.",
        },
        {
            href: "/fullstack/backend",
            icon: FaServer,
            color: 'text-green-500',
            title: "Backend",
            description: "Dive into server-side programming and APIs.",
        },
        {
            href: "/fullstack/database",
            icon: FaDatabase,
            color: 'text-orange-500',
            title: "Database",
            description: "Learn about data storage, SQL, and database management.",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <motion.h1
                className="text-3xl font-semibold text-gray-900 dark:text-white mb-12 text-center pt-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                Explore Technology Categories
            </motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4 md:p-8 max-w-screen-xl mx-auto">
                {techCategories.map((category, index) => (
                    <Link key={index} href={category.href}>
                        <motion.div
                            className="tech-card bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center justify-between h-full"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                        >
                            <category.icon size={48} className={`mb-4 ${category.color}`} />
                            <h2 className="text-xl font-semibold text-center mb-4">{category.title}</h2>
                            <p className="text-center text-base opacity-80 mb-6">
                                {category.description}
                            </p>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
