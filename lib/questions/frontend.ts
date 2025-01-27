import { Question } from "../types";

// export const frontendQuestions: Question[] = [
//     {
//         id: "f1",
//         title: "Explain React's Virtual DOM",
//         category: "Frontend",
//         difficulty: "Medium",
//         content: "Describe the Virtual DOM, its benefits, and how React uses it for efficient rendering.",
//         answer: "The Virtual DOM is a lightweight copy of the actual DOM. When state changes occur, React first updates the Virtual DOM and then compares it with the previous version (diffing). Only the necessary changes are then applied to the actual DOM, minimizing expensive DOM operations. This process is called reconciliation.",
//         company: "Meta",
//         tags: ["React", "Performance", "DOM"],
//     },
//     {
//         id: "f2",
//         title: "What are React Hooks?",
//         category: "Frontend",
//         difficulty: "Easy",
//         content: "Explain React Hooks and their benefits.",
//         answer: "React Hooks are functions that allow you to use state and other React features in functional components. Common hooks include useState for state management, useEffect for side effects, useContext for context consumption, and useRef for mutable references. Benefits include cleaner code, reusable logic, and avoiding class components.",
//         company: "Google",
//         tags: ["React", "Hooks", "State Management"],
//     },
//     {
//         id: "f3",
//         title: "Explain CSS Box Model",
//         category: "Frontend",
//         difficulty: "Easy",
//         content: "Describe the CSS Box Model and its components.",
//         answer: "The CSS Box Model consists of: content (the actual content), padding (clear space around content), border (goes around padding), and margin (clear space around border). The total width/height of an element is the sum of content + padding + border + margin. The box-sizing property can alter this calculation.",
//         company: "Microsoft",
//         tags: ["CSS", "Layout", "Fundamentals"],
//     },
//     {
//         id: "f4",
//         title: "Explain CSS Grid vs Flexbox",
//         category: "Frontend",
//         difficulty: "Medium",
//         content: "Compare CSS Grid and Flexbox layouts.",
//         answer: "CSS Grid is designed for two-dimensional layouts (rows and columns), while Flexbox is for one-dimensional layouts (either rows OR columns). Grid is ideal for overall page layouts, while Flexbox works better for components and smaller-scale layouts. They can be used together for complex layouts.",
//         company: "Amazon",
//         tags: ["CSS", "Layout", "Responsive Design"],
//     },
//     {
//         id: "f5",
//         title: "Explain Event Bubbling",
//         category: "Frontend",
//         difficulty: "Medium",
//         content: "What is event bubbling in JavaScript?",
//         answer: "Event bubbling is a phase in event propagation where an event triggered on a nested element 'bubbles up' through its parent elements in the DOM tree. Events can be captured and handled at any level using addEventListener. The event.stopPropagation() method can prevent further bubbling.",
//         company: "Netflix",
//         tags: ["JavaScript", "DOM", "Events"],
//     },
//     {
//         id: "f6",
//         title: "Explain React Server Components",
//         category: "Frontend",
//         difficulty: "Hard",
//         content: "What are React Server Components and their benefits?",
//         answer: "React Server Components (RSC) are components that run and render on the server. They can access server-side resources directly, reduce client-side JavaScript, and improve initial page load. RSCs can't use hooks or browser APIs but can be mixed with client components.",
//         company: "Vercel",
//         tags: ["React", "Performance", "Server Components"],
//     },
//     {
//         id: "f7",
//         title: "Explain CSS Container Queries",
//         category: "Frontend",
//         difficulty: "Medium",
//         content: "What are Container Queries and how do they differ from Media Queries?",
//         answer: "Container Queries allow styles to be applied based on the size of a containing element rather than the viewport. This enables more modular, reusable components that can adapt their layout based on their container's size, regardless of screen size.",
//         company: "Airbnb",
//         tags: ["CSS", "Responsive Design", "Layout"],
//     }
// ];

