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
    dates: "sep 2026 – now",
    text: "$100K multi-asset book, systematic and discretionary, running at a 2.1 Sharpe. Rebuilt the firm's entire research and deployment pipeline.",
  },
  {
    name: "Petra Lab X",
    role: "Senior Engineering Intern",
    dates: "2026",
    text: "Built a robotic picking system that replaced manual work with a cobot and shipped it to production. Then architected the company's agentic AI platform: a knowledge graph unifying its core systems, with LLM agents that can trace any transaction across 100k+ live records.",
  },
]

const projects: Entry[] = [
  {
    name: "Prediction-market arbitrage",
    dates: "oct 2026 – now",
    text: "Live scanner across 10+ sportsbooks, Kalshi and Polymarket. De-vigs every line, flags mispriced markets in real time, and is calibrated against a full NFL season of settled outcomes.",
  },
  {
    name: "Limit order book & market making",
    dates: "jan 2026 – now",
    text: "A matching engine and the strategies that trade on it. Multi-threaded C++ core doing 100k+ orders/sec with O(1) cancels, a market maker that cut max drawdown 35% in volatile regimes, plus stat arb and a next-tick model trained on order book microstructure.",
  },
]

const earlier: Entry[] = [
  {
    name: "Robot Revolution",
    role: "Captain, lead programmer",
    dates: "2017 – 2025",
    text: "Led the team to the VEX World Championship finals, top 2 of 20,000 teams. Won a Worlds division and two New Jersey championships along the way.",
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

      <p>
        Trading a multi-asset book at StageRail Capital and building agentic AI at Petra Lab X. On the side, a C++
        matching engine and a prediction-market arbitrage scanner. Before Waterloo, eight years of competitive
        robotics, ending in a VEX World Championship final.
      </p>

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
