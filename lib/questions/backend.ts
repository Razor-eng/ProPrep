import { Question } from "../types";

// export const backendQuestions: Question[] = [
//     {
//         id: "b1",
//         title: "Explain RESTful API Design",
//         category: "Backend",
//         difficulty: "Medium",
//         content: "What are the key principles of RESTful API design?",
//         answer: "RESTful APIs should be: 1) Stateless - each request contains all necessary information, 2) Resource-based - using nouns for endpoints, 3) Use proper HTTP methods (GET, POST, PUT, DELETE), 4) Support proper response codes, 5) Have consistent naming conventions, 6) Be versioned appropriately.",
//         company: "Stripe",
//         tags: ["API Design", "REST", "HTTP"],
//     },
//     {
//         id: "b2",
//         title: "Explain Database Indexing",
//         category: "Backend",
//         difficulty: "Hard",
//         content: "How do database indexes work and when should they be used?",
//         answer: "Database indexes are data structures that improve the speed of data retrieval operations by providing quick access to rows in a database table. They work similar to a book's index, storing a copy of selected columns arranged for efficient searching. Use indexes on columns frequently used in WHERE clauses and JOIN conditions, but be cautious as they increase storage space and slow down write operations.",
//         company: "MongoDB",
//         tags: ["Databases", "Performance", "Optimization"],
//     },
//     {
//         id: "b3",
//         title: "Implement Rate Limiting",
//         category: "Backend",
//         difficulty: "Hard",
//         content: "Design a rate limiter for an API.",
//         answer: "A rate limiter can be implemented using algorithms like Token Bucket or Leaky Bucket. Here's a Token Bucket example:\n```typescript\nclass RateLimiter {\n  private tokens: number;\n  private lastRefillTime: number;\n  private readonly capacity: number;\n  private readonly refillRate: number;\n\n  constructor(capacity: number, refillRate: number) {\n    this.capacity = capacity;\n    this.tokens = capacity;\n    this.refillRate = refillRate;\n    this.lastRefillTime = Date.now();\n  }\n\n  canMakeRequest(): boolean {\n    this.refill();\n    if (this.tokens > 0) {\n      this.tokens--;\n      return true;\n    }\n    return false;\n  }\n}```",
//         company: "AWS",
//         tags: ["System Design", "API", "Security"],
//     },
//     {
//         id: "b4",
//         title: "Explain Microservices Architecture",
//         category: "Backend",
//         difficulty: "Hard",
//         content: "What are microservices and their benefits/drawbacks?",
//         answer: "Microservices is an architectural style where an application is built as a collection of small, independent services. Benefits include: scalability, technology flexibility, easier deployment, and team autonomy. Drawbacks include: increased complexity, network latency, data consistency challenges, and more complex testing/monitoring requirements.",
//         company: "Netflix",
//         tags: ["Architecture", "Microservices", "System Design"],
//     },
//     {
//         id: "b5",
//         title: "Explain ACID Properties",
//         category: "Backend",
//         difficulty: "Medium",
//         content: "What are ACID properties in database transactions?",
//         answer: "ACID stands for: Atomicity (transactions are all-or-nothing), Consistency (database remains in valid state), Isolation (concurrent transactions don't interfere), and Durability (committed transactions are permanent). These properties ensure reliable processing of database transactions.",
//         company: "Oracle",
//         tags: ["Databases", "Transactions", "Fundamentals"],
//     },
//     {
//         id: "b6",
//         title: "Explain Event Sourcing",
//         category: "Backend",
//         difficulty: "Hard",
//         content: "What is Event Sourcing and when should it be used?",
//         answer: "Event Sourcing is a pattern where application state changes are stored as a sequence of events. Instead of storing current state, you store the history of changes. Benefits include complete audit trail, temporal queries, and event replay. Useful in financial systems and complex domains requiring audit trails.",
//         company: "Stripe",
//         tags: ["Architecture", "Patterns", "Data Storage"],
//     },
//     {
//         id: "b7",
//         title: "Explain gRPC",
//         category: "Backend",
//         difficulty: "Medium",
//         content: "What is gRPC and its advantages?",
//         answer: "gRPC is a high-performance RPC framework that uses Protocol Buffers for serialization. It supports streaming, is language-agnostic, and generates client/server code. Benefits include type safety, efficient communication, and built-in load balancing support.",
//         company: "Google",
//         tags: ["API", "Microservices", "Performance"],
//     }
// ];

const nodejsQuestions: Question[] = [
    {
        id: "nodejs1",
        title: "What is the event loop in Node.js?",
        category: "Backend",
        difficulty: "Medium",
        content: "Explain how the event loop works in Node.js.",
        technology: "Node.js",
        answer: "The event loop in Node.js is responsible for executing asynchronous callbacks. It allows Node.js to perform non-blocking I/O operations, by offloading operations to the system kernel whenever possible.",
        tags: ["Node.js", "Asynchronous", "Event Loop"],
    },
    {
        id: "nodejs2",
        title: "What are the key features of Express.js?",
        category: "Backend",
        difficulty: "Medium",
        content: "Describe the main features of the Express.js framework.",
        technology: "Express.js",
        answer: "Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications, including routing, middleware, and template engines.",
        tags: ["Express.js", "Framework", "Node.js"],
    }
];

const expressjsQuestions: Question[] = [
    {
        id: "expressjs1",
        title: "What is middleware in Express.js?",
        category: "Backend",
        difficulty: "Medium",
        content: "Explain the concept of middleware in Express.js.",
        technology: "Express.js",
        answer: "Middleware in Express.js is a function that receives the request, response, and the next function in the application’s request-response cycle. It can modify the request or response, or terminate the request-response cycle.",
        tags: ["Express.js", "Middleware", "Node.js"],
    },
    {
        id: "expressjs2",
        title: "How can you handle errors in Express.js?",
        category: "Backend",
        difficulty: "Medium",
        content: "Describe how error handling works in Express.js.",
        technology: "Express.js",
        answer: "In Express.js, errors are handled through an error-handling middleware, which is defined with four arguments (err, req, res, next). This middleware should be placed after all other route definitions to catch and respond to errors.",
        tags: ["Express.js", "Error Handling", "Node.js"],
    }
];

const springbootQuestions: Question[] = [
    {
        id: "springboot1",
        title: "What is Spring Boot and how does it simplify development?",
        category: "Backend",
        difficulty: "Medium",
        content: "Explain the role of Spring Boot in Java backend development.",
        technology: "Spring Boot",
        answer: "Spring Boot is a framework that simplifies the process of setting up and deploying Spring-based applications by providing default configurations, an embedded web server, and easy-to-use annotations.",
        tags: ["Spring Boot", "Java", "Backend"],
    },
    {
        id: "springboot2",
        title: "What is dependency injection in Spring Boot?",
        category: "Backend",
        difficulty: "Medium",
        content: "Explain the concept of dependency injection in Spring Boot.",
        technology: "Spring Boot",
        answer: "Dependency Injection is a design pattern used in Spring Boot to promote loose coupling. It allows the framework to inject dependencies into classes, improving testability and maintainability of the application.",
        tags: ["Spring Boot", "Dependency Injection", "Java"],
    }
];

export const backendQuestions: Question[] = [
    ...nodejsQuestions,
    ...expressjsQuestions,
    ...springbootQuestions,
];
