"use client"

import { useState } from "react"
import { ArrowUpRight, Github, Menu, X } from "lucide-react"

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background punk-hatch">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to work
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-8 lg:px-16">
        <a href="#top" className="flex items-center gap-3 no-underline">
          <span className="flex size-8 rotate-[-8deg] items-center justify-center border-2 border-foreground bg-primary font-mono text-xs font-bold text-primary-foreground shadow-[3px_3px_0_0_var(--accent)]">
            AA
          </span>
          <span className="font-mono text-sm font-bold uppercase tracking-[0.18em]">
            Amanuel<span className="text-primary">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary hover:text-accent"
          >
            Resume
            <ArrowUpRight className="about-resume-nudge size-3.5" aria-hidden />
          </a>
          <a
            href="https://github.com/manuel-spec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-foreground bg-accent px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground shadow-[3px_3px_0_0_var(--foreground)] hover:translate-x-px hover:translate-y-px"
          >
            <Github className="size-3.5" aria-hidden />
            GitHub
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center border-2 border-foreground bg-primary text-primary-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border px-8 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 font-mono text-sm uppercase tracking-[0.18em] text-primary"
                onClick={() => setOpen(false)}
              >
                Resume
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/manuel-spec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 font-mono text-sm uppercase tracking-[0.18em] text-primary"
                onClick={() => setOpen(false)}
              >
                <Github className="size-4" aria-hidden />
                github.com/manuel-spec
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
