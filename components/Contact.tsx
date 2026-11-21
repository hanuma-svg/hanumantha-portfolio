'use client';

import * as React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedPhone, setCopiedPhone] = React.useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const contactItems = [
    {
      id: 'email',
      label: 'Email',
      value: 'hanumanthayash180@gmail.com',
      href: 'mailto:hanumanthayash180@gmail.com',
      icon: Mail,
      isCopyable: true,
      copied: copiedEmail,
      type: 'email' as const,
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '+91 9353916267',
      href: 'tel:+919353916267',
      icon: Phone,
      isCopyable: true,
      copied: copiedPhone,
      type: 'phone' as const,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/hanuma-svg',
      href: 'https://github.com/hanuma-svg',
      icon: Github,
      isExternal: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/hanumantha-l-2ba762333',
      href: 'https://www.linkedin.com/in/hanumantha-l-2ba762333/',
      icon: Linkedin,
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-zinc-200/70 dark:border-zinc-800/70">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Let&apos;s connect.
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
            I am open to software engineering internship opportunities, technical collaborations, and discussions around systems &amp; AI. Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {contactItems.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/30 dark:bg-zinc-900/10 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 text-zinc-600 dark:text-zinc-400 shrink-0">
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:underline truncate block"
                  >
                    {item.value}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                {item.isCopyable && (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(item.value, item.type!)}
                    aria-label={`Copy ${item.label}`}
                    title={`Copy ${item.label}`}
                    className="p-1.5 rounded text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    {item.copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
                <a
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={`Open ${item.label}`}
                  className="p-1.5 rounded text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
