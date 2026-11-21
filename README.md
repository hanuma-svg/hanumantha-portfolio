# Hanumantha L. — Personal Developer Portfolio

> Personal developer portfolio for **Hanumantha L.**, Computer Science & Engineering undergraduate student at **PES University, Bengaluru** (Class of 2028).
> Minimalist, timeless, and typography-focused portfolio designed with high precision, generous whitespace, and restrained interactions.

---

## 1. Overview & Design Philosophy

This portfolio reflects an independent developer aesthetic inspired by clean typography, calm layouts, and intentional spacing.

### Core Principles
- **Minimalist & Purposeful:** Zero unnecessary ornaments, floating shapes, fake statistics, or SaaS template tropes. Every line and element serves a clear informational or navigational purpose.
- **Typography-First:** Powered by the **Geist** font family (`GeistSans` and `GeistMono`), delivering crisp readability in both dark and light modes.
- **Calm & Fast:** Restrained interactions, zero layout shifts, accessible contrast, and smooth theme switching without flashing. Respects the user's `prefers-reduced-motion` settings.
- **Evidence-Backed Content:** All project descriptions, database architectures, and listed skills are verified against actual GitHub repository implementations.

---

## 2. Technology Stack

- **Framework:** Next.js 15 (App Router, Server Components)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS with custom theme variables
- **Typography:** Geist & Geist Mono
- **Theming:** `next-themes` (localStorage persistence + system scheme detection, flicker-free)
- **Icons:** `lucide-react` (used sparingly for functional interactions)
- **Deployment:** Vercel

---

## 3. Featured Projects

### 1. PESUFY ClubMatch
- **Repository:** [github.com/hanuma-svg/CLUB_MATCH](https://github.com/hanuma-svg/CLUB_MATCH)
- **Focus:** College club discovery, personalized semantic recommendations, and event seat booking.
- **Architecture Highlights:**
  - Semantic vector search powered by PostgreSQL and the `pgvector` extension (`vector(768)` embeddings) with HNSW cosine distance indexing (`vector_cosine_ops`).
  - 15-table normalized relational schema (3NF) with ACID seat reservations using row-level locking (`SELECT ... FOR UPDATE`).
  - 3 scoped role portals (Student, Club Coordinator, Admin) with automated trigger-based audit logging and Prisma ORM.

### 2. SneakerDrop
- **Repository:** [github.com/hanuma-svg/SneakerDrop](https://github.com/hanuma-svg/SneakerDrop)
- **Live Demo:** [sneakerdrop-pi.vercel.app](https://sneakerdrop-pi.vercel.app)
- **Focus:** Editorial streetwear showcase with dynamic product detail pages, waitlist subscriptions, and an authenticated admin workspace.
- **Architecture Highlights:**
  - Supabase PostgreSQL integration with Row Level Security (RLS) policies and database RPC functions for duplicate-protected waitlist registrations.
  - Relational integrity with `ON DELETE RESTRICT` constraints to prevent accidental loss of subscriber records.
  - Strict TypeScript schema validation with Zod and responsive, reduced-motion-aware interface design.

---

## 4. Local Development

### Prerequisites
- **Node.js:** 20.x or newer
- **npm** or **pnpm**

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hanuma-svg/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## 5. Verification Commands

Run the following checks to verify code health:

```bash
# Type-check TypeScript codebase
npm run typecheck

# Run Next.js linter
npm run lint

# Build production bundle
npm run build
```

---

## 6. Deployment to Vercel

This portfolio is prepared for zero-configuration deployment to [Vercel](https://vercel.com).

### Preferred Domain
- **Target URL:** `hanumantha.vercel.app` (or `hanumantha-l.vercel.app`)

### Deploying via Vercel Dashboard
1. Push your repository to GitHub: `https://github.com/hanuma-svg/portfolio`.
2. Navigate to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository (`portfolio`).
4. Keep the default build settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
5. Under **Project Settings > Domains**, assign `hanumantha.vercel.app`.
6. Click **Deploy**.

### Deploying via Vercel CLI
```bash
npx vercel
# Follow the interactive prompts to link and deploy to production:
npx vercel --prod
```

---

## 7. Contact Information

- **Name:** Hanumantha L.
- **Education:** B.Tech, Computer Science & Engineering — PES University, Bengaluru (2024–2028)
- **Location:** Bengaluru, India
- **Email:** [hanumanthayash180@gmail.com](mailto:hanumanthayash180@gmail.com)
- **Phone:** [+91 9353916267](tel:+919353916267)
- **GitHub:** [github.com/hanuma-svg](https://github.com/hanuma-svg)
- **LinkedIn:** [linkedin.com/in/hanumantha-l-2ba762333](https://www.linkedin.com/in/hanumantha-l-2ba762333/)
- **Availability:** Open to internship opportunities
