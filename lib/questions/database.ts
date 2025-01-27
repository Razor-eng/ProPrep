import { Question } from "../types";

const mongodbQuestions: Question[] = [
    {
        id: "mongodb1",
        title: "What is MongoDB and how is it different from traditional relational databases?",
        category: "Database",
        difficulty: "Medium",
        content: "Explain the core concepts of MongoDB and how it compares to relational databases.",
        technology: "MongoDB",
        answer: "MongoDB is a NoSQL, document-based database that stores data in JSON-like format. Unlike relational databases, MongoDB does not use tables and rows. Instead, it uses collections and documents. This allows for more flexible data structures and scalability.",
        tags: ["MongoDB", "NoSQL", "Database Design"],
    },
    {
        id: "mongodb2",
        title: "What is the difference between a MongoDB `find()` and `aggregate()` query?",
        category: "Database",
        difficulty: "Medium",
        content: "Describe the differences between MongoDB's `find()` and `aggregate()` methods.",
        technology: "MongoDB",
        answer: "`find()` is used to retrieve documents from a collection based on query criteria, and it returns a cursor for iterating through the results. On the other hand, `aggregate()` is used for performing more complex data processing tasks, like grouping, sorting, and filtering, and it returns a set of documents resulting from the aggregation pipeline.",
        tags: ["MongoDB", "Queries", "Aggregation"],
    },
    {
        id: "mongodb3",
        title: "What are the key differences between MongoDB and SQL databases?",
        category: "Backend",
        difficulty: "Medium",
        content: "Describe the differences between MongoDB (NoSQL) and relational databases.",
        technology: "MongoDB",
        answer: "MongoDB is a NoSQL database that stores data in JSON-like documents, whereas SQL databases store data in tables with rows and columns. MongoDB is schema-less, highly scalable, and better suited for handling unstructured data.",
        tags: ["MongoDB", "NoSQL", "Databases"],
    },
    {
        id: "mongodb4",
        title: "How do indexes work in MongoDB?",
        category: "Backend",
        difficulty: "Medium",
        content: "Explain the concept of indexes in MongoDB and their use.",
        technology: "MongoDB",
        answer: "Indexes in MongoDB improve query performance by allowing the database to quickly locate documents in a collection. By default, MongoDB creates an index on the `_id` field, but additional indexes can be created for other fields.",
        tags: ["MongoDB", "Indexes", "Performance"],
    }
];

const mysqlQuestions: Question[] = [
    {
        id: "mysql1",
        title: "What is MySQL and what are its primary features?",
        category: "Database",
        difficulty: "Medium",
        content: "Describe MySQL and its key features as a relational database management system (RDBMS).",
        technology: "MySQL",
        answer: "MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) for database operations. It is known for its speed, reliability, and ease of use, and is widely used in web applications and data warehousing.",
        tags: ["MySQL", "RDBMS", "Database Design"],
    },
    {
        id: "mysql2",
        title: "What are the differences between `INNER JOIN` and `LEFT JOIN` in MySQL?",
        category: "Database",
        difficulty: "Medium",
        content: "Explain the differences between `INNER JOIN` and `LEFT JOIN` in MySQL.",
        technology: "MySQL",
        answer: "`INNER JOIN` returns only the rows where there is a match in both tables, while `LEFT JOIN` returns all rows from the left table and matching rows from the right table. If there is no match in the right table, NULL values are returned for the right table's columns.",
        tags: ["MySQL", "SQL", "Joins"],
    },
    {
        id: "mysql3",
        title: "What is normalization in MySQL?",
        category: "Backend",
        difficulty: "Medium",
        content: "Explain the concept of database normalization in MySQL.",
        technology: "MySQL",
        answer: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller ones and defining relationships between them.",
        tags: ["MySQL", "Normalization", "Databases"],
    },
    {
        id: "mysql4",
        title: "What is a join in MySQL?",
        category: "Backend",
        difficulty: "Medium",
        content: "Describe the different types of joins in MySQL.",
        technology: "MySQL",
        answer: "A join in MySQL is used to combine rows from two or more tables based on a related column. Types of joins include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.",
        tags: ["MySQL", "SQL", "Joins"],
    }
];

