export const frontendQuestionsData = [
    {
        question: "What is React Context and how is it used?",
        answer: "React Context allows sharing state across components without passing props at every level. You create a Context with React.createContext(), wrap components in a Context Provider, and consume the context in child components using useContext().",
        diagram: {
            type: "flowchart",
            content: [
                "Create Context with React.createContext()",
                "Wrap components in <Context.Provider>",
                "Consume context with useContext()"
            ]
        }
    },
    {
        question: "What are React Hooks and how do useState and useEffect work?",
        answer: "React Hooks are functions that enable state and lifecycle features in functional components. useState is for state management, while useEffect handles side effects like data fetching or DOM manipulation.",
        diagram: {
            type: "lifecycle",
            content: [
                "useState: Defines state in functional components.",
                "useEffect: Handles side-effects like data fetching, subscribing to events."
            ]
        }
    },
    {
        question: "What is the difference between state and props in React?",
        answer: "Props are read-only data passed to child components from parent components. State is mutable and stored within a component, and can be updated with setState() or through hooks like useState.",
        diagram: {
            type: "comparison",
            content: {
                props: "Immutable, passed from parent to child",
                state: "Mutable, local to the component"
            }
        }
    },
    {
        question: "What is the Virtual DOM?",
        answer: "The Virtual DOM is an in-memory representation of the actual DOM used by React. It improves performance by minimizing direct manipulation of the real DOM and updating only the changed parts.",
        diagram: {
            type: "comparison",
            content: {
                realDOM: "Directly manipulates the DOM, causes reflows and repaints",
                virtualDOM: "Only updates changed parts, improving performance"
            }
        }
    },
    {
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript, allowing you to write HTML-like code within JavaScript. React transforms JSX into React elements, which are then rendered to the DOM.",
        diagram: {
            type: "process",
            content: [
                "JSX written in code",
                "React transforms JSX into JavaScript",
                "React renders to the DOM"
            ]
        }
    },
    {
        question: "What is the React component lifecycle?",
        answer: "React components go through three main phases: Mounting (creating and adding to the DOM), Updating (re-rendering on state/props change), and Unmounting (removal from the DOM). Lifecycle methods or hooks like componentDidMount or useEffect can be used during these phases.",
        diagram: {
            type: "timeline",
            content: [
                "Mounting: Component creation",
                "Updating: Component re-renders",
                "Unmounting: Component removal"
            ]
        }
    },
    {
        question: "What is Redux and how does it compare to React’s useReducer or Context?",
        answer: "Redux is a state management library that uses a single global store for application state. Unlike useReducer or Context API, Redux offers a more structured way of managing state changes through actions, reducers, and a central store, making it ideal for complex applications.",
        diagram: {
            type: "comparison",
            content: {
                redux: "Global store, actions, reducers",
                context: "Global state without Redux's complexity"
            }
        }
    },
    {
        question: "What are CSS preprocessors like Sass or Less?",
        answer: "CSS preprocessors extend CSS with advanced features like variables, nesting, mixins, and functions, which make CSS more modular and maintainable. Native CSS features like CSS Variables offer similar functionality, but preprocessors provide more extensive features.",
        diagram: {
            type: "comparison",
            content: {
                css: "Standard CSS, no variables or functions",
                sass: "Advanced features like variables, nesting, and functions"
            }
        }
    },
    {
        question: "What is the difference between display: none and visibility: hidden?",
        answer: "display: none removes the element from the layout entirely, while visibility: hidden hides the element but keeps its space in the layout.",
        diagram: {
            type: "comparison",
            content: {
                displayNone: "Element removed from the layout",
                visibilityHidden: "Element hidden but takes up space"
            }
        }
    },
    {
        question: "What is the CSS box model, and how do Flexbox and Grid differ?",
        answer: "The CSS box model defines the structure of elements as content, padding, border, and margin. Flexbox and Grid are layout systems that provide more control over element alignment and distribution compared to traditional box model layouts.",
        diagram: {
            type: "structure",
            content: {
                boxModel: "Content, Padding, Border, Margin",
                flexboxGrid: "Flexible layouts and item alignment"
            }
        }
    },
    {
        question: "What is responsive web design, and how do Flex, Grid, and media queries help?",
        answer: "Responsive web design ensures web pages adapt to different screen sizes and devices. Flexbox and Grid allow flexible layouts, while media queries apply different CSS rules based on device characteristics like screen width.",
        diagram: {
            type: "layout",
            content: {
                flexGrid: "Flexible layouts for different screen sizes",
                mediaQueries: "CSS rules based on screen width"
            }
        }
    },
    {
        question: "What is the difference between == and === in JavaScript?",
        answer: "== performs type coercion before comparing values, whereas === compares both value and type, ensuring strict equality without type conversion.",
        diagram: {
            type: "comparison",
            content: {
                equal: "Checks equality with type coercion",
                strictEqual: "Strict comparison of value and type"
            }
        }
    },
    {
        question: "What are closures in JavaScript?",
        answer: "Closures are functions that retain access to variables from their outer (enclosing) function, even after the outer function has returned. They are commonly used for data encapsulation and creating private variables.",
        diagram: {
            type: "concept",
            content: [
                "Function retains access to outer variables",
                "Used for data encapsulation"
            ]
        }
    },
    {
        question: "What is hoisting in JavaScript?",
        answer: "Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before execution. Variables declared with var are hoisted and initialized to undefined, while let and const are hoisted but remain uninitialized.",
        diagram: {
            type: "concept",
            content: [
                "var: Hoisted and initialized to undefined",
                "let/const: Hoisted but not initialized"
            ]
        }
    },
    {
        question: "What are Promises in JavaScript, and how do async/await work?",
        answer: "Promises represent a value that is not immediately available but will resolve later. async/await are syntactic sugar for working with Promises, allowing asynchronous code to be written in a synchronous style.",
        diagram: {
            type: "lifecycle",
            content: [
                "Pending → Resolved → Fulfilled or Rejected",
                "async/await allows synchronous-style async code"
            ]
        }
    },
    {
        question: "What is Webpack, and how does it compare to Vite or Parcel?",
        answer: "Webpack is a powerful bundler for JavaScript, CSS, and other assets. It provides extensive configuration options for complex builds. Vite and Parcel are newer bundlers that focus on simplicity and faster build times, offering a more developer-friendly experience for most use cases.",
        diagram: {
            type: "comparison",
            content: {
                webpack: "Complex configuration, powerful bundler",
                vite: "Fast builds, developer-friendly",
                parcel: "Zero-config, ease of use"
            }
        }
    },
    {
        question: "What is CORS, and how do you handle CORS errors?",
        answer: "CORS (Cross-Origin Resource Sharing) is a security feature that restricts web pages from making requests to different domains. To handle CORS errors, configure the server to allow cross-origin requests using appropriate headers like 'Access-Control-Allow-Origin'.",
        diagram: {
            type: "flowchart",
            content: [
                "CORS restricts cross-origin requests",
                "Server sends Access-Control-Allow-Origin header"
            ]
        }
    },
    {
        question: "What is the difference between localStorage and sessionStorage?",
        answer: "localStorage stores data persistently across browser sessions, while sessionStorage stores data only for the duration of the current browser tab or window session.",
        diagram: {
            type: "comparison",
            content: {
                localStorage: "Persistent, across sessions",
                sessionStorage: "Temporary, per tab session"
            }
        }
    },
    {
        question: "What are Service Workers, and how do they enable offline support?",
        answer: "Service Workers are background scripts that intercept network requests, cache resources, and enable features like offline access and push notifications. They are essential for Progressive Web Apps (PWAs) to provide a native app-like experience.",
        diagram: {
            type: "flowchart",
            content: [
                "Intercept requests",
                "Cache resources",
                "Serve from cache when offline"
            ]
        }
    },
    {
        question: "What are common front-end performance optimization techniques?",
        answer: "Common techniques include minimizing HTTP requests, compressing images, using a Content Delivery Network (CDN), minifying code, implementing lazy loading, and optimizing rendering by reducing reflows and repaints.",
        diagram: {
            type: "mindmap",
            content: [
                "Minimize HTTP requests",
                "Compress images",
                "Use CDN",
                "Minify code",
                "Lazy loading",
                "Reduce reflows/repaints"
            ]
        }
    }
];

