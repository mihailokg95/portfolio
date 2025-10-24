export interface TechItem {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Expert";
  category: string;
}

export const technologies: Record<string, TechItem[]> = {
  "Frontend": [
    { name: "React", icon: "skill-icons:react-dark", level: "Expert", category: "Frontend" },
    { name: "Angular", icon: "devicon:angular", level: "Expert", category: "Frontend" },
    { name: "Next.js", icon: "devicon:nextjs", level: "Expert", category: "Frontend" },
    { name: "Astro", icon: "devicon:astro", level: "Expert", category: "Frontend" },
    { name: "TypeScript", icon: "devicon:typescript", level: "Expert", category: "Frontend" },
    { name: "JavaScript", icon: "devicon:javascript", level: "Expert", category: "Frontend" },
    { name: "Tailwind", icon: "devicon:tailwindcss", level: "Expert", category: "Frontend" },
    { name: "Redux", icon: "devicon:redux", level: "Expert", category: "Frontend" },
    { name: "Zustand", icon: "devicon:zustand", level: "Expert", category: "Frontend" },
    { name: "TanStack Query", icon: "logos:react-query-icon", level: "Expert", category: "Frontend" }
  ],
  "Backend": [
    { name: "Node.js", icon: "devicon:nodejs", level: "Expert", category: "Backend" },
    { name: "Express", icon: "skill-icons:expressjs-dark", level: "Expert", category: "Backend" },
    { name: "NestJS", icon: "devicon:nestjs", level: "Expert", category: "Backend" },
    { name: "GoLang", icon: "devicon:go", level: "Intermediate", category: "Backend" },
    { name: "Nginx", icon: "devicon:nginx", level: "Intermediate", category: "Backend" }
  ],
  "Database": [
    { name: "PostgreSQL", icon: "logos:postgresql", level: "Expert", category: "Database" },
    { name: "MongoDB", icon: "devicon:mongodb", level: "Expert", category: "Database" },
    { name: "MySQL", icon: "logos:mysql", level: "Expert", category: "Database" },
    { name: "Redis", icon: "devicon:redis", level: "Expert", category: "Database" },
    { name: "Firebase", icon: "vscode-icons:file-type-firebase", level: "Expert", category: "Database" },
    { name: "Prisma", icon: "skill-icons:prisma", level: "Expert", category: "Database" }
  ],
  "DevOps & Cloud": [
    { name: "Docker", icon: "devicon:docker", level: "Expert", category: "DevOps" },
    { name: "AWS", icon: "devicon:amazonwebservices-wordmark", level: "Expert", category: "DevOps" },
    { name: "GitHub Actions", icon: "devicon:githubactions", level: "Expert", category: "DevOps" },
    { name: "Vercel", icon: "devicon:vercel", level: "Expert", category: "DevOps" },
    { name: "Turbopack", icon: "simple-icons:turbo", level: "Expert", category: "DevOps" },
    { name: "Git", icon: "devicon:git", level: "Expert", category: "DevOps" }
  ],
  "Tools & Others": [
    { name: "GraphQL", icon: "logos:graphql", level: "Expert", category: "Tools" },
    { name: "Socket.io", icon: "simple-icons:socketdotio", level: "Expert", category: "Tools" },
    { name: "Jest", icon: "skill-icons:jest", level: "Expert", category: "Tools" },
    { name: "Vitest", icon: "devicon:vitest", level: "Expert", category: "Tools" },
    { name: "Playwright", icon: "logos:playwright", level: "Expert", category: "Tools" },
    { name: "React Testing Library", icon: "simple-icons:testinglibrary", level: "Expert", category: "Tools" },
    { name: "Webpack", icon: "devicon:webpack", level: "Expert", category: "Tools" },
    { name: "Vite", icon: "devicon:vitejs", level: "Expert", category: "Tools" },
    { name: "VS Code", icon: "devicon:vscode", level: "Expert", category: "Tools" }
  ]
};

