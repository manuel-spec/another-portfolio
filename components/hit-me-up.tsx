"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Mail, Send } from "lucide-react"

const CELL = 8

const DESKTOP: [number, number][] = [
  [3, 34],
  [3, 12],
  [39, 12],
]

const MOBILE: [number, number][] = [
  [2, 3],
  [18, 3],
  [18, 16],
]

type Dir = "r" | "l" | "u" | "d"

function snapPull(value: number, strength: number) {
  return Math.round((value / CELL) * strength)
}

function warpPath(
  base: [number, number][],
  pull: { x: number; y: number },
): [number, number][] {
  return base.map(([x, y], index) => {
    const t = index / Math.max(1, base.length - 1)
    const ease = Math.sin(t * Math.PI)
    return [
      x + snapPull(pull.x, 0.42 * ease),
      y + snapPull(pull.y, 0.34 * ease),
    ]
  })
}

function rasterize(points: [number, number][]) {
  const cells: { x: number; y: number }[] = []
  const seen = new Set<string>()

  const push = (x: number, y: number) => {
    const key = `${x},${y}`
    if (seen.has(key)) return
    seen.add(key)
    cells.push({ x, y })
  }

  for (let i = 0; i < points.length - 1; i++) {
    let [x, y] = points[i]
    const [tx, ty] = points[i + 1]
    push(x, y)
    while (x !== tx || y !== ty) {
      if (x !== tx) x += Math.sign(tx - x)
      else y += Math.sign(ty - y)
      push(x, y)
    }
  }

  return cells
}

function heading(from: { x: number; y: number }, to: { x: number; y: number }): Dir {
  if (Math.abs(to.x - from.x) >= Math.abs(to.y - from.y)) {
    return to.x >= from.x ? "r" : "l"
  }
  return to.y >= from.y ? "d" : "u"
}

function arrowCells(tip: { x: number; y: number }, dir: Dir) {
  const stamps: Record<Dir, [number, number][]> = {
    r: [
      [0, -2],
      [0, -1],
      [1, -1],
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [0, 1],
      [1, 1],
      [0, 2],
    ],
    l: [
      [0, -2],
      [-1, -1],
      [0, -1],
      [-3, 0],
      [-2, 0],
      [-1, 0],
      [0, 0],
      [-1, 1],
      [0, 1],
      [0, 2],
    ],
    d: [
      [-2, 0],
      [-1, 0],
      [-1, 1],
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 0],
      [1, 1],
      [2, 0],
    ],
    u: [
      [-2, 0],
      [-1, -1],
      [-1, 0],
      [0, -3],
      [0, -2],
      [0, -1],
      [0, 0],
      [1, -1],
      [1, 0],
      [2, 0],
    ],
  }

  return stamps[dir].map(([x, y]) => ({ x: tip.x + x, y: tip.y + y }))
}

export function HitMeUp() {
  const wrap = useRef<HTMLDivElement>(null)
  const [pull, setPull] = useState({ x: 0, y: 0 })
  const [hot, setHot] = useState(false)
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)")
    const sync = () => setCompact(media.matches)
    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [])

  const cells = useMemo(
    () => rasterize(warpPath(compact ? MOBILE : DESKTOP, pull)),
    [compact, pull],
  )

  const dir =
    cells.length > 1
      ? heading(cells[cells.length - 2], cells[cells.length - 1])
      : "r"
  const tip = cells[cells.length - 1] ?? { x: 0, y: 0 }
  const arrow = arrowCells(tip, dir)
  const start = cells[0] ?? { x: 2, y: 2 }

  return (
    <section id="contact" className="scroll-mt-20 overflow-hidden px-8 py-24 lg:px-16">
      <div
        ref={wrap}
        className={`arcade-board relative mx-auto max-w-6xl ${hot ? "arcade-hot" : ""}`}
        onMouseEnter={() => setHot(true)}
        onMouseLeave={() => {
          setHot(false)
          setPull({ x: 0, y: 0 })
        }}
        onMouseMove={(event) => {
          const box = wrap.current?.getBoundingClientRect()
          if (!box) return
          setPull({
            x: ((event.clientX - box.left) / box.width - 0.4) * 48,
            y: ((event.clientY - box.top) / box.height - 0.35) * 40,
          })
        }}
      >
        <svg
          className="pointer-events-none absolute -left-1 top-0 z-10 h-40 w-full max-w-md overflow-visible md:-left-4 md:h-[24rem] md:w-[min(100%,30rem)]"
          viewBox={compact ? "0 0 280 160" : "0 0 400 320"}
          fill="none"
          aria-hidden
        >
          {cells.map((cell, index) => (
            <rect
              key={`track-${cell.x}-${cell.y}-${index}`}
              x={cell.x * CELL + 2}
              y={cell.y * CELL + 2}
              width={CELL - 1}
              height={CELL - 1}
              className="fill-black"
            />
          ))}
          {cells.map((cell, index) => (
            <rect
              key={`lamp-${cell.x}-${cell.y}-${index}`}
              x={cell.x * CELL}
              y={cell.y * CELL}
              width={CELL - 2}
              height={CELL - 2}
              className="arcade-lamp"
              style={{ ["--i" as string]: index }}
            />
          ))}
          {arrow.map((cell, index) => (
            <rect
              key={`arrow-shadow-${index}`}
              x={cell.x * CELL + 2}
              y={cell.y * CELL + 2}
              width={CELL - 1}
              height={CELL - 1}
              className="fill-black"
            />
          ))}
          {arrow.map((cell, index) => (
            <rect
              key={`arrow-${index}`}
              x={cell.x * CELL}
              y={cell.y * CELL}
              width={CELL - 2}
              height={CELL - 2}
              className="arcade-arrow"
            />
          ))}
          <g
            transform={`translate(${start.x * CELL - 8}, ${start.y * CELL + (compact ? 18 : 22)})`}
          >
            <rect x="0" y="0" width="92" height="16" className="fill-black" />
            <rect x="-2" y="-2" width="92" height="16" className="fill-accent" />
            <text
              x="45"
              y="10"
              textAnchor="middle"
              className="arcade-credit fill-black font-mono text-[8px] font-black uppercase"
            >
              insert coin
            </text>
          </g>
        </svg>

        <div className="relative pt-32 md:pt-6 md:pl-[min(40%,21rem)]">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-primary">
            04  1up
          </p>
          <h2 className="hit-title text-5xl font-black uppercase leading-[0.85] tracking-tighter sm:text-7xl lg:text-8xl">
            Hit me up
          </h2>
          <p className="arcade-press mt-3 font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
            {hot ? "press" : "ready"}
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Skip the form. Ping me on Telegram or drop an email  I actually
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
