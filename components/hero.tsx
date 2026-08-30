import { Github } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-8 py-16 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 hidden h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-primary/25 blur-3xl lg:block"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-6 inline-block -rotate-2 border-2 border-foreground bg-accent px-2 py-1 font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground shadow-[3px_3px_0_0_var(--primary)]">
            01  Full-stack · mobile & web
          </p>
          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter sm:text-6xl lg:text-8xl">
            Amanuel
            <span className="block text-primary">Asefa</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            I design and ship products that have to work in the field  classrooms,
            tower sites, labs, and delivery routes. MERN, React Native, Flutter,
            and Laravel, with the boring parts (auth, data, ops) taken seriously.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            React Native · Flutter · MERN · Laravel
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="punk-btn">
              View work
            </a>
            <a
              href="https://github.com/manuel-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="punk-btn-ghost"
            >
              <Github className="size-4" aria-hidden />
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -right-3 -top-3 z-10 rotate-[12deg] border-2 border-foreground bg-accent px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-accent-foreground"
            >
              Live
            </div>
            <img
              src="/amanuel-cyberpunk-portrait.jpeg"
              alt="Illustrated portrait of Amanuel Asefa"
              className="relative size-64 object-cover border-2 border-foreground shadow-[8px_8px_0_0_var(--primary)] sm:size-80 lg:size-[22rem]"
              style={{ borderRadius: "60px 20px 80px 30px" }}
            />
          </div>
          <p className="mt-5 -rotate-1 border-2 border-foreground bg-primary px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
            Available for new builds
          </p>
        </div>
      </div>
    </section>
  )
}