export const backendQuestionsData = [
    {
        question: "What is RESTful API?",
        answer: "REST (Representational State Transfer) is an architectural style for building web services. RESTful APIs use standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources, and typically use JSON or XML for data exchange. Key principles include statelessness, client-server separation, and uniform interface.",
        diagram: {
            type: "flowchart",
            content: [
                "Define API resources",
                "Use HTTP methods (GET, POST, PUT, DELETE)",
                "Return JSON or XML data"
            ]
        }
    },
    {
        question: "Explain the difference between GET and POST requests.",
        answer: "GET is used to retrieve data from a server. Data is typically sent in the URL as query parameters. POST is used to send data to a server to create or update a resource. Data is sent in the request body.",
        diagram: {
            type: "comparison",
            content: {
                get: "Retrieves data from the server",
                post: "Sends data to the server"
            }
        }
    },
    {
        question: "What are HTTP status codes?",
        answer: "HTTP status codes are three-digit codes returned by the server in response to a client's request. They indicate the outcome of the request. Examples include 200 OK, 400 Bad Request, 404 Not Found, and 500 Internal Server Error.",
        diagram: {
            type: "table",
            content: [
                { code: 200, description: "OK" },
                { code: 400, description: "Bad Request" },
                { code: 404, description: "Not Found" },
                { code: 500, description: "Internal Server Error" }
            ]
        }
    },
    {
        question: "What is a database index and why is it important?",
        answer: "A database index is a data structure that improves the speed of data retrieval operations on a database table. It's similar to an index in a book. Without an index, the database would have to scan every row in the table to find the requested data. Indexes can significantly speed up queries, especially on large tables.",
        diagram: {
            type: "concept",
            content: [
                "Index speeds up data retrieval",
                "Reduces need for full table scans"
            ]
        }
    },
    {
        question: "Explain the difference between SQL and NoSQL databases.",
        answer: "SQL databases (e.g., MySQL, PostgreSQL) are relational databases that use structured data with predefined schemas. They use SQL (Structured Query Language) for querying. NoSQL databases (e.g., MongoDB, Cassandra) are non-relational databases that can handle unstructured or semi-structured data. They offer more flexibility in data modeling but may have different consistency models.",
        diagram: {
            type: "comparison",
            content: {
                sql: "Structured data, relational tables",
                nosql: "Unstructured data, flexible schema"
            }
        }
    },
    {
        question: "What is an ORM (Object-Relational Mapper)?",
        answer: "An ORM is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. It maps database tables to objects in your programming language, allowing you to work with data in a more natural way. Examples include Django ORM, Hibernate (Java), and Entity Framework (.NET).",
        diagram: {
            type: "flowchart",
            content: [
                "Map database tables to objects",
                "Use object-oriented methods to interact with data"
            ]
        }
    },
    {
        question: "What is authentication and authorization?",
        answer: "Authentication is the process of verifying the identity of a user (e.g., by checking username and password). Authorization is the process of determining what a user is allowed to do (e.g., accessing specific resources or performing certain actions).",
        diagram: {
            type: "concept",
            content: [
                "Authentication: Verifies identity",
                "Authorization: Determines access permissions"
            ]
        }
    },
    {
        question: "What is JWT (JSON Web Token)?",
        answer: "JWT is a standard for creating access tokens that assert claims (e.g., user ID, permissions) in a JSON format. They are commonly used for authentication and authorization in web applications. JWTs are digitally signed, which ensures their integrity.",
        diagram: {
            type: "flowchart",
            content: [
                "Generate JWT with claims",
                "Sign and verify JWT",
                "Use JWT for authentication and authorization"
            ]
        }
    },
    {
        question: "What are some common security vulnerabilities in web applications?",
        answer: "Common vulnerabilities include SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), insecure authentication, and insecure data storage. It's crucial to implement appropriate security measures to prevent these vulnerabilities.",
        diagram: {
            type: "mindmap",
            content: [
                "SQL Injection",
                "XSS",
                "CSRF",
                "Insecure Authentication",
                "Insecure Data Storage"
            ]
        }
    },
    {
        question: "Explain the concept of API versioning.",
        answer: "API versioning is the practice of maintaining multiple versions of an API to allow for changes and improvements without breaking existing clients. Common strategies include using URL versioning (e.g., /v1/users, /v2/users), header versioning, or media type versioning.",
        diagram: {
            type: "flowchart",
            content: [
                "Use URL versioning (e.g., /v1)",
                "Header versioning",
                "Media type versioning"
            ]
        }
    },
    {
        question: "What are microservices?",
        answer: "Microservices are a software development approach where an application is structured as a collection of small, independent services, each responsible for a specific business function. They communicate with each other over a network. This architecture promotes modularity, scalability, and independent deployment.",
        diagram: {
            type: "concept",
            content: [
                "Independent services for each business function",
                "Services communicate over a network"
            ]
        }
    },
    {
        question: "What is caching and why is it important?",
        answer: "Caching is the process of storing frequently accessed data in a temporary storage location (cache) to speed up retrieval. It reduces the load on the server and improves response times. Common caching techniques include browser caching, server-side caching, and CDN caching.",
        diagram: {
            type: "process",
            content: [
                "Store frequently accessed data in cache",
                "Reduce server load and improve response times"
            ]
        }
    },
    {
        question: "What is load balancing?",
        answer: "Load balancing is the process of distributing network traffic across multiple servers to prevent any single server from becoming overloaded. It improves performance, availability, and fault tolerance.",
        diagram: {
            type: "concept",
            content: [
                "Distribute traffic across multiple servers",
                "Improves performance and fault tolerance"
            ]
        }
    },
    {
        question: "Explain the difference between synchronous and asynchronous communication.",
        answer: "In synchronous communication, the client waits for the server to respond before continuing. In asynchronous communication, the client sends a request and can continue with other tasks without waiting for a response. Callbacks, promises, and message queues are common techniques for asynchronous communication.",
        diagram: {
            type: "comparison",
            content: {
                synchronous: "Client waits for server response",
                asynchronous: "Client does not wait for server response"
            }
        }
    },
    {
        question: "What are message queues?",
        answer: "Message queues are used for asynchronous communication between services. They act as intermediaries, storing messages until they are processed by the receiving service. This decouples services and improves scalability and reliability. Examples include RabbitMQ and Kafka.",
        diagram: {
            type: "flowchart",
            content: [
                "Store messages in queue",
                "Services process messages asynchronously"
            ]
        }
    },
    {
        question: "What is serverless computing?",
        answer: "Serverless computing is a cloud computing execution model where the cloud provider dynamically manages the allocation of computing resources. Developers only focus on writing and deploying code, without managing servers. Examples include AWS Lambda, Azure Functions, and Google Cloud Functions.",
        diagram: {
            type: "concept",
            content: [
                "Cloud provider manages resources",
                "Focus on writing and deploying code"
            ]
        }
    },
    {
        question: "What are containers (e.g., Docker)?",
        answer: "Containers are a lightweight form of virtualization that package an application and its dependencies into a single unit. They provide consistency across different environments and simplify deployment. Docker is a popular containerization platform.",
        diagram: {
            type: "process",
            content: [
                "Package application and dependencies",
                "Ensure consistency across environments"
            ]
        }
    },
    {
        question: "What is CI/CD?",
        answer: "CI/CD stands for Continuous Integration/Continuous Deployment (or Continuous Delivery). It's a set of practices that automate the process of building, testing, and deploying software. CI focuses on integrating code changes frequently, while CD focuses on automating the release process.",
        diagram: {
            type: "timeline",
            content: [
                "Continuous Integration: Frequently integrate code changes",
                "Continuous Deployment: Automate release process"
            ]
        }
    },
    {
        question: "What is rate limiting and why is it important?",
        answer: "Rate limiting is a technique for controlling the number of requests that a client can make to an API within a given time frame. It's important for preventing abuse, protecting against denial-of-service attacks, and ensuring fair usage of resources.",
        diagram: {
            type: "concept",
            content: [
                "Limit number of requests per client",
                "Prevent abuse and ensure fair usage"
            ]
        }
    },
    {
        question: "Explain the CAP theorem.",
        answer: "The CAP theorem states that it's impossible for a distributed system to simultaneously guarantee Consistency, Availability, and Partition tolerance. In practice, systems must choose a trade-off between these three properties.",
        diagram: {
            type: "concept",
            content: [
                "Consistency",
                "Availability",
                "Partition tolerance"
            ]
        }
    }
];

