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
      "Built the risk layer: leverage, exposure and drawdown limits backed by an automated kill switch",
      "Stress-tested 50+ strategies for overfitting, look-ahead bias and costs before any went live",
    ],
  },
  {
    name: "Petra Lab X",
    role: "Senior Engineering Intern",
    dates: "Sep – Dec 2026",
    points: [
      "Unified four production systems (ERP, portal, Outlook, SharePoint) into one typed graph",
      "Built the sync layer that keeps 100k+ records current across REST and Microsoft Graph",
      "Shipped LLM agents that can reconstruct the full history of any transaction",
    ],
  },
  {
    name: "Petra Lab X",
    role: "Software & ML Intern",
    dates: "Jan – Apr 2026",
    points: [
      "Built a robotic picking system with 3D perception and cobot grasping to replace manual work",
      "Trained a custom segmentation model to 95% mAP50 and deployed it as a distributed service on Azure",
    ],
  },
]

const projects: Entry[] = [
  {
    name: "Prediction-market arbitrage",
    dates: "Oct 2026 – now",
    points: [
      "Real-time scanner across 10+ sportsbooks, Kalshi and Polymarket that de-vigs odds and flags arbitrage",
      "Calibrated against a full NFL season of settled outcomes to separate real edge from noise",
    ],
  },
  {
    name: "Limit order book & market making",
    dates: "Jan 2026 – now",
    points: [
      "Multi-threaded C++ matching engine with O(1) cancels, processing 100k+ orders/sec",
      "Inventory-skewing market maker that cut max drawdown 35% in high-volatility simulations",
      "Stat arb strategy that finds and trades cointegrated equity pairs",
      "PyTorch model predicting next-tick direction from order book imbalance and VWAP deviation",
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
      "Also won a Worlds division and two New Jersey championships",
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
    points: ["Only AI team invited to the VEX Worlds showcase, with on-robot vision sped up 5x on a Jetson Nano"],
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
        I trade systematic strategies at StageRail Capital and build LLM agents at Petra Lab X. On the side I'm working
        on a C++ matching engine and a sports prediction-market arbitrage scanner. Before Waterloo, I captained a
        robotics team to the VEX World Championship finals.
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
