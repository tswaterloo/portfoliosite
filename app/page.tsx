type Entry = {
  name?: string
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
    role: "Software & ML Intern",
    dates: "jan – apr 2026",
    text: "Built a robotic picking system that replaced manual work with a cobot and shipped it to production.",
  },
  {
    role: "Senior Engineering Intern",
    dates: "sep – dec 2026",
    text: "Architected the company's agentic AI platform: a knowledge graph unifying its core systems, with LLM agents that can trace any transaction across 100k+ live records.",
  },
]

const projects: Entry[] = [
  {
    name: "Prediction-market arbitrage",
    dates: "oct 2026 – now",
    text: "Pulls live odds from 10+ sportsbooks, Kalshi and Polymarket, strips the vig and cross-prices every market to catch arbitrage in real time. Its fair values were tested against a full NFL season of settled games, which is how it tells real edge from noise.",
  },
  {
    name: "Limit order book & market making",
    dates: "jan 2026 – now",
    text: "A multi-threaded C++ matching engine that clears 100k+ orders a second with O(1) cancels, and the strategies that trade against it: an inventory-skewing market maker that cut max drawdown 35% in volatile regimes, a cointegration-based stat arb, and a model that calls the next tick from order book microstructure.",
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
        <div className={e.name ? "entry" : "entry entry-cont"} key={e.role + e.dates}>
          <div className="entry-head">
            <span>
              {e.name ?? <span className="entry-role">{e.role}</span>}
              {e.name && e.role && <span className="entry-role"> · {e.role}</span>}
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
        Trading a multi-asset book at StageRail Capital and building agentic AI at Petra Lab X. Mostly drawn to
        markets, and to systems that have to be both fast and right.
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
