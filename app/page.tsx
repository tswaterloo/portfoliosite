type Entry = {
  name: string
  role?: string
  dates: string
  points: string[]
}

const work: Entry[] = [
  {
    name: "StageRail Capital",
    role: "Quantitative Trader",
    dates: "Sep 2026 – now",
    points: [
      "Managing $100K of private capital across systematic equity and futures strategies",
      "Rebuilt the research stack so strategies go from walk-forward backtests to paper trading to live",
      "Risk is fully automated, with hard limits on leverage, exposure and drawdown and a kill switch",
      "Tested 50+ strategies for overfitting and look-ahead bias, and only the out-of-sample survivors go live",
    ],
  },
  {
    name: "Petra Lab X",
    role: "Senior Engineering Intern",
    dates: "Sep – Dec 2026",
    points: [
      "Architected an agentic AI platform that unifies the company's core systems into one knowledge graph",
      "Shipped AI agents that reason across it to reconstruct the full history of any transaction",
      "Running in production on 100k+ live records",
    ],
  },
  {
    name: "Petra Lab X",
    role: "Software & ML Intern",
    dates: "Jan – Apr 2026",
    points: [
      "Built a robotic picking system that replaced manual work with a cobot",
      "Owned the full pipeline: 3D point clouds, pose estimation and grasp execution",
      "Shipped it to production as a distributed async service on Azure",
    ],
  },
]

const projects: Entry[] = [
  {
    name: "Prediction-market arbitrage",
    dates: "Oct 2026 – now",
    points: [
      "Scans 10+ sportsbooks, Kalshi and Polymarket in real time, strips out the vig and flags arbitrage",
      "Checked fair prices against a full NFL season of results to tell real edge from noise",
    ],
  },
  {
    name: "Limit order book & market making",
    dates: "Jan 2026 – now",
    points: [
      "Multi-threaded C++ matching engine doing 100k+ orders/sec with O(1) cancels",
      "A market maker that skews quotes by inventory, cutting max drawdown 35% in volatile simulations",
      "Stat arb that uses cointegration tests to find mean-reverting equity pairs",
      "A model that predicts the next tick from order book imbalance and VWAP deviation",
    ],
  },
]

const earlier: Entry[] = [
  {
    name: "Robot Revolution",
    role: "Captain, lead programmer",
    dates: "2017 – 2025",
    points: [
      "Led a 6-person team to the VEX World Championship finals, top 2 of 20,000 teams",
      "Won a Worlds division and two New Jersey championships along the way",
    ],
  },
  {
    name: "Hofstra University",
    role: "Research intern, Prof. Edward M. Segal",
    dates: "2024 – 2025",
    points: ["Wrote the motion control and G-code execution for a large-format 3D printer"],
  },
  {
    name: "Millburn AI",
    role: "Software director",
    dates: "2021 – 2023",
    points: [
      "Only AI team picked for the VEX Worlds showcase",
      "Made the robot's onboard AI 5x faster on a Jetson Nano",
    ],
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
          <ul>
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
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
        I trade systematic strategies at StageRail Capital and build LLM agents at Petra Lab X. On the side I'm working on a C++ matching engine and a prediction-market arbitrage scanner. Before Waterloo, I captained a robotics team to the VEX World Championship finals.
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
