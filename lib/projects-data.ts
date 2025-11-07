export const projectsData = [
  {
    id: 1,
    slug: "library-management-system",
    title: "Library Management System",
    shortDescription: "Full-stack LMS with role-based authentication, inventory tracking, and reporting",
    fullDescription:
      "A comprehensive library management system built with Spring Boot and React. Features include user authentication with role-based access control, real-time inventory tracking, automated email notifications, and detailed reporting dashboards.",
    tags: ["Spring Boot", "MongoDB", "React", "Java", "JWT Auth"],
    image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop",
    github: "https://github.com/vaibhav-rm/LMS",
    year: 2023,
    problem:
      "Manual library management was inefficient and error-prone with no digital tracking or automated notifications.",
    solution:
      "Built a complete full-stack solution with Spring Boot backend for API design and MongoDB for scalable data storage, paired with React frontend for intuitive user interface.",
    keyFeatures: [
      "Role-based authentication (Admin, Librarian, Member)",
      "Real-time inventory management",
      "Automated email notifications",
      "Advanced search and filtering",
      "Monthly and yearly reports",
    ],
    technologies: {
      backend: ["Spring Boot", "MongoDB", "Java", "JWT", "RESTful APIs"],
      frontend: ["React", "Tailwind CSS", "Axios"],
      other: ["Postman", "Git", "Maven"],
    },
    results: "Successfully deployed and used by 3 local libraries for efficient management of 10,000+ books",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    slug: "formwise",
    title: "FormWise",
    shortDescription: "Smart form builder with validation, conditional logic, and submission tracking",
    fullDescription:
      "An intelligent form builder that empowers non-technical users to create complex forms without coding. Features drag-and-drop interface, conditional field logic, real-time validation, and comprehensive submission analytics.",
    tags: ["React", "Tailwind", "JavaScript", "TypeScript"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28d34953?w=800&h=600&fit=crop",
    github: "https://github.com/vaibhav-rm/FormWise",
    year: 2024,
    problem:
      "Creating forms typically required technical skills, limiting non-developers from building custom data collection forms.",
    solution:
      "Developed FormWise with a visual drag-and-drop builder, supporting conditional logic, form versioning, and detailed submission analytics.",
    keyFeatures: [
      "Drag-and-drop form builder",
      "Conditional field display",
      "Real-time form validation",
      "Submission analytics",
      "Export to CSV",
      "Form versioning",
    ],
    technologies: {
      backend: ["Node.js", "Express"],
      frontend: ["React", "Tailwind CSS", "TypeScript"],
      other: ["JSON Schema"],
    },
    results: "500+ forms created with 10,000+ submissions processed and 98% uptime",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    slug: "dev-notes-blog",
    title: "Dev Notes Blog",
    shortDescription: "Technical blog platform for sharing development insights and code snippets",
    fullDescription:
      "A modern technical blog built with Next.js featuring MDX support for rich content, automatic syntax highlighting, SEO optimization, and performance analytics.",
    tags: ["Next.js", "Tailwind", "MDX", "Node.js"],
    image: "https://images.unsplash.com/photo-1516534775068-bb57846d985c?w=800&h=600&fit=crop",
    github: "https://github.com/vaibhav-rm/dev-notes",
    year: 2024,
    problem: "Needed a fast, SEO-friendly platform to share technical insights with automatic code formatting.",
    solution:
      "Built with Next.js for server-side rendering, MDX for rich content, and integrated with GitHub for content management.",
    keyFeatures: [
      "MDX support for rich formatting",
      "Syntax highlighting for code blocks",
      "SEO optimized",
      "Dark mode support",
      "Reading time estimation",
      "Comments system",
    ],
    technologies: {
      backend: ["Next.js", "Node.js"],
      frontend: ["React", "Tailwind CSS"],
      other: ["MDX", "GitHub API"],
    },
    results: "50+ articles published, 5,000+ monthly readers, 95+ Lighthouse score",
    color: "from-orange-500/20 to-red-500/20",
  },
]

export type ProjectData = (typeof projectsData)[0]
