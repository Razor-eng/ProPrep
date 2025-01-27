import { Question } from "../types";

// export const systemDesignQuestions: Question[] = [
//     {
//         id: "s1",
//         title: "Design URL Shortener",
//         category: "System Design",
//         difficulty: "Medium",
//         content: "Design a URL shortening service like bit.ly",
//         answer: "Key components: 1) Hash function to generate short URLs, 2) Database to store URL mappings, 3) Cache layer for frequent URLs, 4) Load balancer for distribution. Consider: URL expiration, analytics, custom URLs. Scale considerations: distributed systems, database sharding, and caching strategies.",
//         company: "Bit.ly",
//         tags: ["System Design", "Scalability", "Databases"],
//     },
//     {
//         id: "s2",
//         title: "Design Twitter",
//         category: "System Design",
//         difficulty: "Hard",
//         content: "Design a simplified version of Twitter",
//         answer: "Components: User Service, Tweet Service, Timeline Service, Media Service. Consider: Fan-out approach for timeline generation, caching strategy for hot tweets, database choice (NoSQL for tweets), real-time notifications, and analytics. Scale: Sharding, load balancing, and CDN for media.",
//         company: "Twitter",
//         tags: ["System Design", "Scalability", "Real-time"],
//     },
//     {
//         id: "s3",
//         title: "Design Chat Application",
//         category: "System Design",
//         difficulty: "Hard",
//         content: "Design a real-time chat application",
//         answer: "Components: WebSocket server for real-time communication, message service, presence service (online/offline status), notification service. Consider: Message persistence, delivery guarantees, group chats, and media sharing. Scale: Multiple WebSocket servers, message queues, and database sharding.",
//         company: "WhatsApp",
//         tags: ["System Design", "Real-time", "WebSocket"],
//     },
//     {
//         id: "s4",
//         title: "Design Rate Limiter",
//         category: "System Design",
//         difficulty: "Medium",
//         content: "Design a distributed rate limiter",
//         answer: "Approaches: 1) Token Bucket, 2) Leaky Bucket, 3) Fixed Window Counter, 4) Sliding Window. Implementation using Redis for distributed counting. Consider: Accuracy vs performance, synchronization issues, and failure handling. Scale: Multiple Redis instances, consistent hashing.",
//         company: "Stripe",
//         tags: ["System Design", "Distributed Systems", "Rate Limiting"],
//     },
//     {
//         id: "s5",
//         title: "Design Cache System",
//         category: "System Design",
//         difficulty: "Hard",
//         content: "Design a distributed caching system",
//         answer: "Components: Cache servers, consistent hashing for distribution, eviction policies (LRU/LFU). Consider: Cache coherence, write policies (write-through/write-back), TTL, and cache warming. Scale: Partitioning, replication, and failure handling.",
//         company: "Redis",
//         tags: ["System Design", "Caching", "Distributed Systems"],
//     },
//     {
//         id: "s6",
//         title: "Design Netflix",
//         category: "System Design",
//         difficulty: "Hard",
//         content: "Design a video streaming service like Netflix",
//         answer: "Key components: CDN for content delivery, recommendation system, video transcoding pipeline, and user authentication. Consider: multiple video quality levels, regional content restrictions, and viewing history tracking. Scale considerations: global CDN distribution, cache optimization, and microservices architecture.",
//         company: "Netflix",
//         tags: ["System Design", "Streaming", "CDN"],
//     },
//     {
//         id: "s7",
//         title: "Design Uber",
//         category: "System Design",
//         difficulty: "Hard",
//         content: "Design a ride-sharing service like Uber",
//         answer: "Components: Location tracking, matching algorithm, payment processing, and real-time notifications. Consider: surge pricing, driver/rider matching optimization, and safety features. Scale: Geospatial indexing, load balancing, and real-time data processing.",
//         company: "Uber",
//         tags: ["System Design", "Real-time", "Location Services"],
//     }
// ];

const gitQuestions: Question[] = [
    {
        id: "git1",
        title: "What is Git and why is it important in software development?",
        category: "System Design",
        difficulty: "Medium",
        content: "Explain what Git is and its role in managing software projects.",
        technology: "Git",
        answer: "Git is a distributed version control system that tracks changes in source code during software development. It helps developers collaborate efficiently by allowing them to work on different branches, track changes, and merge code.",
        tags: ["Git", "Version Control", "System Design"],
    },
    {
        id: "git2",
        title: "Explain the difference between `git pull` and `git fetch`.",
        category: "System Design",
        difficulty: "Medium",
        content: "What is the difference between `git pull` and `git fetch`?",
        technology: "Git",
        answer: "`git fetch` retrieves changes from a remote repository but does not merge them, while `git pull` fetches and then merges the changes into the local branch. `git pull` is a combination of `git fetch` and `git merge`.",
        tags: ["Git", "Version Control", "Commands"],
    }
];

