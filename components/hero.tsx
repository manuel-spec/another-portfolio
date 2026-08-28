import { Github } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-8 py-16 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 hidden h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl lg:block"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-primary">
            01 — Full-stack · mobile & web
          </p>
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl lg:text-8xl">
            Amanuel
            <span className="block text-primary">Asefa</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            I design and ship products that have to work in the field — classrooms,
            tower sites, labs, and delivery routes. MERN, React Native, Flutter,
            and Laravel, with the boring parts (auth, data, ops) taken seriously.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            React Native · Flutter · MERN · Laravel
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-transform motion-safe:hover:-translate-y-0.5"
            >
              View work
            </a>
            <a
              href="https://github.com/manuel-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="size-4" aria-hidden />
              GitHub
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-4 rounded-full bg-primary/20 blur-2xl"
            />
            <img
              src="/amanuel-cyberpunk-portrait.jpeg"
              alt="Illustrated portrait of Amanuel Asefa"
              className="relative size-64 rounded-full object-cover ring-1 ring-primary/30 sm:size-80 lg:size-[22rem]"
            />
            <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Available for new builds
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
