import * as React from 'react';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 border-b border-zinc-200/70 dark:border-zinc-800/70">
      <div className="space-y-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium">
          About
        </h2>

        <div className="space-y-4 max-w-2xl text-sm sm:text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            I am an undergraduate Computer Science &amp; Engineering student at PES University in Bengaluru (2024–2028). My work is focused on understanding software systems from the ground up and engineering reliable, thoughtfully crafted applications.
          </p>

          <p>
            My technical interests center on software engineering, AI, and systems programming. Rather than treating tools as black boxes, I focus on core architecture—such as relational modeling, ACID guarantees with row-level locks, and semantic search using PostgreSQL and pgvector embeddings.
          </p>

          <p>
            I value code clarity, strict type safety with TypeScript, and understated, functional design. Outside of coursework, I spend my time exploring database internals, systems architecture, and building software that addresses real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}
