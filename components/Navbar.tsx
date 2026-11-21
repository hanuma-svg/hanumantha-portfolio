'use client';

import * as React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState<string>('');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      const scrollY = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-[#fcfcfc]/90 dark:bg-[#09090b]/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="#top"
          className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
        >
          Hanumantha L.
        </Link>

        <div className="flex items-center gap-5 sm:gap-6">
          <nav className="flex items-center gap-4 sm:gap-6 text-xs font-mono">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-zinc-950 dark:text-white font-medium underline underline-offset-4'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="w-px h-3.5 bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
