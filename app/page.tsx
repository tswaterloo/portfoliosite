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
    text: "Running a $100K allocation across systematic and discretionary strategies at a 2.1 Sharpe. Rebuilt the firm's entire research and deployment pipeline",
  },
  {
    name: "Petra Lab X",
    role: "AI engineering intern",
    dates: "sep ’26 – now",
    text: "Building an agentic ontology where AI agents reason over and act on a live knowledge graph",
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
    text: "Prices every sports and event market across 10+ sportsbooks, Kalshi and Polymarket against one vig-free fair value, then trades the mispricings automatically",
  },
  {
    name: "Limit order book & market making",
    dates: "jan ’26 – now",
    text: "A full electronic exchange in C++, matching 100k+ orders a second with O(1) cancels. A market maker built on it cut max drawdown 35% in volatile regimes, alongside a pairs stat arb and a next-tick model",
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