export const databaseQuestionsData = [
    {
        question: "What is a relational database?",
        answer: "A relational database is a type of database that stores data in tables with rows and columns. Each table represents a different entity, and relationships between data entities are represented using foreign keys.",
        diagram: {
            type: "concept",
            content: [
                "Tables with rows and columns",
                "Use foreign keys to establish relationships"
            ]
        }
    },
    {
        question: "What is normalization in a database?",
        answer: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller ones and defining relationships between them.",
        diagram: {
            type: "flow",
            content: [
                "Identify redundancy",
                "Divide into smaller tables",
                "Define relationships"
            ]
        }
    },
    {
        question: "What is a foreign key?",
        answer: "A foreign key is a column or a set of columns in a table that is used to establish a link between the data in two tables. It typically refers to the primary key of another table.",
        diagram: {
            type: "concept",
            content: [
                "Foreign key links two tables",
                "References the primary key in another table"
            ]
        }
    },
    {
        question: "What is a primary key?",
        answer: "A primary key is a unique identifier for a record in a database table. It ensures that each record is distinct and provides a means for efficiently retrieving data from the table.",
        diagram: {
            type: "concept",
            content: [
                "Unique identifier for each record",
                "Ensures data integrity"
            ]
        }
    },
    {
        question: "What is the difference between a UNION and a JOIN in SQL?",
        answer: "UNION combines the result sets of two or more SELECT queries into a single result, removing duplicates. JOIN, on the other hand, is used to combine rows from two or more tables based on a related column, allowing for more complex queries.",
        diagram: {
            type: "comparison",
            content: {
                union: "Combines result sets and removes duplicates",
                join: "Combines rows from multiple tables based on a common column"
            }
        }
    },
    {
        question: "What is indexing in databases?",
        answer: "Indexing in databases is a technique used to speed up data retrieval operations by creating an index that maps values to their corresponding rows in the table. It can improve performance for read-heavy workloads.",
        diagram: {
            type: "concept",
            content: [
                "Index maps values to rows",
                "Improves performance for read-heavy queries"
            ]
        }
    },
    {
        question: "What is ACID in the context of databases?",
        answer: "ACID stands for Atomicity, Consistency, Isolation, and Durability. These are four properties that ensure database transactions are processed reliably, maintaining data integrity even in the event of system failures.",
        diagram: {
            type: "concept",
            content: [
                "Atomicity: All or nothing",
                "Consistency: Data integrity is maintained",
                "Isolation: Transactions are isolated from each other",
                "Durability: Changes are permanent once committed"
            ]
        }
    },
    {
        question: "What is a NoSQL database?",
        answer: "NoSQL databases are non-relational databases designed to handle unstructured or semi-structured data. They offer flexibility in terms of data models and are optimized for horizontal scaling. Examples include MongoDB, Cassandra, and CouchDB.",
        diagram: {
            type: "concept",
            content: [
                "Handles unstructured or semi-structured data",
                "Optimized for horizontal scaling"
            ]
        }
    },
    {
        question: "What is a stored procedure?",
        answer: "A stored procedure is a precompiled collection of one or more SQL statements that can be executed on a database server. Stored procedures are used to encapsulate logic and improve performance by reducing network traffic and improving reusability.",
        diagram: {
            type: "process",
            content: [
                "Encapsulate logic into a procedure",
                "Execute on the database server",
                "Reduces network traffic"
            ]
        }
    },
    {
        question: "What is the difference between SQL and NoSQL databases?",
        answer: "SQL databases use structured query language to manage and store data in relational tables with a fixed schema, whereas NoSQL databases provide flexible schema options and are designed to handle unstructured or semi-structured data, often supporting horizontal scalability.",
        diagram: {
            type: "comparison",
            content: {
                sql: "Relational data, fixed schema, structured query language",
                nosql: "Flexible schema, handles unstructured data"
            }
        }
    },
    {
        question: "What are transactions in SQL?",
        answer: "A transaction in SQL is a sequence of one or more SQL operations that are executed as a single unit. Transactions follow the ACID properties to ensure data integrity. Common commands involved in transactions include COMMIT, ROLLBACK, and SAVEPOINT.",
        diagram: {
            type: "process",
            content: [
                "Execute SQL operations as a unit",
                "Use COMMIT to save changes",
                "Use ROLLBACK to revert changes"
            ]
        }
    },
    {
        question: "What is sharding in databases?",
        answer: "Sharding is a database architecture pattern where data is horizontally partitioned across multiple databases or servers. This improves performance and scalability, especially for large datasets.",
        diagram: {
            type: "concept",
            content: [
                "Horizontal partitioning of data",
                "Distributed across multiple databases or servers"
            ]
        }
    },
    {
        question: "What is a database schema?",
        answer: "A database schema is the structure of a database, including its tables, views, indexes, and relationships between tables. It defines how data is organized and how relationships among data entities are managed.",
        diagram: {
            type: "concept",
            content: [
                "Structure of tables, views, and indexes",
                "Defines relationships among data entities"
            ]
        }
    },
    {
        question: "What is a database view?",
        answer: "A database view is a virtual table based on the result of a SQL query. It does not store data itself but provides a way to look at data from one or more tables in a specific way, often simplifying complex queries.",
        diagram: {
            type: "concept",
            content: [
                "Virtual table",
                "Displays data from one or more tables"
            ]
        }
    },
    {
        question: "What is the difference between an inner join and an outer join?",
        answer: "An inner join returns only the rows that have matching values in both tables, while an outer join returns all rows from one table and the matching rows from the other table. If there is no match, NULL values are returned for the non-matching side.",
        diagram: {
            type: "comparison",
            content: {
                innerJoin: "Returns matching rows only",
                outerJoin: "Returns all rows from one table, NULL for non-matching rows"
            }
        }
    },
    {
        question: "What is replication in databases?",
        answer: "Replication is the process of copying data from one database to another to ensure consistency and improve availability. It is commonly used in distributed systems to provide data redundancy and fault tolerance.",
        diagram: {
            type: "concept",
            content: [
                "Copy data from one database to another",
                "Ensures consistency and availability"
            ]
        }
    },
    {
        question: "What are the differences between MySQL and PostgreSQL?",
        answer: "MySQL is known for its simplicity and speed, making it ideal for read-heavy applications. PostgreSQL is known for its extensibility and support for complex queries, making it better suited for advanced data models and write-heavy applications.",
        diagram: {
            type: "comparison",
            content: {
                mysql: "Simple, fast, ideal for read-heavy applications",
                postgresql: "Extensible, supports complex queries, better for write-heavy applications"
            }
        }
    },
    {
        question: "What are the advantages of using a database index?",
        answer: "Using an index improves the speed of data retrieval operations by reducing the need to scan entire tables. It is particularly useful for columns that are frequently searched or used in join conditions. However, it can slow down write operations.",
        diagram: {
            type: "concept",
            content: [
                "Improves speed of data retrieval",
                "Reduces need for table scans",
                "Slows down write operations"
            ]
        }
    },
    {
        question: "What is a data warehouse?",
        answer: "A data warehouse is a centralized repository used to store large amounts of historical data for analysis and reporting. It is optimized for read-heavy operations and typically integrates data from multiple sources.",
        diagram: {
            type: "concept",
            content: [
                "Centralized repository for historical data",
                "Optimized for read-heavy operations"
            ]
        }
    },
    {
        question: "What is a database trigger?",
        answer: "A database trigger is a set of instructions that automatically execute in response to certain events on a particular table or view, such as INSERT, UPDATE, or DELETE. Triggers are used for enforcing business rules or automating tasks.",
        diagram: {
            type: "process",
            content: [
                "Trigger executes automatically in response to events",
                "Used for enforcing business rules or automating tasks"
            ]
        }
    },
    {
        question: "What is a columnar database?",
        answer: "A columnar database stores data by columns rather than rows. This design allows for efficient reading of specific columns, making it ideal for analytical workloads where only a few columns are queried at a time.",
        diagram: {
            type: "concept",
            content: [
                "Stores data by columns instead of rows",
                "Efficient for analytical workloads"
            ]
        }
    },
    {
        question: "What is a full-text search in databases?",
        answer: "Full-text search allows for searching natural language text within a database, typically using indexing methods like inverted indexes. It is used for searching large text data in columns and can rank results based on relevance.",
        diagram: {
            type: "concept",
            content: [
                "Searches natural language text",
                "Uses inverted indexes for efficient searching"
            ]
        }
    }
];