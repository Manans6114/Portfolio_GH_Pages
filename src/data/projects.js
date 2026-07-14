export const projects = [
  {
    id: "mindvault",
    name: "MindVault",
    period: "Oct 2025 – Nov 2025",
    blurb: "A secure, high-performance note & knowledge store with token-based auth and cached reads.",
    description:
      "MindVault exposes secure REST APIs backed by MongoDB, with JWT authentication guarding every route. Redis caching sits in front of hot reads to keep responses fast under load.",
    points: [
      "Developed secure REST APIs with JWT authentication and MongoDB integration.",
      "Integrated Redis caching to improve API performance.",
    ],
    stack: ["Java", "Spring Boot", "MongoDB", "Redis", "JWT"],
    repo: "https://github.com/Manans6114",
    accent: "#e8a87c",
  },
  {
    id: "job-portal",
    name: "Job Portal App",
    period: "Aug 2025 – Sep 2025",
    blurb: "A job marketplace backend with posting, search, and user management on a clean layered architecture.",
    description:
      "The Job Portal App provides REST APIs for posting jobs, searching listings, and managing users. It is built on a modular layered architecture with a carefully designed PostgreSQL schema.",
    points: [
      "Built REST APIs for job posting, search, and user management.",
      "Designed PostgreSQL schema with modular layered architecture.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "REST"],
    repo: "https://github.com/Manans6114",
    accent: "#7cb2e8",
  },
]