const dockerQuestions: Question[] = [
    {
        id: "docker1",
        title: "What is Docker and how does it work?",
        category: "System Design",
        difficulty: "Medium",
        content: "Explain the concept of Docker and its main components.",
        technology: "Docker",
        answer: "Docker is a platform that allows developers to package applications and their dependencies into containers. These containers can run consistently across any environment. Main components include Docker images, containers, and Docker Engine.",
        tags: ["Docker", "Containers", "System Design"],
    },
    {
        id: "docker2",
        title: "What is the difference between a Docker container and a virtual machine?",
        category: "System Design",
        difficulty: "Medium",
        content: "Explain the differences between Docker containers and virtual machines.",
        technology: "Docker",
        answer: "Docker containers share the host OS's kernel and run as isolated processes, making them lightweight and faster than virtual machines, which require a full OS to run. Containers are ideal for microservices, while VMs are more suitable for running entire operating systems.",
        tags: ["Docker", "Containers", "Virtual Machines"],
    }
];

const jiraQuestions: Question[] = [
    {
        id: "jira1",
        title: "What is Jira and how is it used in agile development?",
        category: "System Design",
        difficulty: "Medium",
        content: "Describe how Jira can be utilized in an agile software development process.",
        technology: "Jira",
        answer: "Jira is a project management tool commonly used in agile software development. It allows teams to plan, track, and release software by creating user stories, epics, and tasks, with workflows that support Scrum, Kanban, or custom agile methodologies.",
        tags: ["Jira", "Agile", "Project Management"],
    },
    {
        id: "jira2",
        title: "What are Jira workflows and how do they help in tracking issues?",
        category: "System Design",
        difficulty: "Medium",
        content: "Explain the concept of workflows in Jira and their role in issue tracking.",
        technology: "Jira",
        answer: "Jira workflows define the life cycle of an issue, from creation to completion. They allow teams to manage and track the status of issues, such as 'To Do', 'In Progress', 'Done', and can be customized to fit the team's processes.",
        tags: ["Jira", "Workflows", "Project Management"],
    }
];

const figmaQuestions: Question[] = [
    {
        id: "figma1",
        title: "What is Figma and how is it used in UI/UX design?",
        category: "System Design",
        difficulty: "Medium",
        content: "Describe Figma and its role in UI/UX design.",
        technology: "Figma",
        answer: "Figma is a cloud-based UI/UX design tool that allows teams to collaborate on designing and prototyping user interfaces. It supports real-time collaboration, vector editing, and provides features like design systems and prototyping.",
        tags: ["Figma", "UI/UX", "Design Tools"],
    },
    {
        id: "figma2",
        title: "How does version control work in Figma?",
        category: "System Design",
        difficulty: "Medium",
        content: "Explain how version control is managed in Figma.",
        technology: "Figma",
        answer: "Figma automatically saves versions of your design files in the cloud. You can access version history, revert changes, and collaborate with others while maintaining design integrity. Teams can also add comments and suggestions directly in the design files.",
        tags: ["Figma", "Version Control", "UI/UX Design"],
    }
];

const adobexdQuestions: Question[] = [
    {
        id: "adobexd1",
        title: "What is Adobe XD and how does it benefit UI/UX designers?",
        category: "System Design",
        difficulty: "Medium",
        content: "Explain what Adobe XD is and how it is beneficial to UI/UX design workflows.",
        technology: "Adobe XD",
        answer: "Adobe XD is a vector-based design tool used for designing and prototyping user experiences. It allows designers to create interactive prototypes, wireframes, and design specifications, and provides features for collaboration and feedback.",
        tags: ["Adobe XD", "UI/UX", "Design Tools"],
    },
    {
        id: "adobexd2",
        title: "How can you share prototypes in Adobe XD for user testing?",
        category: "System Design",
        difficulty: "Medium",
        content: "Describe how Adobe XD helps in sharing prototypes for user testing.",
        technology: "Adobe XD",
        answer: "Adobe XD allows designers to share prototypes via a public link, enabling stakeholders and users to view and interact with the design. Feedback can be collected directly in the prototype, streamlining the user testing process.",
        tags: ["Adobe XD", "Prototyping", "UI/UX"],
    }
];

export const systemDesignQuestions: Question[] = [
    ...gitQuestions,
    ...dockerQuestions,
    ...jiraQuestions,
    ...figmaQuestions,
    ...adobexdQuestions
];
