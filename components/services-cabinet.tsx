"use client"

import { useEffect, useState } from "react"

const stages = [
  {
    id: "01",
    code: "MOB",
    title: "Field mobile",
    lead: "Apps that have to work in a classroom, on a tower site, or in a truck   not just on a demo Wi-Fi.",
    stack: ["React Native", "Flutter", "Supabase"],
    runs: ["Sammanware", "Tower ops", "Tater Delivery"],
    lines: [
      ["device", "phone · field"],
      ["sync", "queued"],
      ["auth", "session live"],
      ["gps", "optional"],
    ],
  },
  {
    id: "02",
    code: "WEB",
    title: "Full-stack web",
    lead: "MERN and Laravel when the product needs a real backend   auth, data, and the boring ops that keep it up.",
    stack: ["MERN", "Laravel", "REST"],
    runs: ["Tadas", "Client consoles"],
    lines: [
      ["gate", "enforced"],
      ["db", "synced"],
      ["jobs", "scheduled"],
      ["reports", "ready"],
    ],
  },
  {
    id: "03",
    code: "OPS",
    title: "Ops systems",
    lead: "Resource, lab, and learning tools for teams who cannot run the day on spreadsheets.",
    stack: ["inventory", "tracking", "reporting"],
    runs: ["Tadas", "Tower ops", "Sammanware"],
    lines: [
      ["queue", "idle"],
      ["stock", "honest"],
      ["sites", "mapped"],
      ["lessons", "on device"],
    ],
  },
  {
    id: "04",
    code: "W3",
    title: "Web3 sandboxes",
    lead: "Trade simulations to learn the rails   sandboxes, not a casino.",
    stack: ["Web3", "simulation", "Appwrite"],
    runs: ["Trade sims"],
    lines: [
      ["market", "simulated"],
      ["wallet", "paper"],
      ["risk", "contained"],
      ["live cash", "off"],
    ],
  },
  {
    id: "05",
    code: "UI",
    title: "Interfaces",
    lead: "Sharp, usable surfaces for people who are busy   stamps, contrast, and no mystery meat.",
    stack: ["React", "Flutter", "design-in-code"],
    runs: ["Every build"],
    lines: [
      ["contrast", "high"],
      ["type", "loud"],
      ["motion", "stepped"],
      ["chrome", "minimal"],
    ],
  },
]

export function ServicesCabinet() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const stage = stages[active]

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduce.matches || paused) return
    const tick = window.setInterval(() => {
      setActive((index) => (index + 1) % stages.length)
    }, 4200)
    return () => window.clearInterval(tick)
  }, [paused])

  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden py-24 px-8 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-8 -z-10 -translate-x-1/2 font-mono text-[16vw] font-black leading-none text-primary/15 select-none"
      >
        CABINET
      </div>

      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-5 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-primary">
              02   Cabinet
            </p>
            <h2 className="text-4xl font-black uppercase tracking-tighter lg:text-5xl">
              What I take on.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Attract mode cycles the stages. Hover or tap one to lock it.
          </p>
        </header>

        <div className="relative mb-8 overflow-hidden border-y-2 border-foreground bg-card py-2">
          <div className="svc-marquee flex w-max gap-10 font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            {Array.from({ length: 2 }).map((_, loop) => (
              <span key={loop} className="flex gap-10">
                {[
                  "Mobile",
                  "Full-stack",
                  "Labs",
                  "Telecom",
                  "Logistics",
                  "Classrooms",
                  "Web3 sims",
                  "Field ops",
                ].map((item) => (
                  <span key={`${loop}-${item}`}>{item}</span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <div
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <ol className="flex flex-col border-2 border-foreground bg-card">
            {stages.map((item, index) => {
              const on = index === active
              return (
                <li key={item.id} className="border-b-2 border-foreground last:border-b-0">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors ${
                      on
                        ? "bg-primary text-primary-foreground"
                        : "bg-transparent hover:bg-secondary"
                    }`}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-70">
                        {item.id}
                      </span>
                      <span className="text-lg font-black uppercase tracking-tight sm:text-xl">
                        {item.title}
                      </span>
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                      {item.code}
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>

          <div className="relative overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0_0_var(--primary)]">
            <div
              aria-hidden
              className="svc-scan pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-transparent via-primary/25 to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0_/_0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0_/_0.04)_1px,transparent_1px)] bg-[size:24px_24px]"
            />

            <div className="relative flex min-h-[28rem] flex-col p-6 sm:p-8">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>
                  Stage {stage.id} / {stages.length.toString().padStart(2, "0")}
                </span>
                <span className={paused ? "text-accent" : "text-primary"}>
                  {paused ? "locked" : "attract"}
                </span>
              </div>

              <p className="mt-8 font-mono text-6xl font-black uppercase leading-none tracking-tighter text-primary/25">
                {stage.code}
              </p>
              <h3 className="mt-2 text-4xl font-black uppercase tracking-tighter">
                {stage.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                {stage.lead}
              </p>

              <dl className="mt-6 space-y-2 font-mono text-sm">
                {stage.lines.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-border py-2"
                  >
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                {stage.stack.map((chip) => (
                  <span
                    key={chip}
                    className="border-2 border-foreground bg-background px-2 py-1 font-mono text-[11px] uppercase tracking-wider"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <p className="mt-auto pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                ran on · {stage.runs.join(" · ")}
              </p>
            </div>

            <div className="relative h-1.5 bg-background">
              <div
                key={`${active}-${paused}`}
                className={`h-full bg-accent ${paused ? "" : "svc-timer"}`}
                style={paused ? { width: `${((active + 1) / stages.length) * 100}%` } : undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
