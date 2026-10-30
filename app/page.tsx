type Entry = {
  name: string
  role?: string
  dates: string
  text: string
}

const work: Entry[] = [
  {
    name: "StageRail Capital",
    role: "Quantitative Trader",
    dates: "Sep 2026 – now",
    text: "Running $100K of private capital across systematic equity and futures strategies. Every strategy goes through a research pipeline I built before it touches real money.",
  },
  {
    name: "Petra Lab X",
    role: "Senior Engineering Intern",
    dates: "Sep – Dec 2026",
    text: "Architected an agentic AI platform on top of a knowledge graph of the company's core systems. Its agents can reconstruct the full history of any transaction across 100k+ live records.",
  },
  {
    name: "Petra Lab X",
    role: "Software & ML Intern",
    dates: "Jan – Apr 2026",
    text: "Built a robotic picking system that replaced manual work with a cobot, and shipped it to production.",
  },
]

const projects: Entry[] = [
  {
    name: "Prediction-market arbitrage",
    dates: "Oct 2026 – now",
    text: "A real-time scanner across 10+ sportsbooks, Kalshi and Polymarket that strips out the vig and flags arbitrage.",
  },
  {
    name: "Limit order book & market making",
    dates: "Jan 2026 – now",
    text: "A C++ matching engine that handles 100k+ orders/sec, with a market maker on top that cut max drawdown 35% in volatile simulations.",
  },
]

const earlier: Entry[] = [
  {
    name: "Robot Revolution",
    role: "Captain, lead programmer",
    dates: "2017 – 2025",
    text: "Led the team to the VEX World Championship finals, top 2 of 20,000 teams worldwide, winning a Worlds division and two New Jersey championships along the way.",
  },
  {
    name: "Hofstra University",
    role: "Research intern",
    dates: "2024 – 2025",
    text: "Designed, built and programmed a modular large-format gantry 3D printer, end to end.",
  },
  {
    name: "Millburn AI",
    role: "Software director",
    dates: "2021 – 2023",
    text: "The only AI team picked for the VEX Worlds showcase. Made the robot's onboard AI 5x faster on a Jetson Nano.",
  },
]

function Section({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <section>
      <h2>{title}</h2>
      {entries.map((e) => (
        <div className="entry" key={e.name + e.dates}>
          <div className="entry-head">
            <span>
              {e.name}
              {e.role && <span className="entry-role"> · {e.role}</span>}
            </span>
            <span className="entry-dates">{e.dates}</span>
          </div>
          <p className="entry-text">{e.text}</p>
        </div>
      ))}
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <h1>Tanush Shah</h1>
      <p className="muted">Electrical Engineering, University of Waterloo</p>

      <p>I trade systematic strategies at StageRail Capital and build agentic AI at Petra Lab X.</p>

      <div className="links">
        <a href="mailto:t67shah@uwaterloo.ca">t67shah@uwaterloo.ca</a>
        <a href="https://linkedin.com/in/tanush-shah17">LinkedIn</a>
      </div>

      <Section title="Work" entries={work} />
      <Section title="Projects" entries={projects} />
      <Section title="Earlier" entries={earlier} />
    </main>
  )
}
