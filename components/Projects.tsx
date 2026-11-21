import * as React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  tagline: string;
  category: string;
  description: string;
  technicalDetails: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: 'PESUFY ClubMatch',
    tagline: 'Smart College Club & Event Recommendation Platform',
    category: 'Full-Stack & DBMS Project',
    description:
      'A full-stack campus discovery and event management platform built for PES University EC Campus. Centralizes club discovery, delivers personalized club and event recommendations based on student interest profiles, and prevents seat reservation race conditions.',
    technicalDetails: [
      'Implemented semantic search using PostgreSQL and the pgvector extension (768-dimensional embeddings) with HNSW cosine similarity indexing.',
      'Designed a 15-table normalized schema (3NF) with ACID transactional integrity, enforcing row-level locking (SELECT ... FOR UPDATE) on seat allocations.',
      'Developed 3 scoped role portals (Student, Club Coordinator, Admin) with Next.js App Router, Prisma ORM, NextAuth credentials/JWT, and trigger-driven audit logging.',
    ],
    stack: [
      'Next.js 15',
      'TypeScript',
      'PostgreSQL',
      'pgvector',
      'Prisma ORM',
      'Tailwind CSS',
      'Auth.js',
    ],
    githubUrl: 'https://github.com/hanuma-svg/CLUB_MATCH',
  },
  {
    title: 'SneakerDrop',
    tagline: 'Editorial Footwear Showcase & Release Desk',
    category: 'Production Web Application',
    description:
      'A curated sneaker release desk featuring dynamic product detail routes, product-specific waitlist registrations with duplicate prevention, and a protected administrative workspace.',
    technicalDetails: [
      'Configured Supabase PostgreSQL with strict Row Level Security (RLS) policies, PostgREST queries, and database RPC functions for transactional waitlist verification.',
      'Protected admin portal with database-level role verification, real-time inventory management, and ON DELETE RESTRICT relational constraints.',
      'Built with Next.js 15 App Router, strict TypeScript schemas via Zod, and responsive layouts respecting user reduced-motion preferences.',
    ],
    stack: [
      'Next.js 15',
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Tailwind CSS',
      'Framer Motion',
      'Zod',
    ],
    githubUrl: 'https://github.com/hanuma-svg/SneakerDrop',
    liveUrl: 'https://sneakerdrop-pi.vercel.app/',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-zinc-200/70 dark:border-zinc-800/70">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium">
            Projects
          </h2>
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
            02 Selected
          </span>
        </div>

        <div className="space-y-10 sm:space-y-12">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group p-6 sm:p-7 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/30 dark:bg-zinc-900/10 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 sm:gap-4">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                      {project.tagline}
                    </p>
                  </div>
                  <span className="self-start sm:self-auto text-[11px] font-mono px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-900">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {project.description}
                </p>

                {/* Technical Details */}
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-medium">
                    Technical Architecture
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400 list-disc list-outside pl-4 marker:text-zinc-300 dark:marker:text-zinc-700">
                    {project.technicalDetails.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded border border-zinc-200/70 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="pt-4 flex items-center gap-5 text-xs font-mono border-t border-zinc-200/60 dark:border-zinc-800/60">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    <span>View on GitHub</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors font-medium underline-offset-4 hover:underline"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
