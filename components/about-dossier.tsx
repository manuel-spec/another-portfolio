"use client"

import { useEffect, useRef, useState, type MouseEvent } from "react"

const verbs = ["design", "ship", "debug", "lock down"]

const domains = [
  {
    code: "EDU",
    label: "Education",
    note: "Sammanware   lectures, notes, and Q&A that live on a phone.",
  },
  {
    code: "TEL",
    label: "Telecom",
    note: "Tower ops   site codes and coordinates for crews in the field.",
  },
  {
    code: "LAB",
    label: "Labs",
    note: "Tadas   samples, inventory, and reports off the spreadsheet.",
  },
  {
    code: "LOG",
    label: "Logistics",
    note: "Tater Delivery   apparatus on a messy construction route.",
  },
  {
    code: "W3",
    label: "Web3",
    note: "Trade sims   paper markets. No live cash, no casino.",
  },
  {
    code: "OPS",
    label: "Ops",
    note: "Auth, data, and the boring parts that keep a product standing.",
  },
]

export function AboutDossier() {
  const plate = useRef<HTMLDivElement>(null)
  const [verb, setVerb] = useState(0)
  const [domain, setDomain] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduce.matches) return
    const tick = window.setInterval(() => {
      setVerb((index) => (index + 1) % verbs.length)
    }, 1800)
    return () => window.clearInterval(tick)
  }, [])

  function tilt(event: MouseEvent<HTMLDivElement>) {
    const el = plate.current
    if (!el) return
    const box = el.getBoundingClientRect()
    const x = (event.clientX - box.left) / box.width
    const y = (event.clientY - box.top) / box.height
    el.style.setProperty("--rx", `${(0.5 - y) * 10}deg`)
    el.style.setProperty("--ry", `${(x - 0.5) * 12}deg`)
  }

  function flatten() {
    const el = plate.current
    if (!el) return
    el.style.setProperty("--rx", "0deg")
    el.style.setProperty("--ry", "0deg")
  }

  const active = domains[domain]

  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden py-24 px-8 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-6 -z-10 -translate-x-1/2 font-mono text-[18vw] font-black leading-none text-primary/15 select-none"
      >
        FILE
      </div>

      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col gap-5 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-primary">
              00   Dossier
            </p>
            <h2 className="hit-title text-4xl font-black uppercase tracking-tighter lg:text-6xl">
              Not a résumé.
            </h2>
          </div>
          <div className="flex max-w-md flex-col gap-4">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground">
              I{" "}
              <span key={verbs[verb]} className="about-verb text-accent">
                {verbs[verb]}
              </span>{" "}
              products that have to work outside an office.
            </p>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-fit items-center gap-3"
            >
              <svg
                className="about-resume-arrow h-10 w-24 overflow-visible text-primary"
                viewBox="0 0 96 40"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 32 V12 H72"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path d="M64 4 L80 12 L64 20" fill="currentColor" />
              </svg>
              <span className="punk-btn">
                Resume
              </span>
            </a>
          </div>
        </header>

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div
            ref={plate}
            className="about-plate relative border-2 border-foreground bg-card p-4 shadow-[8px_8px_0_0_var(--accent)]"
            onMouseMove={tilt}
            onMouseLeave={flatten}
          >
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>ID · AA-00</span>
              <span className="arcade-credit text-accent">live</span>
            </div>

            <div className="relative mt-3 overflow-hidden border-2 border-foreground">
              <div
                aria-hidden
                className="svc-scan pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
              />
              <img
                src="/amanuel-cyberpunk-portrait.jpeg"
                alt="Illustrated portrait of Amanuel Asefa"
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_3px,oklch(0_0_0_/_0.18)_3px,oklch(0_0_0_/_0.18)_4px)]"
              />
            </div>

            <div className="mt-4 flex items-end justify-between gap-3">
              <div>
                <p className="text-2xl font-black uppercase tracking-tighter">
                  Amanuel
                  <span className="block text-primary">Asefa</span>
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Full-stack · mobile & web
                </p>
              </div>
              <span className="-rotate-3 border-2 border-foreground bg-primary px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-[2px_2px_0_0_var(--foreground)]">
                Open
              </span>
            </div>

            <div className="mt-4 flex gap-1" aria-hidden>
              {Array.from({ length: 18 }).map((_, index) => (
                <span
                  key={index}
                  className="h-6 bg-foreground"
                  style={{ width: index % 3 === 0 ? 6 : 2 }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col border-2 border-foreground bg-card shadow-[8px_8px_0_0_var(--primary)]">
            <div className="flex items-center justify-between border-b-2 border-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em]">
              <span className="text-muted-foreground">whoami</span>
              <span className="text-primary">amanuel@field</span>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl">
                I{" "}
                <span className="text-primary">design & develop</span> things
                people use on site   not just in a browser tab.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Full-stack across MERN, React Native, Flutter, and Laravel.
                Education, telecom, labs, logistics, and the occasional web3
                sandbox. Most of it sits on a client network. I can walk the
                architecture. I cannot drop the repo.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {domains.map((item, index) => {
                  const on = index === domain
                  return (
                    <button
                      key={item.code}
                      type="button"
                      onMouseEnter={() => setDomain(index)}
                      onFocus={() => setDomain(index)}
                      onClick={() => setDomain(index)}
                      className={`border-2 border-foreground px-3 py-3 text-left transition-transform hover:translate-x-px hover:translate-y-px ${
                        on
                          ? "bg-primary text-primary-foreground"
                          : "bg-background"
                      }`}
                    >
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                        {item.code}
                      </span>
                      <span className="mt-1 block text-sm font-black uppercase tracking-tight">
                        {item.label}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-5 border-2 border-foreground bg-background px-4 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                  readout · {active.code}
                </p>
                <p className="mt-2 text-sm leading-relaxed">{active.note}</p>
              </div>

              <div className="mt-auto grid grid-cols-3 gap-px border-2 border-foreground bg-foreground pt-6 font-mono text-[10px] uppercase tracking-[0.16em] sm:text-[11px]">
                {[
                  ["06", "archived builds"],
                  ["04", "field sites"],
                  ["NDA", "default lock"],
                ].map(([stat, label]) => (
                  <div key={label} className="bg-card px-3 py-3">
                    <p className="text-xl font-black tracking-tighter text-primary sm:text-2xl">
                      {stat}
                    </p>
                    <p className="mt-1 text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden border-y-2 border-foreground py-2">
          <div className="svc-marquee flex w-max gap-10 font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            {Array.from({ length: 2 }).map((_, loop) => (
              <span key={loop} className="flex gap-10">
                {[
                  "Classrooms",
                  "Tower sites",
                  "Labs",
                  "Delivery routes",
                  "MERN",
                  "React Native",
                  "Flutter",
                  "Laravel",
                ].map((item) => (
                  <span key={`${loop}-${item}`}>{item}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
