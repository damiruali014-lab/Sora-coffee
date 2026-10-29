import { useRef, useState } from 'react'
import { tenge } from '../config'
import { WithTenge } from './Tenge'
import { MENU } from '../data/menu'

/** A rosetta poured into a cup, drawn in on hover (each path is normalised to length 1). */
function LatteSwirl() {
  const paths = [
    'M50 6a44 44 0 1 1 0 88a44 44 0 1 1 0-88',
    'M50 82V24',
    'M37 30c0-7 13-9 13 0c0-9 13-7 13 0c0 5-7 9-13 12c-6-3-13-7-13-12',
    'M31 44c5 9 33 9 38 0',
    'M28 55c6 11 38 11 44 0',
    'M30 66c6 10 34 10 40 0',
    'M36 76c5 6 23 6 28 0',
  ]
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="swirl pointer-events-none absolute -right-6 -bottom-8 h-36 w-36 text-crema/45"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} pathLength={1} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      ))}
    </svg>
  )
}

export function Menu() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  const focusTab = (i: number) => {
    const next = (i + MENU.length) % MENU.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: MENU.length - 1 }
    if (e.key in keys) {
      e.preventDefault()
      focusTab(keys[e.key])
    }
  }

  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-sky-soft py-20 sm:py-28">
      <div className="section">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Menu</p>
            <h2 id="menu-title" className="mt-4 text-3xl font-bold sm:text-[2.6rem]">
              Poured slow, priced fair.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Menu categories"
            onKeyDown={onKeyDown}
            className="flex w-full gap-1 overflow-x-auto rounded-full bg-milk p-1.5 ring-1 ring-sky-deep/60 md:w-auto"
          >
            {MENU.map((tab, i) => (
              <button
                key={tab.id}
                ref={(el) => {
                  tabs.current[i] = el
                }}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={active === i}
                aria-controls={`panel-${tab.id}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                className={`flex-1 rounded-full px-5 py-2.5 text-[0.95rem] font-semibold whitespace-nowrap transition-colors duration-300 md:flex-none ${
                  active === i ? 'bg-espresso text-milk' : 'text-espresso-soft hover:text-espresso'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {MENU.map((tab, i) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={active !== i}
            tabIndex={0}
            className="mt-10 rounded-[2rem] focus-visible:outline-offset-8"
          >
            <ul className="grid gap-3 md:grid-cols-2">
              {tab.items.map((item) => (
                <li
                  key={item.name}
                  className="menu-item relative overflow-hidden rounded-[1.5rem] bg-milk p-6 ring-1 ring-sky-deep/40 transition-shadow duration-500 hover:shadow-[0_20px_40px_-28px_rgb(43_29_22/0.45)] sm:p-7"
                >
                  <LatteSwirl />
                  <div className="relative flex items-baseline gap-3">
                    <h3 className="font-sans text-lg font-semibold tracking-normal">{item.name}</h3>
                    {item.tag && (
                      <span className="rounded-full bg-sky px-2.5 py-0.5 text-[0.72rem] font-semibold tracking-wide text-cobalt-deep uppercase">
                        {item.tag}
                      </span>
                    )}
                    <span aria-hidden="true" className="mb-1 flex-1 border-b-2 border-dotted border-espresso/15" />
                    <span className="font-display text-[1.02rem] font-semibold whitespace-nowrap"><WithTenge text={tenge(item.price)} />
                    </span>
                  </div>
                  <p className="relative mt-2 max-w-[28rem] pr-10 text-espresso-soft">{item.description}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-espresso-soft">
              <WithTenge text={tab.note} />
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
