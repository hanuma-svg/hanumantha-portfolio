import * as React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-zinc-200/70 dark:border-zinc-800/70">
      <div className="flex flex-col gap-8">
        {/* Availability Status */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
            Open to internship opportunities
          </span>
        </div>

        {/* Identity & Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 font-sans">
            Hanumantha L.
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
            Computer Science Student &bull; PES University, Bengaluru
          </p>
        </div>

        {/* Introduction & Secondary Line */}
        <div className="space-y-4 max-w-2xl">
          <p className="text-base sm:text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 font-normal">
            I&apos;m Hanumantha, a Computer Science student interested in software engineering, AI, and building practical things with technology.
          </p>
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 font-normal">
            Currently exploring AI, Software Engineering &amp; Systems.
          </p>
        </div>

        {/* Meta & Social Row */}
        <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <span className="text-zinc-700 dark:text-zinc-300">
            Bengaluru, India
          </span>

          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700" aria-hidden="true">&bull;</span>

          <a
            href="https://github.com/hanuma-svg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700" aria-hidden="true">&bull;</span>

          <a
            href="https://www.linkedin.com/in/hanumantha-l-2ba762333/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700" aria-hidden="true">&bull;</span>

          <a
            href="mailto:hanumanthayash180@gmail.com"
            className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            <span>Email</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
