"use client"
import { ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  image_url: string
  technologies: string[]
  github_url?: string
  demo_url?: string
  display_order: number
}

const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Real-Time AI Delirium Detection System",
    description: "Python | Sep 2025 – Present",
    image_url: "/computer-vision-object-detection-ai-robot.jpg",
    technologies: ["Python", "YOLOv8", "OpenCV", "FFT", "Raspberry Pi 5"],
    display_order: 1,
  },
  {
    id: 2,
    title: "Financial News Sentiment Analysis",
    description: "Python | Jun 2023 – Aug 2023",
    image_url: "/financial-ai-sentiment-analysis-dashboard.jpg",
    technologies: ["Python", "BERT", "LSTM", "TensorFlow", "scikit-learn", "NLP"],
    display_order: 2,
  },
]

const PROJECT_BULLETS: Record<string, string[]> = {
  "Real-Time AI Delirium Detection System": [
    "Built a 2-layer AI system integrating FFT-based audio frequency analysis and YOLOv8 computer vision to detect delirium-related distress in hospitals in real time, reducing manual nurse checks from hours to seconds",
    "Deployed on Raspberry Pi 5 using Python and OpenCV, achieving 89% detection accuracy, 2–5 s response time, <5% false positives, and stable 24/7 operation",
  ],
  "Financial News Sentiment Analysis": [
    "Built NLP models (BERT, LSTM) to predict market trends from financial news with TensorFlow and scikit-learn",
    "Tuned model accuracy and optimized text preprocessing, improving sentiment classification performance by 15%",
  ],
}

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const bullets = PROJECT_BULLETS[project.title] || []

  return (
    <div
      ref={itemRef}
      className={`group transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="relative border-l-2 border-border pl-8 pb-12 hover:border-primary transition-colors duration-300">
        <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-border group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />

        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-base text-muted-foreground leading-relaxed flex gap-2">
              <span className="text-primary/60 mt-1.5 flex-shrink-0">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/sql/projects")

        if (response.ok) {
          const result = await response.json()

          if (result.success && Array.isArray(result.data)) {
            const mainProjectTitles = ["Real-Time AI Delirium Detection System", "Financial News Sentiment Analysis"]

            const filteredProjects = result.data
              .filter((p: Project) => mainProjectTitles.includes(p.title))
              .sort((a: Project, b: Project) => a.display_order - b.display_order)

            if (filteredProjects.length === 2) {
              setProjects(filteredProjects)
            } else {
              setProjects(FALLBACK_PROJECTS)
            }
          } else {
            setProjects(FALLBACK_PROJECTS)
          }
        } else {
          setProjects(FALLBACK_PROJECTS)
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error)
        setProjects(FALLBACK_PROJECTS)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section id="projects" className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-8 relative border-b border-border/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-3">Projects</h2>
            <p className="text-sm text-muted-foreground font-mono">AI / Computer Vision / NLP</p>
          </div>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <ProjectItem key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
