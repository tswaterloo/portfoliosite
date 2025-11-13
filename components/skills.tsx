"use client"

const skillCategories = [
  {
    title: "Software",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "PostgreSQL", "REST APIs", "Git", "Linux"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "PyTorch",
      "TensorFlow",
      "TensorRT",
      "OpenCV",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "YOLO",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Hardware & CAD",
    skills: ["Arduino", "ESP32", "KiCad", "Fusion 360", "Onshape", "3D Printing", "CNC Machining"],
    color: "from-orange-500 to-red-500",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-8 relative border-b border-border/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Skills</h2>
          <p className="text-muted-foreground mb-6 text-sm max-w-2xl">
            Robotics • AI/ML • Embedded Systems • Full-Stack Development
          </p>

          <div className="space-y-4">
            {skillCategories.map((category, index) => (
              <div key={index} className="group">
                <h3
                  className={`text-base font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
