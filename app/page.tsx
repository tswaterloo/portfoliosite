type Entry = {
  name?: string
  role?: string
  dates: string
  text: string
}

const work: Entry[] = [
  {
    name: "StageRail Capital",
    role: "quantitative trader",
    dates: "sep ’26 – now",
    text: "$100K multi-asset book, systematic and discretionary, running at a 2.1 Sharpe. Rebuilt the firm's entire research and deployment pipeline",
  },
  {
    name: "Petra Lab X",
    role: "AI engineering intern",
    dates: "sep – dec ’26",
    text: "Architected the company's agentic ontology: 15 enterprise systems unified into one live knowledge graph of 6.5M+ objects. AI agents investigate and act on the business through it, and every answer they give is verified down to the source record",
  },
  {
    role: "robotics & ML intern",
    dates: "jan – apr ’26",
    text: "Built a full production system to replace manual picking with cobots, from perception to grasp, among other things",
  },
]

const projects: Entry[] = [
  {
    name: "Prediction-market arbitrage",
    dates: "oct ’26 – now",
    text: "Treats 10+ sportsbooks, Kalshi and Polymarket as a single market. One model prices every live contract, and capital routes automatically to whichever venue is wrong",
  },
  {
    name: "Limit order book & market making",
    dates: "jan ’26 – now",
    text: "A full electronic exchange in C++, matching 100k+ orders a second with O(1) cancels. Its market maker cut max drawdown 35% in volatile regimes, alongside a pairs stat arb and a next-tick model",
  },
]

const earlier: Entry[] = [
  {
    name: "Robot Revolution",
    role: "captain, lead programmer",
    dates: "’17 – ’25",
    text: "Led the team to the VEX World Championship finals, top 2 of 20,000 teams. Won a Worlds division and two New Jersey championships along the way",
  },
  {
    name: "Hofstra University",
    role: "research intern",
    dates: "’24 – ’25",
    text: "Designed, built and programmed a modular large-format gantry 3D printer, end to end",
  },
  {
    name: "Millburn AI",
    role: "software director",
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

      <p>Trading equities, FX and perps, and building an agentic ontology</p>

      <div className="links">
        <a href="mailto:t67shah@uwaterloo.ca">t67shah@uwaterloo.ca</a>
        <a href="https://linkedin.com/in/tanush-shah17">LinkedIn</a>
      </div>

      <Section title="work" entries={work} />
      <Section title="projects" entries={projects} />
      <Section title="earlier" entries={earlier} />
    </main>
  )
}
