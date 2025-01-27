import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, SortAsc, SortDesc, LayoutGrid, List } from "lucide-react";

interface QuestionFiltersProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedDifficulty: string;
    setSelectedDifficulty: (difficulty: "All" | "Easy" | "Medium" | "Hard") => void;
    sortOrder: "asc" | "desc";
    setSortOrder: (value: "asc" | "desc") => void;
    view: "grid" | "list";
    setView: (value: "grid" | "list") => void;
}

const QuestionFilters = ({
    searchTerm,
    setSearchTerm,
    selectedDifficulty,
    setSelectedDifficulty,
    sortOrder,
    setSortOrder,
    view,
    setView,
}: QuestionFiltersProps) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                    placeholder="Search questions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full"
                />
            </div>

            <div className="flex gap-4 items-center w-full md:w-auto">
                <Select
                    value={selectedDifficulty}
                    onValueChange={(value) => setSelectedDifficulty(value as "All" | "Easy" | "Medium" | "Hard")}
                >
                    <SelectTrigger className="w-full md:w-[200px]">
                        <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All Difficulties</SelectItem>
                        <SelectItem value="Easy">Easy</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Hard">Hard</SelectItem>
                    </SelectContent>
                </Select>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                >
                    {sortOrder === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
                </Button>

                <Button
                    className="hidden md:flex"
                    variant="outline"
                    size="icon"
                    onClick={() => setView(view === "grid" ? "list" : "grid")}
                >
                    {view === "grid" ? <List className="h-4 w-4" /> : <LayoutGrid className="h-4 w-4" />}
                </Button>
            </div>
        </div>
    );
};

export default QuestionFilters;