"use client"

import { useRef, type ReactNode } from "react"
import {
  ExternalLink,
  FlaskConical,
  Github,
  GraduationCap,
  Hexagon,
  RadioTower,
  ShieldAlert,
  Truck,
} from "lucide-react"

function Tilt({
  children,
  className,
  max = 7,
}: {
  children: ReactNode
  className?: string
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  function reset() {
    const el = ref.current
    if (!el) return
    el.style.setProperty("--rx", "0deg")
    el.style.setProperty("--ry", "0deg")
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform:
          "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        transformStyle: "preserve-3d",
        transition: "transform 180ms ease-out",
      }}
      onMouseLeave={reset}
      onMouseMove={(event) => {
        const el = ref.current
        if (!el) return
        const box = el.getBoundingClientRect()
        const x = (event.clientX - box.left) / box.width
        const y = (event.clientY - box.top) / box.height
        el.style.setProperty("--rx", `${(0.5 - y) * max}deg`)
        el.style.setProperty("--ry", `${(x - 0.5) * max}deg`)
      }}
    >
      {children}
    </div>
  )
}

function Stamp() {
  return (
    <span className="inline-flex -rotate-3 items-center gap-2 border-2 border-foreground bg-accent px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent-foreground shadow-[2px_2px_0_0_var(--foreground)]">
      NDA
    </span>
  )
}

