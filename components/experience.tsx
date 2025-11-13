import { ExternalLink, Award, Code, Users } from "lucide-react"

const experiences = [
  {
    period: "September 2025 — Present",
    title: "Electrium Mobility Design Team | C++, KiCad",
    role: "Firmware Team Lead | Electric Bike Team",
    location: "Waterloo, ON",
    description: [
      "Leading ESP32 firmware development in C++ for electric bike motor control and battery management, integrating with drivetrain systems in collaboration with electrical and mechanical teams",
      "Designing PCBs in KiCad to interface sensors and motor controllers with the firmware",
    ],
    icon: Users,
    color: "from-green-400 to-emerald-500",
  },
  {
    period: "August 2017 — June 2025",
    title: "Robot Revolution | C++, Fusion 360",
    role: "Team Captain, Lead Programmer & Designer",
    location: "Summit, NJ",
    description: [
      "Led 6-person team to Finalist at VEX Robotics World Championship (Top 2 of 20,000 teams worldwide)",
      "Developed drive, autonomous, PID, and odometry algorithms in C++; designed robots in Fusion 360",
      "Created 600+ page engineering notebooks on season code/design, earning 5x Judges' Honors",
      "Taught C++ lessons to middle schoolers and volunteered year-round at regional middle school VEX IQ competitions",
      "Additional Awards: Worlds Division Champion, Worlds Division Finalist, 2x New Jersey Tournament Champion",
    ],
    links: [
      { label: "CAD Portfolio", url: "https://bit.ly/46tg7gQ" },
      { label: "Engineering Notebook", url: "https://bit.ly/46tg7gQ" },
    ],
    icon: Award,
    color: "from-yellow-400 to-orange-500",
  },
  {
    period: "June 2024 — August 2025",
    title: "Hofstra University | C++, KiCad, Onshape",
    role: "Computer Engineering Research Intern | Lead Student Researcher (Prof. Edward M. Segal)",
    location: "Hempstead, NY",
    description: [
      "Designed, built, and coded a modular large-format gantry 3D printer in Onshape; implemented motion control and G-code execution via Duet 3D and RepRap Firmware",
      "Engineered a mobile 4WD 3D Printing Robot using Arduino; fabricated a custom PCB shield in KiCad and implemented motion control for stepper motors in C++",
      "Presented live demos of both systems at several research symposiums with 2000+ attendees",
    ],
    links: [{ label: "Research Showcase", url: "https://bit.ly/48rf9Ej" }],
    icon: Code,
    color: "from-cyan-400 to-blue-500",
  },
  {
    period: "June 2021 — August 2023",
    title: "Millburn AI Robotics | Python",
    role: "VEX AI Software Director",
    location: "Millburn, NJ",
    description: [
      "Selected as only AI team for VEX Dallas Worlds Showcase; coordinated a 4-person software team to program two autonomously-communicating robots for cooperative navigation, target detection, and scoring without human input",
      "Developed real-time object detection in PyTorch with YOLOv5; deployed on NVIDIA Jetson Nano, raising inference speed from 1.5 FPS to 8 FPS via TensorRT GPU optimization",
      "Designed and fabricated custom robot components using CAD software, 3D printing, and CNC milling",
    ],
    links: [
      { label: "Website", url: "https://bit.ly/3KyGHh4" },
      {
        label: "End of Season Reveal",
        url: "https://drive.google.com/file/d/1EV52fv9Jz3QZ3ZjrAwzmMLWUji5pTvyy/view?usp=sharing",
      },
    ],
    icon: Code,
    color: "from-purple-400 to-pink-500",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-8 border-b border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-3">Experience & Leadership</h2>
            <p className="text-sm text-muted-foreground font-mono">Robotics / Research / Development</p>
          </div>

          <div className="space-y-0">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <div
                  key={index}
                  className="group relative border-l-2 border-border pl-8 pb-12 hover:border-primary/60 transition-all duration-500"
                >
                  <div className="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-background border-2 border-border group-hover:border-primary flex items-center justify-center group-hover:scale-125 transition-all duration-500 z-10">
                    <Icon
                      className={`h-4 w-4 text-muted-foreground group-hover:bg-gradient-to-br group-hover:${exp.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500`}
                    />
                  </div>

                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b ${exp.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                  />

                  <div className="font-mono text-xs text-muted-foreground mb-2 group-hover:text-primary/70 transition-colors duration-300">
                    {exp.period}
                  </div>

                  <h3
                    className={`text-2xl font-light tracking-tight mb-1 group-hover:bg-gradient-to-r group-hover:${exp.color} group-hover:bg-clip-text group-hover:text-transparent group-hover:translate-x-1 transition-all duration-300`}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-sm text-primary/80 mb-1 font-mono group-hover:text-primary transition-colors duration-300">
                    {exp.role}
                  </p>
                  <p className="text-xs text-muted-foreground/80 mb-4 font-mono">{exp.location}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 flex gap-2"
                      >
                        <span className="text-primary/60 mt-1.5 flex-shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.links && exp.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {exp.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-primary/80 hover:text-primary transition-colors inline-flex items-center gap-1 hover:gap-2 transition-all underline underline-offset-2"
                        >
                          {link.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