const htmlQuestions: Question[] = [
    {
        id: "html1",
        title: "What is the purpose of the `alt` attribute in `<img>` tags?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain the role of the `alt` attribute in an image tag.",
        technology: "HTML5",
        answer: "The `alt` attribute provides alternative text for an image if it cannot be displayed. It is also crucial for accessibility, as screen readers use it to describe the image to users with visual impairments.",
        tags: ["HTML", "Accessibility", "SEO"],
    },
    {
        id: "html2",
        title: "What is the difference between block-level and inline elements in HTML?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Describe the difference between block-level and inline elements in HTML.",
        technology: "HTML5",
        answer: "Block-level elements take up the full width available and start on a new line (e.g., `<div>`, `<h1>`), while inline elements only take up as much width as necessary and don't start a new line (e.g., `<span>`, `<a>`).",
        tags: ["HTML", "Layout", "Elements"],
    },
    {
        id: "html3",
        title: "What is the purpose of the `DOCTYPE` declaration in HTML?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Why is the `DOCTYPE` declaration important in HTML?",
        technology: "HTML5",
        answer: "The `DOCTYPE` declaration specifies the version of HTML being used, ensuring the browser renders the page correctly according to the specified HTML standard.",
        tags: ["HTML", "Standards", "Best Practices"],
    },
    {
        id: "html4",
        title: "What are semantic elements in HTML5?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the concept of semantic elements in HTML5.",
        technology: "HTML5",
        answer: "Semantic elements in HTML5 provide meaning to the web page structure. Examples include `<article>`, `<section>`, `<header>`, and `<footer>`, which help search engines and developers understand the structure of the page.",
        tags: ["HTML", "Semantic", "SEO"],
    },
    {
        id: "html5",
        title: "What is the role of the `<meta>` tag in HTML?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain the use of the `<meta>` tag in an HTML document.",
        technology: "HTML5",
        answer: "The `<meta>` tag provides metadata about the HTML document, such as description, author, and keywords. It is also used for setting character encoding and viewport settings.",
        tags: ["HTML", "Meta", "SEO"],
    }
];
const cssQuestions: Question[] = [
    {
        id: "css1",
        title: "What is the difference between `class` and `id` selectors in CSS?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain the difference between `class` and `id` selectors in CSS.",
        technology: "CSS3",
        answer: "The `class` selector is used to select multiple elements and apply styles to them, while the `id` selector is used to select a single unique element on the page.",
        tags: ["CSS", "Selectors", "Fundamentals"],
    },
    {
        id: "css2",
        title: "What are pseudo-classes in CSS?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain what pseudo-classes are in CSS with examples.",
        technology: "CSS3",
        answer: "Pseudo-classes are used to style elements in a specific state. Examples include `:hover`, `:focus`, and `:nth-child`. They are used to apply styles to an element when it is in a certain state or position.",
        tags: ["CSS", "Pseudo-classes", "State"],
    },
    {
        id: "css3",
        title: "What is the `box-sizing` property in CSS?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain the purpose of the `box-sizing` property in CSS.",
        technology: "CSS3",
        answer: "`box-sizing` controls how the total width and height of an element are calculated. With `box-sizing: border-box`, the padding and border are included in the element's total width and height, while with `content-box`, they are not.",
        tags: ["CSS", "Box Model", "Layout"],
    },
    {
        id: "css4",
        title: "What is the difference between `display: none` and `visibility: hidden`?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the difference between `display: none` and `visibility: hidden` in CSS.",
        technology: "CSS3",
        answer: "The `display: none` property removes an element from the document flow, while `visibility: hidden` makes an element invisible but still takes up space in the layout.",
        tags: ["CSS", "Visibility", "Display"],
    },
    {
        id: "css5",
        title: "What are media queries in CSS?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the concept of media queries in CSS.",
        technology: "CSS3",
        answer: "Media queries allow the application of different styles based on the device's characteristics, such as screen width, height, and resolution. They are essential for creating responsive designs.",
        tags: ["CSS", "Responsive Design", "Media Queries"],
    }
];
const javascriptQuestions: Question[] = [
    {
        id: "js1",
        title: "What are closures in JavaScript?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain what closures are in JavaScript.",
        technology: "JavaScript",
        answer: "A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. This allows functions to retain access to variables from their outer function even after the outer function has executed.",
        tags: ["JavaScript", "Functions", "Closures"],
    },
    {
        id: "js2",
        title: "What is the difference between `null` and `undefined`?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain the difference between `null` and `undefined` in JavaScript.",
        technology: "JavaScript",
        answer: "`null` is an explicit assignment of no value, while `undefined` means a variable has been declared but not assigned a value.",
        tags: ["JavaScript", "Data Types", "Null vs Undefined"],
    },
    {
        id: "js3",
        title: "What is the `this` keyword in JavaScript?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain how the `this` keyword works in JavaScript.",
        technology: "JavaScript",
        answer: "In JavaScript, `this` refers to the context in which a function is called. Its value is determined by how the function is invoked (e.g., as a method, constructor, or regular function).",
        tags: ["JavaScript", "This", "Context"],
    },
    {
        id: "js4",
        title: "What are Promises in JavaScript?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the concept of Promises in JavaScript.",
        technology: "JavaScript",
        answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more effectively by chaining `.then()` and `.catch()` methods.",
        tags: ["JavaScript", "Asynchronous", "Promises"],
    },
    {
        id: "js5",
        title: "What is event delegation in JavaScript?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain event delegation in JavaScript.",
        technology: "JavaScript",
        answer: "Event delegation is a technique where you attach a single event listener to a parent element to manage events for child elements. This reduces the number of event listeners in the DOM and improves performance.",
        tags: ["JavaScript", "Events", "Delegation"],
    }
];
const reactQuestions: Question[] = [
    {
        id: "react1",
        title: "What is JSX in React?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain JSX in React and its benefits.",
        technology: "React.js",
        answer: "JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code inside JavaScript. It makes React code easier to read and write by combining the UI structure with the logic.",
        tags: ["React", "JSX", "Syntax"],
    },
    {
        id: "react2",
        title: "What are functional components in React?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain what functional components are in React.",
        technology: "React.js",
        answer: "Functional components are stateless components defined as JavaScript functions. They can receive props and return JSX to render the UI. With hooks, they can manage state and side effects.",
        tags: ["React", "Components", "Functional"],
    },
    {
        id: "react3",
        title: "What is the purpose of `useState` in React?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain the purpose of `useState` hook in React.",
        technology: "React.js",
        answer: "`useState` is a React hook that allows functional components to manage state. It returns an array with the current state value and a function to update that state.",
        tags: ["React", "State", "Hooks"],
    },
    {
        id: "react4",
        title: "What are props in React?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain what props are in React and how they are used.",
        technology: "React.js",
        answer: "Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and help make components reusable and dynamic.",
        tags: ["React", "Props", "Data Flow"],
    },
    {
        id: "react5",
        title: "What is the virtual DOM in React?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the virtual DOM in React.",
        technology: "React.js",
        answer: "The virtual DOM is a lightweight representation of the actual DOM. React updates the virtual DOM first, compares it with the previous version, and only applies the necessary changes to the real DOM, improving performance.",
        tags: ["React", "Performance", "DOM"],
    }
];
const typescriptQuestions: Question[] = [
    {
        id: "typescript1",
        title: "What are the benefits of using TypeScript over JavaScript?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the benefits of using TypeScript in a JavaScript-based project.",
        technology: "TypeScript",
        answer: "TypeScript provides static typing, better code quality, and improved developer productivity. It catches errors during compile-time, leading to fewer runtime errors. It also provides features like interfaces, enums, and generics that JavaScript lacks.",
        tags: ["TypeScript", "JavaScript", "Types"],
    },
    {
        id: "typescript2",
        title: "What is the difference between `interface` and `type` in TypeScript?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the difference between `interface` and `type` in TypeScript.",
        technology: "TypeScript",
        answer: "Both `interface` and `type` can be used to define object shapes, but `interface` is extendable while `type` is more flexible (can represent unions, intersections, etc.). `type` can also represent other types like primitive types, tuples, or function signatures.",
        tags: ["TypeScript", "Interfaces", "Types"],
    },
    {
        id: "typescript3",
        title: "What are generics in TypeScript?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the concept of generics in TypeScript.",
        technology: "TypeScript",
        answer: "Generics allow you to create reusable functions, classes, or interfaces that work with any data type. They provide type safety while maintaining flexibility by allowing the type to be specified at runtime.",
        tags: ["TypeScript", "Generics", "Type Safety"],
    },
    {
        id: "typescript4",
        title: "What is the purpose of `enum` in TypeScript?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the use of `enum` in TypeScript.",
        technology: "TypeScript",
        answer: "`enum` is a special data type in TypeScript used to define a set of named constants. It helps in creating a more readable and maintainable codebase by grouping related values together, improving type safety.",
        tags: ["TypeScript", "Enums", "Constants"],
    },
    {
        id: "typescript5",
        title: "What is type inference in TypeScript?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain type inference in TypeScript.",
        technology: "TypeScript",
        answer: "Type inference is the ability of TypeScript to automatically determine the type of a variable based on its assigned value. It reduces the need for explicit type annotations while maintaining type safety.",
        tags: ["TypeScript", "Inference", "Type Safety"],
    }
];
const nextjsQuestions: Question[] = [
    {
        id: "nextjs1",
        title: "What is the difference between `getServerSideProps` and `getStaticProps` in Next.js?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the difference between `getServerSideProps` and `getStaticProps` in Next.js.",
        technology: "Next.js",
        answer: "`getServerSideProps` is used to fetch data on each request (SSR), while `getStaticProps` fetches data at build time (SSG). `getStaticProps` is generally faster and better for static content, whereas `getServerSideProps` is suited for dynamic data.",
        tags: ["Next.js", "SSR", "SSG"],
    },
    {
        id: "nextjs2",
        title: "What are pages and dynamic routing in Next.js?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the concept of pages and dynamic routing in Next.js.",
        technology: "Next.js",
        answer: "In Next.js, the `pages` directory is used to create routes automatically. Dynamic routes can be created by using file names enclosed in square brackets, e.g., `[id].js` for dynamic parameters.",
        tags: ["Next.js", "Routing", "Dynamic Routes"],
    },
    {
        id: "nextjs3",
        title: "What is the purpose of `getInitialProps` in Next.js?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the purpose of `getInitialProps` in Next.js.",
        technology: "Next.js",
        answer: "`getInitialProps` is used to fetch data before a page is rendered in both server-side and client-side rendering. It allows data to be fetched and passed as props to a page before rendering.",
        tags: ["Next.js", "Data Fetching", "Server-side"],
    },
    {
        id: "nextjs4",
        title: "What are API routes in Next.js?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the concept of API routes in Next.js.",
        technology: "Next.js",
        answer: "API routes in Next.js allow you to create serverless functions inside the `pages/api` directory. These functions can handle HTTP requests and be used for backend-like functionality within your Next.js app.",
        tags: ["Next.js", "API Routes", "Serverless"],
    },
    {
        id: "nextjs5",
        title: "What is Image Optimization in Next.js?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the image optimization feature in Next.js.",
        technology: "Next.js",
        answer: "Next.js includes built-in image optimization. It automatically optimizes images on demand and serves them in the most efficient format for each device and screen size, improving performance.",
        tags: ["Next.js", "Image Optimization", "Performance"],
    }
];
const tailwindCssQuestions: Question[] = [
    {
        id: "tailwind1",
        title: "What is Tailwind CSS?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain what Tailwind CSS is.",
        technology: "Tailwind CSS",
        answer: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS. It promotes a more functional approach to styling.",
        tags: ["Tailwind CSS", "Framework", "CSS"],
    },
    {
        id: "tailwind2",
        title: "What are utility classes in Tailwind CSS?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain utility classes in Tailwind CSS.",
        technology: "Tailwind CSS",
        answer: "Utility classes in Tailwind CSS are pre-defined classes that apply single-purpose styles, such as `bg-red-500`, `text-center`, or `p-4`, to elements without needing to write custom CSS.",
        tags: ["Tailwind CSS", "Utility Classes", "CSS"],
    },
    {
        id: "tailwind3",
        title: "What is the `@apply` directive in Tailwind CSS?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the use of `@apply` in Tailwind CSS.",
        technology: "Tailwind CSS",
        answer: "`@apply` is used in Tailwind CSS to apply multiple utility classes to a custom CSS rule. It allows you to reuse utility styles within your own custom CSS classes.",
        tags: ["Tailwind CSS", "Directives", "CSS"],
    },
    {
        id: "tailwind4",
        title: "How can you customize Tailwind CSS?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain how to customize Tailwind CSS for a project.",
        technology: "Tailwind CSS",
        answer: "Tailwind CSS can be customized by editing the `tailwind.config.js` file. You can add custom colors, fonts, spacing, and more to suit your project's needs.",
        tags: ["Tailwind CSS", "Customization", "Configuration"],
    },
    {
        id: "tailwind5",
        title: "What is PurgeCSS in Tailwind CSS?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the role of PurgeCSS in Tailwind CSS.",
        technology: "Tailwind CSS",
        answer: "PurgeCSS is used in Tailwind CSS to remove unused CSS classes from the final build, reducing the size of the CSS file and improving page load times.",
        tags: ["Tailwind CSS", "PurgeCSS", "Optimization"],
    }
];
const reduxQuestions: Question[] = [
    {
        id: "redux1",
        title: "What is Redux Toolkit and how does it simplify Redux?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain what Redux Toolkit is and how it simplifies Redux implementation.",
        technology: "Redux Toolkit",
        answer: "Redux Toolkit is an official library that provides tools and utilities to simplify Redux setup. It offers pre-configured reducers, actions, and middleware, making it easier to manage state and reduce boilerplate code.",
        tags: ["Redux", "State Management", "Redux Toolkit"],
    },
    {
        id: "redux2",
        title: "What is the purpose of the `createSlice` function in Redux Toolkit?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain the purpose of `createSlice` in Redux Toolkit.",
        technology: "Redux Toolkit",
        answer: "`createSlice` is a function in Redux Toolkit that simplifies the creation of Redux slices (reducer logic) by generating action creators and reducers automatically based on the provided slice name and initial state.",
        tags: ["Redux", "State Management", "createSlice"],
    },
    {
        id: "redux3",
        title: "What is the difference between `useSelector` and `useDispatch` in Redux Toolkit?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain the difference between `useSelector` and `useDispatch` in Redux Toolkit.",
        technology: "Redux Toolkit",
        answer: "`useSelector` is a hook used to access the Redux store's state, while `useDispatch` is a hook used to dispatch actions to the store.",
        tags: ["Redux", "State Management", "useSelector", "useDispatch"],
    }
];
const viteQuestions: Question[] = [
    {
        id: "vite1",
        title: "What is Vite and how does it improve the development experience?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain what Vite is and how it improves the development experience.",
        technology: "Vite",
        answer: "Vite is a modern, fast build tool and development server for front-end projects. It improves the development experience by using native ES modules and hot module replacement (HMR) for fast reloading, resulting in significantly faster build times compared to traditional bundlers like Webpack.",
        tags: ["Vite", "Build Tools", "Development"],
    },
    {
        id: "vite2",
        title: "How does Vite handle module bundling for production?",
        category: "Frontend",
        difficulty: "Hard",
        content: "Explain how Vite handles module bundling for production.",
        technology: "Vite",
        answer: "In production, Vite uses esbuild to bundle and optimize the code. Esbuild is a fast bundler that performs tree-shaking, code-splitting, and minification, ensuring efficient production builds. This is a major advantage over traditional bundlers like Webpack, which can be slower.",
        tags: ["Vite", "Module Bundling", "Production"],
    },
    {
        id: "vite3",
        title: "What is the difference between Vite and Webpack?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the difference between Vite and Webpack.",
        technology: "Vite",
        answer: "Vite is faster in development because it uses native ES modules, whereas Webpack bundles all files upfront. Vite offers faster hot module replacement (HMR) and uses esbuild for production bundling, while Webpack relies on slower JavaScript-based bundling.",
        tags: ["Vite", "Webpack", "Comparison"],
    }
];
const bootstrapQuestions: Question[] = [
    {
        id: "bootstrap1",
        title: "What is Bootstrap, and how is it useful in front-end development?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain what Bootstrap is and how it is useful in front-end development.",
        technology: "Bootstrap",
        answer: "Bootstrap is a popular open-source CSS framework that helps in building responsive and mobile-first websites. It provides pre-designed UI components like buttons, forms, grids, and navigation bars, making it easier and faster to develop front-end layouts.",
        tags: ["Bootstrap", "CSS Framework", "Responsive Design"],
    },
    {
        id: "bootstrap2",
        title: "What are grid systems in Bootstrap?",
        category: "Frontend",
        difficulty: "Medium",
        content: "Explain the grid system in Bootstrap and how it works.",
        technology: "Bootstrap",
        answer: "The grid system in Bootstrap is based on a 12-column layout. It allows you to create responsive layouts by defining how elements should be arranged across different screen sizes. You can define the number of columns each element should span using classes like `col-12`, `col-md-6`, etc.",
        tags: ["Bootstrap", "Grid System", "Responsive Design"],
    },
    {
        id: "bootstrap3",
        title: "How does the Bootstrap `container` class work?",
        category: "Frontend",
        difficulty: "Easy",
        content: "Explain the purpose of the `container` class in Bootstrap.",
        technology: "Bootstrap",
        answer: "The `container` class in Bootstrap provides a fixed-width container with automatic padding on both sides. It is used to center content on the page and ensure consistent layout across different screen sizes. It can be `container-fluid` for full-width containers.",
        tags: ["Bootstrap", "Layout", "Container"],
    }
];

export const frontendQuestions: Question[] = [
    ...htmlQuestions,
    ...cssQuestions,
    ...javascriptQuestions,
    ...reactQuestions,
    ...typescriptQuestions,
    ...nextjsQuestions,
    ...tailwindCssQuestions,
    ...reduxQuestions,
    ...viteQuestions,
    ...bootstrapQuestions
];
