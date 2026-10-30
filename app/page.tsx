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
      "Trade $100K of private capital across systematic equity and futures strategies with full discretion",
      "Rebuilt the research stack into a walk-forward backtesting and paper-to-live pipeline on AWS",
      "Enforce hard limits on leverage, exposure and drawdown, backed by an automated kill switch",
      "Stress-tested 50+ strategies for overfitting, look-ahead bias and costs, promoting only out-of-sample survivors",
    ],
  },
  {
    name: "Petra Lab X",
    role: "Senior Engineering Intern",
    dates: "Sep – Dec 2026",
    points: [
      "Shipped LLM agents that reconstruct the full history of any transaction",
      "Designed the typed graph underneath, unifying 4 production systems (ERP, portal, Outlook, SharePoint)",
      "Built the incremental, idempotent sync over REST and Microsoft Graph that keeps 100k+ records current",
    ],
  },
  {
    name: "Petra Lab X",
    role: "Software & ML Intern",
    dates: "Jan – Apr 2026",
    points: [
      "Built a robotic picking system with 3D perception and cobot grasping to replace manual work",
      "Trained a segmentation model to 95% mAP50 on a custom 5,000+ image dataset and served it on Azure as a distributed service",
    ],
  },
]

const projects: Entry[] = [
  {
    name: "Prediction-market arbitrage",
    dates: "Oct 2026 – now",
    points: [
      "Real-time scanner across 10+ sportsbooks, Kalshi and Polymarket that de-vigs odds and flags arbitrage",
      "Calibrated fair prices against a full NFL season of settled outcomes to separate real edge from noise",
    ],
  },
  {
    name: "Limit order book & market making",
    dates: "Jan 2026 – now",
    points: [
      "Multi-threaded C++ matching engine with O(1) cancels, processing 100k+ orders/sec",
      "Inventory-skewing market maker that cut max drawdown 35% in high-volatility simulations",
      "Stat arb on mean-reverting equity pairs found with ADF cointegration tests",
      "Next-tick direction model built on order book imbalance and VWAP deviation",
    ],
  },
]

const earlier: Entry[] = [
  {
    name: "Robot Revolution",
    role: "Captain, lead programmer",
    dates: "2017 – 2025",
    points: [
      "Led a 6-person team to the VEX Robotics World Championship finals, top 2 of 20,000 teams",
      "Won a Worlds division and two New Jersey championships",
    ],
  },
  {
    name: "Hofstra University",
    role: "Research intern, Prof. Edward M. Segal",
    dates: "2024 – 2025",
    points: [
      "Wrote the motion control and G-code execution for a large-format 3D printer",
    ],
  },
  {
    name: "Millburn AI",
    role: "Software director",
    dates: "2021 – 2023",
    points: [
      "Only AI team picked for the VEX Worlds showcase",
      "Sped up on-robot vision 5x on a Jetson Nano",
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