const postgresqlQuestions: Question[] = [
    {
        id: "postgresql1",
        title: "What is PostgreSQL and how does it differ from MySQL?",
        category: "Database",
        difficulty: "Medium",
        content: "Describe PostgreSQL and its advantages over MySQL.",
        technology: "PostgreSQL",
        answer: "PostgreSQL is an open-source, object-relational database management system (ORDBMS). It is known for its advanced features like support for custom data types, full-text search, and complex queries. Unlike MySQL, PostgreSQL supports ACID transactions and is more suitable for applications that require complex querying and data integrity.",
        tags: ["PostgreSQL", "RDBMS", "Database Design"],
    },
    {
        id: "postgresql2",
        title: "What is the purpose of `VACUUM` in PostgreSQL?",
        category: "Database",
        difficulty: "Medium",
        content: "Explain the role of the `VACUUM` command in PostgreSQL.",
        technology: "PostgreSQL",
        answer: "`VACUUM` is a command used in PostgreSQL to reclaim storage occupied by dead tuples and to update statistics for the query planner. It helps maintain database performance by preventing table bloat and improving query efficiency.",
        tags: ["PostgreSQL", "SQL", "Database Maintenance"],
    },
    {
        id: "postgresql3",
        title: "What are the advantages of PostgreSQL over MySQL?",
        category: "Backend",
        difficulty: "Medium",
        content: "Explain why someone might choose PostgreSQL over MySQL for database management.",
        technology: "PostgreSQL",
        answer: "PostgreSQL offers better support for complex queries, advanced data types (such as JSONB and arrays), full-text search, and is highly extensible. It also provides ACID compliance and is considered more feature-rich than MySQL.",
        tags: ["PostgreSQL", "Databases", "MySQL"],
    },
    {
        id: "postgresql4",
        title: "What is a foreign key in PostgreSQL?",
        category: "Backend",
        difficulty: "Medium",
        content: "Explain the concept of foreign keys in PostgreSQL and their purpose.",
        technology: "PostgreSQL",
        answer: "A foreign key is a field (or collection of fields) in a table that uniquely identifies a row of another table. It establishes a relationship between two tables by linking a primary key in one table to a foreign key in another.",
        tags: ["PostgreSQL", "Foreign Key", "SQL"],
    }
];

const firebaseQuestions: Question[] = [
    {
        id: "firebase1",
        title: "What is Firebase and what are its key features?",
        category: "Database",
        difficulty: "Medium",
        content: "Explain what Firebase is and list its core features.",
        technology: "Firebase",
        answer: "Firebase is a platform developed by Google that offers a variety of backend services such as a real-time NoSQL database, user authentication, cloud storage, and hosting. It is widely used for building mobile and web applications with real-time capabilities.",
        tags: ["Firebase", "NoSQL", "Real-time Database"],
    },
    {
        id: "firebase2",
        title: "What is the difference between Firebase Realtime Database and Firestore?",
        category: "Database",
        difficulty: "Medium",
        content: "Explain the differences between Firebase Realtime Database and Firestore.",
        technology: "Firebase",
        answer: "Firebase Realtime Database is a JSON-based database for storing and syncing data in real-time, while Firestore is a more flexible, scalable NoSQL document database. Firestore supports more advanced querying, offline support, and structured data storage.",
        tags: ["Firebase", "Firestore", "Real-time Database"],
    },
    {
        id: "firebase3",
        title: "What is Firebase and how does it assist in backend development?",
        category: "Backend",
        difficulty: "Medium",
        content: "Explain the role of Firebase in backend development.",
        technology: "Firebase",
        answer: "Firebase is a platform developed by Google that provides a suite of backend services such as real-time databases, user authentication, hosting, and cloud functions. It simplifies backend development for mobile and web apps.",
        tags: ["Firebase", "Backend", "Services"],
    },
    {
        id: "firebase4",
        title: "How does Firebase Authentication work?",
        category: "Backend",
        difficulty: "Medium",
        content: "Describe how Firebase Authentication can be used for user authentication in an app.",
        technology: "Firebase",
        answer: "Firebase Authentication provides an easy-to-use SDK for implementing user authentication in apps. It supports email/password authentication, third-party providers (Google, Facebook), and custom authentication systems.",
        tags: ["Firebase", "Authentication", "Backend"],
    }
];

export const databaseQuestions: Question[] = [
    ...mongodbQuestions,
    ...mysqlQuestions,
    ...postgresqlQuestions,
    ...firebaseQuestions
];
