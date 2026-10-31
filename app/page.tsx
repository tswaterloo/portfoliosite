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
    dates: "sep ’26 – now",
    text: "$100K multi-asset book, systematic and discretionary, running at a 2.1 Sharpe. Rebuilt the firm's entire research and deployment pipeline",
  },
  {
    name: "Petra Lab X",
    role: "Senior Engineering Intern",
    dates: "sep – dec ’26",
    text: "Architected the company's agentic AI platform: a knowledge graph unifying its core systems, with LLM agents that can trace any transaction across 100k+ live records",
  },
  {
    role: "Software & ML Intern",
    dates: "jan – apr ’26",
    text: "Built a robotic picking system that replaced manual work with a cobot and shipped it to production, among other things",
  },
]

const projects: Entry[] = [
  {
    name: "Prediction-market arbitrage",
    dates: "oct ’26 – now",
    text: "Real-time arbitrage engine spanning 10+ sportsbooks, Kalshi and Polymarket. De-vigs every line and catches cross-venue mispricings the moment they appear, validated on a full NFL season of settled games",
  },
  {
    name: "Limit order book & market making",
    dates: "jan ’26 – now",
    text: "A C++ exchange from scratch: order book and matching engine clearing 100k+ orders a second with O(1) cancels. On top of it, a market maker that cut max drawdown 35% in volatile regimes, a pairs stat arb, and a next-tick predictor trained on microstructure",
  },
]

const earlier: Entry[] = [
  {
    name: "Robot Revolution",
    role: "Captain, lead programmer",
    dates: "’17 – ’25",
    text: "Led the team to the VEX World Championship finals, top 2 of 20,000 teams. Won a Worlds division and two New Jersey championships along the way",
  },
  {
    name: "Hofstra University",
    role: "Research intern",
    dates: "’24 – ’25",
    text: "Designed, built and programmed a modular large-format gantry 3D printer, end to end",
  },
  {
    name: "Millburn AI",
    role: "Software director",
    dates: "’21 – ’23",
    text: "The only AI team picked for the VEX Worlds showcase. Made the robot's onboard AI 5x faster on a Jetson Nano",
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

      <p>Trading a multi-asset book at StageRail Capital and building agentic AI at Petra Lab X.</p>

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