export function FeaturedProjects() {
  return (
    <section id="work" className="relative scroll-mt-20 overflow-hidden py-24 px-8 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-8 -z-10 -translate-x-1/2 font-mono text-[18vw] font-black leading-none text-primary/15 select-none"
      >
        ARCHIVE
      </div>

      <div className="mx-auto max-w-6xl">
        <header className="mb-14 flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-primary">
              03  Selected work
            </p>
            <h2 className="text-4xl font-black uppercase tracking-tighter lg:text-5xl">
              Built under lock.
            </h2>
          </div>
          <div className="max-w-md space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Most of this work sits inside client networks  education,
              telecom, labs, logistics. I can talk through the architecture
              and the constraints; I cannot drop the repos. Public experiments
              and code I can share live on GitHub.
            </p>
            <a
              href="https://github.com/manuel-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
            >
              <Github className="size-4" aria-hidden />
              github.com/manuel-spec
              <ExternalLink className="size-3.5" aria-hidden />
            </a>
          </div>
        </header>

        <div className="relative mb-4 overflow-hidden border-y border-border py-2">
          <div className="work-marquee flex w-max gap-10 font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground/70">
            {Array.from({ length: 2 }).map((_, loop) => (
              <span key={loop} className="flex gap-10">
                {[
                  "Private builds",
                  "github.com/manuel-spec",
                  "No public client repos",
                  "Lab systems",
                  "Field ops",
                  "Mobile first",
                  "Restricted access",
                ].map((item) => (
                  <span key={`${loop}-${item}`}>{item}</span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <article className="group relative mb-8 overflow-hidden border-2 border-foreground bg-card shadow-[8px_8px_0_0_var(--primary)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0_/_0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0_/_0.03)_1px,transparent_1px)] bg-[size:28px_28px]"
          />
          <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-between gap-10 p-8 lg:p-12">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">01 / 06</span>
                  <Stamp />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Restricted
                  </span>
                </div>
                <h3 className="text-5xl font-black uppercase tracking-tighter lg:text-7xl">
                  TADAS
                </h3>
                <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                  Tadas is a laboratory management system for teams that cannot
                  run the bench on spreadsheets. It tracks samples through the
                  lab, keeps inventory honest, and turns daily operations into
                  reports the people in charge can actually use. The live
                  platform is at tadasystem.net  accounts are provisioned, not
                  public sign-up. Source stays with the client.
                </p>
                <p className="font-mono text-xs text-primary/80">
                  full-stack web · sample tracking · inventory · reporting
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://tadasystem.net/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="punk-btn"
                >
                  <span className="work-caret inline-block h-4 w-[2px] bg-primary-foreground" />
                  open tadasystem.net
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
                <a
                  href="https://github.com/manuel-spec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary"
                >
                  <Github className="size-4" aria-hidden />
                  @manuel-spec
                </a>
              </div>
            </div>

            <div className="relative min-h-72 overflow-hidden border-t border-border bg-background/40 p-6 lg:border-l lg:border-t-0 lg:p-8">
              <div
                aria-hidden
                className="work-scan pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-transparent via-primary/25 to-transparent"
              />
              <div className="relative flex h-full flex-col justify-between font-mono">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <FlaskConical className="size-3.5 text-primary" />
                    Tadas console
                  </span>
                  <span className="text-primary">live · locked</span>
                </div>
                <div className="my-6 space-y-3">
                  {[
                    ["SMP queue", "idle"],
                    ["Inventory", "synced"],
                    ["Reports", "scheduled"],
                    ["Auth gate", "enforced"],
                  ].map(([label, state]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-border/80 py-2 text-sm"
                    >
                      <span className="text-muted-foreground">{label}</span>
                      <span className="text-foreground">{state}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  <span className="text-primary">&gt;</span> access granted only
                  to provisioned lab accounts
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          <DeviceCase
            index="02"
            title="Sammanware"
            kicker="E-learning"
            summary="A React Native classroom built so lessons are not trapped on a desktop. Video lectures, notes, and a Q&A thread live in one phone  students can ask, vote, and attach screenshots without leaving the course. The product is private; I can walk the stack and the UX decisions on a call."
            stack="React Native · mobile-first"
            src="/Screenshot 2025-09-09 133237.png"
            alt="Sammanware course player and Q&A on a phone"
            tilt={-9}
            icon={<GraduationCap className="size-4" />}
          />
          <DeviceCase
            index="03"
            title="Tower ops"
            kicker="Safaricom Ethiopia"
            summary="A field app for telecom tower resource management: network sites, site codes, and coordinates for crews who are not sitting in an office. Built with React Native and Supabase so inventory and location data stay in sync when the team is on site. Client-owned  demo on request."
            stack="React Native · Supabase"
            src="/Screenshot 2025-09-09 133839.png"
            alt="Telecom sites list with search and site cards on a phone"
            tilt={9}
            icon={<RadioTower className="size-4" />}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <SideCase
            index="04"
            title="Tater Delivery"
            summary="Flutter app for construction apparatus delivery  contractors order tools and materials, then track the drop. Built for a messy, physical supply chain instead of a clean demo store."
            stack="Flutter · logistics"
            icon={<Truck className="size-5" />}
          />
          <SideCase
            index="05"
            title="Scam desk"
            summary="A public reporting surface for online scams and fraud. People file what they saw; the backend keeps those reports queryable. React Router v7 on the front, Appwrite behind it."
            stack="React Router v7 · Appwrite"
            icon={<ShieldAlert className="size-5" />}
          />
          <SideCase
            index="06"
            title="Trade sims"
            summary="Three separate platforms for crypto trade simulation  sandboxes to test strategies and market behavior without putting real money on the line. Built to learn the rails, not to ship a casino."
            stack="Web3 · simulation"
            icon={<Hexagon className="size-5" />}
          />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Private work stays private. What I can publish  experiments,
            utilities, and public repos  is on GitHub.
          </p>
          <a
            href="https://github.com/manuel-spec"
            target="_blank"
            rel="noopener noreferrer"
            className="punk-btn shrink-0"
          >
            <Github className="size-4" aria-hidden />
            github.com/manuel-spec
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}

function DeviceCase({
  index,
  title,
  kicker,
  summary,
  stack,
  src,
  alt,
  tilt,
  icon,
}: {
  index: string
  title: string
  kicker: string
  summary: string
  stack: string
  src: string
  alt: string
  tilt: number
  icon: ReactNode
}) {
  return (
    <Tilt className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden border-2 border-foreground bg-card shadow-[6px_6px_0_0_var(--primary)]">
        <div className="relative flex min-h-80 items-end justify-center overflow-hidden bg-background punk-hatch pt-10">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.68_0.28_12_/_0.2),transparent_58%)]"
          />
          <div
            className={`relative z-10 mb-[-2.5rem] origin-bottom transition-transform duration-500 motion-safe:group-hover:-translate-y-3 motion-safe:group-hover:rotate-0 ${
              tilt < 0 ? "-rotate-[9deg]" : "rotate-[9deg]"
            }`}
          >
            <img
              src={src.replaceAll(" ", "%20")}
              alt={alt}
              className="h-72 w-auto max-w-[13.5rem] rounded-[1.6rem] border-2 border-foreground object-cover object-top shadow-[6px_6px_0_0_var(--accent)]"
            />
          </div>
        </div>
        <div className="space-y-3 p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">
              {icon}
              {kicker}
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">{index}</span>
          </div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
            <Stamp />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p>
          <p className="font-mono text-[11px] text-muted-foreground">{stack} · demo on request</p>
        </div>
      </article>
    </Tilt>
  )
}

function SideCase({
  index,
  title,
  summary,
  stack,
  icon,
}: {
  index: string
  title: string
  summary: string
  stack: string
  icon: ReactNode
}) {
  return (
    <article className="group relative overflow-hidden border-2 border-foreground bg-card p-6 shadow-[5px_5px_0_0_var(--accent)] transition-transform hover:translate-x-px hover:translate-y-px">
      <div
        aria-hidden
        className="absolute -right-4 -top-6 font-mono text-7xl font-bold text-foreground/[0.04] transition-colors group-hover:text-primary/10"
      >
        {index}
      </div>
      <div className="relative space-y-4">
        <div className="flex size-10 items-center justify-center border-2 border-foreground bg-primary text-primary-foreground">
          {icon}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p>
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {stack}
        </p>
      </div>
    </article>
  )
}
