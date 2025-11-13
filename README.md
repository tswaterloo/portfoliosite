# Tanush Shah - Portfolio Website

Full-stack portfolio website built with Next.js, React, and TypeScript, showcasing projects in robotics, AI, and software engineering.

## 🚀 Tech Stack

- **React 18** - Component-based UI library
- **Next.js 15** - React framework with App Router and Server Actions
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **PostgreSQL (Neon)** - Serverless database
- **shadcn/ui** - Accessible component library

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── api/sql/           # PostgreSQL API endpoints
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── projects.tsx      # Project showcase
│   ├── experience.tsx    # Work experience timeline
│   ├── skills.tsx        # Technical skills
│   └── contact.tsx       # Contact form
├── lib/                   # Utilities
│   ├── db.ts             # Database client
│   └── utils.ts          # Helper functions
├── scripts/              # SQL migrations
└── public/               # Static assets
\`\`\`

## 🛠️ Setup

### Prerequisites
- Node.js 18+
- PostgreSQL database (Neon recommended)

### Environment Variables

Create `.env.local`:

\`\`\`env
DATABASE_URL=your_neon_connection_string
POSTGRES_URL=your_postgres_url
RESEND_API_KEY=your_resend_key  # For contact form emails
\`\`\`

### Installation

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Visit `http://localhost:3000`

## 🗄️ Database

PostgreSQL database with:
- **projects** - Portfolio projects
- **skills** - Technical skills by category
- **experience** - Work experience entries
- **contact_messages** - Contact form submissions

Run migrations in `/scripts` folder to set up schema and seed data.

## 📡 API Routes

- `GET /api/sql/projects` - Fetch all projects
- `GET /api/sql/skills` - Fetch all skills
- `GET /api/sql/experience` - Fetch all experience
- `POST /api/sql/contact` - Submit contact form

## ✨ Features

- Responsive mobile-first design
- Dark theme with modern aesthetics
- Database-driven dynamic content
- Contact form with email notifications
- Server-side rendering and API routes
- Deployed on Vercel with automatic deployments

## 👤 Author

**Tanush Shah**  
Electrical Engineering @ University of Waterloo

- Email: t67shah@uwaterloo.ca
- LinkedIn: [linkedin.com/in/tanush-shah17](https://linkedin.com/in/tanush-shah17)
- Website: [tanushshah.vercel.app](https://tanushshah.vercel.app)

---

Built with Next.js 15, React 18, and TypeScript
