import * as React from 'react';

interface SkillGroup {
  category: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: ['TypeScript', 'JavaScript', 'SQL (PostgreSQL & PL/pgSQL)', 'PowerShell / Shell'],
  },
  {
    category: 'Frameworks & Development',
    skills: ['Next.js 15 (App Router)', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Zod Validation', 'Node.js'],
  },
  {
    category: 'Databases & Storage',
    skills: ['PostgreSQL', 'pgvector (Vector Search / HNSW)', 'Prisma ORM', 'Supabase (Auth & RLS)', 'ACID Transactions'],
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git & GitHub', 'Vercel Deployment', 'Vitest Testing', 'Auth.js / NextAuth', 'pnpm / npm', 'REST APIs'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-zinc-200/70 dark:border-zinc-800/70">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium">
            Skills &amp; Technologies
          </h2>
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
            Repository-Verified
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/30 dark:bg-zinc-900/10 space-y-3"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-medium">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
