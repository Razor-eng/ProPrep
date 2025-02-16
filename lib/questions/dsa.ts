// import { Question } from "../types";

// export const dsaQuestions: Question[] = [
//     {
//         id: "d1",
//         title: "Implement Binary Search",
//         category: "DSA",
//         difficulty: "Easy",
//         content: "Implement binary search algorithm",
//         answer: "```typescript\nfunction binarySearch(arr: number[], target: number): number {\n  let left = 0;\n  let right = arr.length - 1;\n\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}```",
//         company: "Google",
//         tags: ["Algorithms", "Searching", "Arrays"],
//     },
//     {
//         id: "d2",
//         title: "Implement Quick Sort",
//         category: "DSA",
//         difficulty: "Medium",
//         content: "Implement quick sort algorithm",
//         answer: "```typescript\nfunction quickSort(arr: number[]): number[] {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[0];\n  const left = arr.slice(1).filter(x => x <= pivot);\n  const right = arr.slice(1).filter(x => x > pivot);\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}```",
//         company: "Microsoft",
//         tags: ["Algorithms", "Sorting", "Divide and Conquer"],
//     },
//     {
//         id: "d3",
//         title: "Detect Cycle in Linked List",
//         category: "DSA",
//         difficulty: "Medium",
//         content: "Implement Floyd's cycle detection algorithm",
//         answer: "```typescript\nclass ListNode {\n  val: number;\n  next: ListNode | null;\n  constructor(val: number) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nfunction hasCycle(head: ListNode | null): boolean {\n  if (!head) return false;\n  let slow = head;\n  let fast = head;\n  \n  while (fast.next && fast.next.next) {\n    slow = slow.next!;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}```",
//         company: "Amazon",
//         tags: ["Data Structures", "Linked Lists", "Two Pointers"],
//     },
//     {
//         id: "d4",
//         title: "LRU Cache Implementation",
//         category: "DSA",
//         difficulty: "Hard",
//         content: "Implement an LRU Cache with O(1) operations",
//         answer: "```typescript\nclass LRUCache {\n  private capacity: number;\n  private cache: Map<number, number>;\n\n  constructor(capacity: number) {\n    this.capacity = capacity;\n    this.cache = new Map();\n  }\n\n  get(key: number): number {\n    if (!this.cache.has(key)) return -1;\n    const value = this.cache.get(key)!;\n    this.cache.delete(key);\n    this.cache.set(key, value);\n    return value;\n  }\n\n  put(key: number, value: number): void {\n    if (this.cache.has(key)) this.cache.delete(key);\n    else if (this.cache.size >= this.capacity) {\n      const firstKey = this.cache.keys().next().value;\n      this.cache.delete(firstKey);\n    }\n    this.cache.set(key, value);\n  }\n}```",
//         company: "Facebook",
//         tags: ["Data Structures", "Hash Table", "Linked List"],
//     },
//     {
//         id: "d5",
//         title: "Implement Trie",
//         category: "DSA",
//         difficulty: "Medium",
//         content: "Implement a Trie (Prefix Tree)",
//         answer: "```typescript\nclass TrieNode {\n  children: Map<string, TrieNode>;\n  isEndOfWord: boolean;\n\n  constructor() {\n    this.children = new Map();\n    this.isEndOfWord = false;\n  }\n}\n\nclass Trie {\n  root: TrieNode;\n\n  constructor() {\n    this.root = new TrieNode();\n  }\n\n  insert(word: string): void {\n    let current = this.root;\n    for (const char of word) {\n      if (!current.children.has(char)) {\n        current.children.set(char, new TrieNode());\n      }\n      current = current.children.get(char)!;\n    }\n    current.isEndOfWord = true;\n  }\n\n  search(word: string): boolean {\n    const node = this.traverse(word);\n    return node !== null && node.isEndOfWord;\n  }\n\n  private traverse(word: string): TrieNode | null {\n    let current = this.root;\n    for (const char of word) {\n      if (!current.children.has(char)) return null;\n      current = current.children.get(char)!;\n    }\n    return current;\n  }\n}```",
//         company: "Google",
//         tags: ["Data Structures", "Trie", "Strings"],
//     },
//     {
//         id: "d6",
//         title: "Implement A* Algorithm",
//         category: "DSA",
//         difficulty: "Hard",
//         content: "Implement A* pathfinding algorithm",
//         answer: "A* is a best-first search algorithm that finds the shortest path between nodes. It uses a heuristic function to estimate the distance to the goal. Implementation includes priority queue for frontier nodes and visited set for explored nodes.",
//         company: "Google",
//         tags: ["Algorithms", "Pathfinding", "Graphs"],
//     },
//     {
//         id: "d7",
//         title: "Implement Red-Black Tree",
//         category: "DSA",
//         difficulty: "Hard",
//         content: "Implement a Red-Black Tree data structure",
//         answer: "Red-Black Tree is a self-balancing BST where nodes are colored red or black. Properties: root is black, red nodes can't have red children, all paths from root to leaves have same number of black nodes. Implementation includes rotation and recoloring operations.",
//         company: "Microsoft",
//         tags: ["Data Structures", "Trees", "Balance"],
//     }
// ];
