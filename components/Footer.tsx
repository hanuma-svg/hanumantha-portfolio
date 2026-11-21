import * as React from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 text-xs text-zinc-500 dark:text-zinc-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="font-mono">
            &copy; 2026 Hanumantha L.
          </p>
          <p className="text-[11px] text-zinc-400 dark:text-zinc-600">
            Personal developer portfolio. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href="https://github.com/hanuma-svg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors underline-offset-4 hover:underline"
          >
            GitHub
          </a>
          <span className="text-zinc-300 dark:text-zinc-800" aria-hidden="true">&bull;</span>
          <a
            href="https://www.linkedin.com/in/hanumantha-l-2ba762333/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <span className="text-zinc-300 dark:text-zinc-800" aria-hidden="true">&bull;</span>
          <a
            href="#top"
            className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
