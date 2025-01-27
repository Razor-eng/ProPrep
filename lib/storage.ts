import { BookmarkedQuestion } from "./types";

const BOOKMARKS_KEY = "interview-prep-bookmarks";
const PROGRESS_KEY_PREFIX = "interview-prep-progress-";
const LAST_VISITED_KEY = "interview-prep-last-visited";

export const StorageService = {
    getBookmarks: (): BookmarkedQuestion[] => {
        if (typeof window === "undefined") return [];
        const stored = localStorage.getItem(BOOKMARKS_KEY);
        return stored ? JSON.parse(stored) : [];
    },

    addBookmark: (questionId: string) => {
        const bookmarks = StorageService.getBookmarks();
        const newBookmark: BookmarkedQuestion = {
            questionId,
            timestamp: Date.now(),
        };
        localStorage.setItem(
            BOOKMARKS_KEY,
            JSON.stringify([...bookmarks, newBookmark])
        );
    },

    removeBookmark: (questionId: string) => {
        const bookmarks = StorageService.getBookmarks();
        localStorage.setItem(
            BOOKMARKS_KEY,
            JSON.stringify(bookmarks.filter((b) => b.questionId !== questionId))
        );
    },

    isBookmarked: (questionId: string): boolean => {
        const bookmarks = StorageService.getBookmarks();
        return bookmarks.some((b) => b.questionId === questionId);
    },

    updateProgress: (questionId: string, category: string, completed: boolean) => {
        const progress = StorageService.getProgress(category);
        if (completed) {
            if (!progress.includes(questionId)) {
                const updatedProgress = [...progress, questionId];
                localStorage.setItem(
                    PROGRESS_KEY_PREFIX + category.toLowerCase(),
                    JSON.stringify(updatedProgress)
                );
            }
        } else {
            const updatedProgress = progress.filter((id) => id !== questionId);
            localStorage.setItem(
                PROGRESS_KEY_PREFIX + category.toLowerCase(),
                JSON.stringify(updatedProgress)
            );
        }
    },

    getProgress: (category: string): string[] => {
        if (typeof window === "undefined") return [];
        const stored = localStorage.getItem(PROGRESS_KEY_PREFIX + category.toLowerCase());
        return stored ? JSON.parse(stored) : [];
    },

    setLastVisited: (questionId: string) => {
        localStorage.setItem(LAST_VISITED_KEY, questionId);
    },

    getLastVisited: (): string | null => {
        return localStorage.getItem(LAST_VISITED_KEY);
    }
};