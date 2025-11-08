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
]

export type ProjectData = (typeof projectsData)[0]
