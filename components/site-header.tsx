"use client"

import { useState } from "react"
import { Github, Menu, X } from "lucide-react"

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to work
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-8 lg:px-16">
        <a href="#top" className="flex items-center gap-3 no-underline">
          <span className="flex size-8 items-center justify-center rounded-md border border-primary/40 bg-primary/10 font-mono text-xs font-semibold text-primary">
            AA
          </span>
          <span className="font-mono text-sm tracking-wide">
            Amanuel<span className="text-muted-foreground">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/manuel-spec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Github className="size-3.5" aria-hidden />
            GitHub
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
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
