'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select'; // Assuming you're using a custom select component.
import type { Technology } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';

interface TechnologyContentProps {
    category: string;
    techs: Technology[];
}

export function TechnologyContent({ category, techs }: TechnologyContentProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("name"); // Default sort by name

    const handleSortChange = (value: string) => {
        setSortBy(value);
    };

    const filteredTechs = techs
        .filter((tech) => tech.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            } else if (sortBy === "category") {
                return a.category.localeCompare(b.category);
            }
            return 0;
        });

    return (
        <div className="space-y-8 px-4 py-4 md:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
            >
                <div className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl capitalize font-bold text-foreground">
                        {category}
                    </h1>
                </div>

                <div className="flex gap-3 sm:gap-6 justify-between items-center">
                    <div className="relative w-full sm:w-3/4">
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                        />
                        <Input
                            placeholder="Search technologies..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-full"
                        />
                    </div>

                    <Select value={sortBy} onValueChange={handleSortChange}>
                        <SelectTrigger className="w-auto sm:flex-1">
                            <SelectValue placeholder="Sort By" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="name">Name</SelectItem>
                            <SelectItem value="category">Category</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
                {filteredTechs.map((tech, id) => (
                    <TechnologyCard key={id} tech={tech} />
                ))}
                {filteredTechs.length === 0 && (
                    <p className="col-span-full text-center text-muted-foreground mt-14">
                        No technologies found for "{searchTerm}"
                    </p>
                )}
            </motion.div>
        </div>
    );
}

const TechnologyCard = ({ tech }: { tech: Technology }) => {
    return (
        <Link href={`/${tech.category.toLowerCase().split(" ").join("-")}/${tech.name}`}>
            <Card className="p-4 shadow-md hover:shadow-lg transition-shadow rounded-lg bg-card text-card-foreground h-full">
                <CardContent className="flex flex-col items-center gap-3 max-h-36">
                    <Image
                        src={tech.icon}
                        alt={`${tech.name} Icon`}
                        width={64}
                        height={64}
                        className="object-contain size-14"
                        priority={false}
                        blurDataURL={tech.icon}
                        placeholder="blur"
                    />
                    <h2 className="text-lg flex-1 font-semibold text-center">{tech.name}</h2>
                    <Badge className="mt-2">{tech.category}</Badge>
                </CardContent>
            </Card>
        </Link>
    );
};
