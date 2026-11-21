import * as React from 'react';

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 border-b border-zinc-200/70 dark:border-zinc-800/70">
      <div className="space-y-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium">
          Education
        </h2>

        <div className="p-6 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/30 dark:bg-zinc-900/10">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
            <div>
              <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-100">
                PES University
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Bachelor of Technology (B.Tech) — Computer Science &amp; Engineering
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              2024 &ndash; 2028
            </span>
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 gap-2">
            <span>Bengaluru, Karnataka, India</span>
            <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-500">
              Focus: Software Engineering, DBMS &amp; Systems
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
