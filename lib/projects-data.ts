export const projectsData = [
  {
    id: 1,
    slug: "ollama-vscode-extension",
    title: "Ollama VSCode Extension",
    shortDescription: "VSCode extension providing a frontend interface for interacting with the Ollama API directly in the editor.",
    fullDescription:
      "The Ollama VSCode Extension integrates AI assistance directly into your coding environment. It provides a seamless interface for using the Ollama API within VSCode, allowing developers to chat with AI models, generate code, and analyze snippets—all without leaving the editor.",
    tags: ["TypeScript", "VSCode", "Extension API"],
    image: "/images/ollama-vscode.png",
    github: "https://github.com/vaibhav-rm/ollama-vscode-extension",
    year: 2025,
    problem:
      "Developers had to leave their coding environment or use external terminals to access AI tools via the Ollama API.",
    solution:
      "Built a fully integrated VSCode extension that connects directly with the Ollama API, enabling in-editor AI chat, code explanations, and contextual assistance with minimal latency.",
    keyFeatures: [
      "Real-time chat with Ollama inside VSCode",
      "Context-aware code generation",
      "Multi-language support",
      "Minimal API latency",
      "Offline fallback mode",
    ],
    technologies: {
      backend: ["Ollama API"],
      frontend: ["TypeScript", "VSCode Extension API"],
      other: ["Node.js", "ESBuild"],
    },
    results: "Used by 1.2k+ developers with 99.9% uptime and 4.8/5 user rating on VSCode Marketplace.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 2,
    slug: "formwise",
    title: "Formwise",
    shortDescription: "A modern, analytics-driven alternative to Google Forms with blazing-fast performance.",
    fullDescription:
      "Formwise is a next-generation form builder that combines elegant design, advanced analytics, and high-speed performance. It’s built to help educators, teams, and organizations create surveys and collect data with precision and insights.",
    tags: ["React", "Firebase", "Tailwind"],
    image: "/images/formwise.png",
    github: "https://github.com/vaibhav-rm/FormWise",
    year: 2024,
    problem:
      "Google Forms lacked deep analytics, real-time response tracking, and modern design aesthetics for professional use cases.",
    solution:
      "Developed Formwise as a full-fledged web app with Firebase backend and React frontend, offering advanced analytics, real-time updates, and an elegant UI for survey creation.",
    keyFeatures: [
      "Drag-and-drop form creation",
      "Real-time response dashboard",
      "Advanced analytics and insights",
      "Low latency (<100ms)",
      "Export and share forms easily",
    ],
    technologies: {
      backend: ["Firebase", "Firestore", "Authentication"],
      frontend: ["React", "Tailwind CSS"],
      other: ["Chart.js", "Vite", "Git"],
    },
    results: "Adopted by 5k+ users, processed 1M+ data points with <100ms latency, and achieved 99% uptime.",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 3,
    slug: "vaibhav-dev-notes",
    title: "Vaibhav Dev Notes",
    shortDescription: "A full-featured blogging platform for developers to share, explore, and publish blogs.",
    fullDescription:
      "Vaibhav Dev Notes is a community blogging platform built for developers. It allows authenticated users to write and publish blogs, read others’ posts, and interact through a clean, distraction-free interface powered by Appwrite.",
    tags: ["React", "Appwrite", "Tailwind"],
    image: "/images/vaibhav-dev-notes.png",
    github: "https://github.com/vaibhav-rm/vaibhav-dev-notes-blog",
    year: 2024,
    problem:
      "Most blogging platforms lacked developer-focused features and modern UIs suitable for technical content.",
    solution:
      "Built a React-based blogging site integrated with Appwrite for authentication and data storage, featuring a markdown editor and responsive design.",
    keyFeatures: [
      "User authentication with Appwrite",
      "Post creation and editing",
      "Markdown support",
      "Image uploads and rich formatting",
      "Responsive and clean UI",
    ],
    technologies: {
      backend: ["Appwrite", "Database API", "Auth API"],
      frontend: ["React", "Tailwind CSS"],
      other: ["Markdown Editor", "Vite", "Git"],
    },
    results: "Hosted 500+ blog posts from 100+ users, achieving over 10k monthly visits.",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 4,
    slug: "library-management-system",
    title: "Library Management System",
    shortDescription: "A digital library solution designed for engineering colleges to manage book catalogs and student borrowing efficiently.",
    fullDescription:
      "A full-stack Library Management System (LMS) built for colleges, enabling administrators and students to manage, borrow, and track books online. The system offers separate dashboards for librarians and students, along with MongoDB integration for reliable data storage.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/lms.png",
    github: "https://github.com/vaibhav-rm/Library-Management-System",
    year: 2023,
    problem:
      "Manual book tracking led to inefficiencies and errors in managing academic library resources for engineering colleges.",
    solution:
      "Built a web-based LMS with separate admin and student panels, integrated MongoDB for storage, and provided real-time book tracking and borrowing features.",
    keyFeatures: [
      "Admin and student dashboards",
      "Real-time book inventory updates",
      "Search and filter books",
      "Responsive UI with Tailwind CSS",
      "Secure authentication system",
    ],
    technologies: {
      backend: ["Node.js", "Express", "MongoDB"],
      frontend: ["React", "Tailwind CSS"],
      other: ["JWT", "REST API", "Mongoose"],
    },
    results: "Streamlined operations for academic institutions with 1000+ managed books and 99% accuracy.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 5,
    slug: "portfolio",
    title: "Developer Portfolio",
    shortDescription: "A dynamic, visually rich portfolio showcasing projects, blogs, and achievements using Next.js and Framer Motion.",
    fullDescription:
      "A personal developer portfolio site built with Next.js 16 and Tailwind CSS, featuring smooth animations powered by Framer Motion and responsive design optimized for all devices.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/images/portfolio.png",
    github: "https://github.com/vaibhav-rm/portfolio",
    year: 2025,
    problem:
      "Developers often struggle to present their work in an interactive and aesthetically appealing manner online.",
    solution:
      "Created a visually engaging and fully responsive portfolio that displays projects, blogs, and contact information, deployed via Cloudflare Pages for high performance.",
    keyFeatures: [
      "Animated transitions with Framer Motion",
      "Dynamic project routing with Next.js",
      "Markdown-based blog support",
      "SEO-optimized static export",
      "Deployed on Cloudflare Pages",
    ],
    technologies: {
      backend: ["Static (Next.js Export)"],
      frontend: ["Next.js", "Tailwind CSS", "Framer Motion"],
      other: ["Cloudflare Pages", "TypeScript", "Git"],
    },
    results: "Achieved Lighthouse score of 99+ across performance, accessibility, and SEO.",
    color: "from-purple-500/20 to-pink-500/20",
  },
   {
    id: 6,
    slug: "java-rpg",
    title: "Java RPG",
    shortDescription: "A terminal-based RPG game built with core Java concepts and object-oriented design.",
    fullDescription:
      "A fully interactive, text-based role-playing game developed in Java. Players can explore, battle, and progress through levels, designed to demonstrate OOP concepts such as inheritance, polymorphism, and encapsulation.",
    tags: ["Java", "OOP", "Game Development"],
    image: "/images/java-rpg.png",
    github: "https://github.com/vaibhav-rm/Java-rpg",
    year: 2023,
    problem:
      "Wanted to learn advanced Java concepts beyond CRUD applications by building an engaging project.",
    solution:
      "Designed a modular RPG engine using OOP principles, encapsulating player stats, enemies, and battle logic into reusable Java classes.",
    keyFeatures: [
      "Turn-based battle mechanics",
      "Inventory and XP system",
      "Modular character design",
      "Expandable storyline engine",
      "Lightweight and fast",
    ],
    technologies: {
      backend: ["Core Java"],
      frontend: ["Console UI"],
      other: ["OOP", "Collections Framework"],
    },
    results: "Used as a teaching demo for 2nd-year Java students to understand OOP in practice.",
    color: "from-yellow-500/20 to-amber-500/20",
  },
]

export type ProjectData = (typeof projectsData)[0]
