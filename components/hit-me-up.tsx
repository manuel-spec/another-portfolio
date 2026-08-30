"use client"

import { useId, useRef, useState } from "react"
import { Mail, Send } from "lucide-react"

export function HitMeUp() {
  const wrap = useRef<HTMLDivElement>(null)
  const glowId = useId().replace(/:/g, "")
  const markerId = `${glowId}-arrow`
  const [pull, setPull] = useState({ x: 0, y: 0 })
  const [hot, setHot] = useState(false)

  const d = [
    `M 28 268`,
    `C ${56 + pull.x * 0.4} ${210 + pull.y * 0.3}, ${88 + pull.x} ${188 + pull.y}, 124 176`,
    `C ${178 + pull.x * 1.1} ${160 + pull.y}, ${210 + pull.x} ${92 + pull.y * 0.8}, 268 78`,
    `C ${312 + pull.x * 0.5} ${68 + pull.y * 0.4}, 338 96, 352 112`,
  ].join(" ")

  return (
    <section id="contact" className="scroll-mt-20 overflow-hidden px-8 py-24 lg:px-16">
      <div
        ref={wrap}
        className="relative mx-auto max-w-6xl"
        onMouseEnter={() => setHot(true)}
        onMouseLeave={() => {
          setHot(false)
          setPull({ x: 0, y: 0 })
        }}
        onMouseMove={(event) => {
          const box = wrap.current?.getBoundingClientRect()
          if (!box) return
          setPull({
            x: ((event.clientX - box.left) / box.width - 0.45) * 46,
            y: ((event.clientY - box.top) / box.height - 0.35) * 36,
          })
        }}
      >
        <svg
          className="pointer-events-none absolute -left-6 top-0 z-10 hidden h-[22rem] w-[min(100%,28rem)] overflow-visible md:block"
          viewBox="0 0 380 300"
          fill="none"
          aria-hidden
        >
          <defs>
            <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation={hot ? 4 : 2.2} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <marker
              id={markerId}
              markerWidth="12"
              markerHeight="12"
              refX="10"
              refY="4"
              orient="auto"
            >
              <path d="M0 0 L12 4 L0 8 Z" className="fill-primary" />
            </marker>
          </defs>
          <path
            d={d}
            className="hit-curl-track stroke-cyan-300/40"
            strokeWidth="6"
            strokeLinecap="round"
            filter={`url(#${glowId})`}
          />
          <path
            d={d}
            className={`hit-curl stroke-primary ${hot ? "hit-curl-hot" : ""}`}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            markerEnd={`url(#${markerId})`}
            filter={`url(#${glowId})`}
          />
          <text
            x="70"
            y="250"
            className="fill-accent font-mono text-[11px] uppercase"
            style={{ letterSpacing: "0.28em" }}
          >
            this way
          </text>
        </svg>

        <div className="relative md:pl-[min(38%,20rem)]">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-primary">
            04 — Signal
          </p>
          <h2 className="hit-title text-5xl font-black uppercase leading-[0.85] tracking-tighter sm:text-7xl lg:text-8xl">
            Hit me up
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Skip the form. Ping me on Telegram or drop an email — I actually
            read both.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href="https://t.me/aman_uel_as"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-foreground bg-card p-5 shadow-[5px_5px_0_0_var(--primary)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <p className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                <Send className="size-3.5" aria-hidden />
                Telegram
              </p>
              <p className="font-mono text-xl font-bold text-foreground group-hover:text-primary">
                @aman_uel_as
              </p>
            </a>
            <a
              href="mailto:amanuelvac@gmail.com"
              className="group border-2 border-foreground bg-card p-5 shadow-[5px_5px_0_0_var(--accent)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <p className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                <Mail className="size-3.5" aria-hidden />
                Email
              </p>
              <p className="break-all font-mono text-lg font-bold text-foreground group-hover:text-primary">
                amanuelvac@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
