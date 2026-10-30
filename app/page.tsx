type Entry = {
  name: string
  role?: string
  dates: string
  points: string[]
  links?: { label: string; href: string }[]
}

const work: Entry[] = [
  {
    name: "StageRail Capital",
    role: "Quantitative Trader",
    dates: "Sep 2026 – now",
    points: [
      "Run $100K of private capital across systematic equity and futures strategies.",
      "Rebuilt the research stack into a walk-forward backtesting and paper-to-live promotion pipeline on AWS.",
      "Hard limits on leverage, exposure and drawdown, enforced by an automated kill switch.",
      "Stress-tested 50+ strategies for look-ahead bias, overfitting and costs. Only out-of-sample survivors go live.",
    ],
  },
  {
    name: "Petra Lab X",
    role: "Senior Engineering Intern",
    dates: "Sep – Dec 2026",
    points: [
      "Designed a typed graph ontology that unifies four production systems: ERP, portal, Outlook and SharePoint.",
      "Built incremental REST and Microsoft Graph ingestion with idempotent sync, keeping 100k+ records current.",
      "Shipped LLM agents (tool calling, graph retrieval) that reconstruct the full history of any transaction.",
    ],
  },
  {
    name: "Petra Lab X",
    role: "Software & ML Intern",
    dates: "Jan – Apr 2026",
    points: [
      "Built a robotic picking pipeline (point clouds, pose estimation, cobot grasping) to replace manual work.",
      "Labeled a 5,000+ image dataset and trained YOLOv8 instance segmentation to 95% mAP50.",
      "Deployed inference as a distributed async service on Azure with FastAPI, Celery, Redis and Docker.",
    ],
  },
]

const projects: Entry[] = [
  {
    name: "Prediction-market arbitrage",
    dates: "Oct 2026 – now",
    points: [
      "Real-time scanner over 10+ sportsbooks, Kalshi and Polymarket that de-vigs odds and flags arbitrage.",
      "Calibrated fair prices against settled outcomes over a full NFL season to separate edge from noise.",
    ],
  },
  {
    name: "Limit order book & market making",
    dates: "Jan 2026 – now",
    points: [
      "Multi-threaded C++ matching engine with O(1) cancellation, handling 100k+ orders/sec.",
      "Inventory-skewing market maker that cut max drawdown 35% in simulated high-volatility regimes.",
      "Pairs trading on equities, using ADF cointegration tests to find mean-reverting pairs.",
      "PyTorch model for next-tick direction from order book features like imbalance and VWAP deviation.",
    ],
  },
]

const earlier: Entry[] = [
  {
    name: "Robot Revolution",
    role: "Captain, lead programmer",
    dates: "2017 – 2025",
    points: [
      "VEX Robotics World Championship finalist, top 2 of 20,000 teams. Also a Worlds division champion and 2x New Jersey champion.",
      "Wrote the drive and autonomous code in C++. Five award-winning engineering notebooks.",
    ],
    links: [{ label: "Engineering notebook", href: "https://bit.ly/46tg7gQ" }],
  },
  {
    name: "Hofstra University",
    role: "Research intern, Prof. Edward M. Segal",
    dates: "2024 – 2025",
    points: ["Designed and programmed a modular large-format gantry 3D printer, including motion control and G-code execution."],
    links: [{ label: "Research showcase", href: "https://bit.ly/48rf9Ej" }],
  },
  {
    name: "Millburn AI",
    role: "Software director",
    dates: "2021 – 2023",
    points: [
      "Only AI team picked for the VEX Worlds showcase. Ran YOLOv5 on a Jetson Nano and took it from 1.5 to 8 FPS with TensorRT.",
    ],
    links: [
      { label: "Team site", href: "https://bit.ly/3KyGHh4" },
      {
        label: "Season reveal",
        href: "https://drive.google.com/file/d/1EV52fv9Jz3QZ3ZjrAwzmMLWUji5pTvyy/view?usp=sharing",
      },
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
          {e.links && (
            <div className="entry-links">
              {e.links.map((l) => (
                <a key={l.href + l.label} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          )}
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
        I trade systematic strategies at StageRail Capital and build data and ML systems at Petra Lab X. Most of my
        side projects are about market microstructure and prediction markets.
      </p>
      <p>
        Before Waterloo I spent eight years in competitive robotics, finishing as a world finalist. I placed 5th of 86
        in the Waterloo Quant Club trading tournament, and I play a lot of poker and Catan.
      </p>

      <div className="links">
        <a href="mailto:t67shah@uwaterloo.ca">Email</a>
        <a href="https://linkedin.com/in/tanush-shah17">LinkedIn</a>
      </div>

      <Section title="Work" entries={work} />
      <Section title="Projects" entries={projects} />
      <Section title="Earlier" entries={earlier} />
    </main>
  )
}
