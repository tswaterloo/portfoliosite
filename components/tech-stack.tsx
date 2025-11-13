"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const techStack = [
  {
    category: "Frontend",
    color: "from-cyan-400 to-blue-500",
    technologies: [
      { name: "React 18", usage: "Component-based UI architecture" },
      { name: "Next.js 15", usage: "App Router, Server Actions, and API routes" },
      { name: "TypeScript", usage: "Type-safe development across the codebase" },
      { name: "Tailwind CSS v4", usage: "Utility-first styling with dark theme" },
      { name: "shadcn/ui", usage: "Accessible UI components library" },
    ],
  },
  {
    category: "Backend & Database",
    color: "from-green-400 to-emerald-500",
    technologies: [
      { name: "Node.js", usage: "JavaScript runtime for server-side logic" },
      { name: "PostgreSQL (Neon)", usage: "Serverless database for projects, skills, and contact data" },
      { name: "REST API", usage: "API endpoints for data operations" },
      { name: "SQL", usage: "Database queries and migrations" },
    ],
  },
]

export function TechStack() {
  return (
    <section className="py-8 relative overflow-hidden border-b border-border/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Technology Stack</h2>
            <p className="text-muted-foreground text-sm">
              Technologies used to build this portfolio. Hover to see usage details.
            </p>
          </div>

          <TooltipProvider delayDuration={200}>
            <div className="grid md:grid-cols-2 gap-6">
              {techStack.map((stack, index) => {
                return (
                  <div key={index} className="group">
                    <h3
                      className={`text-base font-semibold bg-gradient-to-r ${stack.color} bg-clip-text text-transparent mb-2`}
                    >
                      {stack.category}
                    </h3>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {stack.technologies.map((tech) => (
                        <Tooltip key={tech.name}>
                          <TooltipTrigger asChild>
                            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-help">
                              {tech.name}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="text-xs">{tech.usage}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  )
}
