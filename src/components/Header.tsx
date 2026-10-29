import { useEffect, useState } from 'react'
import { whatsappLink } from '../config'
import { useOpenStatus } from '../hooks/useOpenStatus'
import { ChatIcon } from './icons'
import { Logo } from './Logo'

const LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#visit', label: 'Visit' },
  { href: '#reviews', label: 'Reviews' },
]

export function OpenPill({ className = '' }: { className?: string }) {
  const status = useOpenStatus()
  return (
    <span
      className={`inline-flex h-8 items-center gap-2 rounded-full bg-milk/80 px-3 text-[0.8rem] font-semibold whitespace-nowrap ring-1 ring-espresso/10 backdrop-blur ${className}`}
      aria-live="polite"
    >
      {status ? (
        <>
          <span
            className={`h-2 w-2 rounded-full ${status.open ? 'live-dot bg-cobalt' : 'bg-espresso/35'}`}
            aria-hidden="true"
          />
          <span>{status.open ? 'Open now' : 'Closed'}</span>
          <span className="hidden font-normal text-espresso-soft xl:inline">· {status.detail}</span>
          <span className="sr-only"> (Almaty time, {status.detail})</span>
        </>
      ) : (
        <span className="invisible">Open now</span>
      )}
    </span>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-500 ${
        scrolled || open ? 'bg-milk/85 shadow-[0_1px_0_rgb(43_29_22/0.08)] backdrop-blur-xl' : ''
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-espresso focus:px-4 focus:py-2 focus:text-milk">
        Skip to content
      </a>
      <div className="section flex h-[4.5rem] items-center gap-3">
        <a href="#top" className="shrink-0" aria-label="Sora Coffee, back to top">
          <Logo className="h-9 w-auto sm:h-10" />
        </a>

        <nav aria-label="Main" className="ml-6 hidden lg:block">
          <ul className="flex items-center gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition-colors hover:bg-espresso/5">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <OpenPill />
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-primary hidden !py-2.5 md:inline-flex">
            <ChatIcon className="h-[18px] w-[18px]" />
            Order on WhatsApp
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-espresso/15 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-[18px]" aria-hidden="true">
              <span className={`absolute left-0 h-[2px] w-full rounded bg-espresso transition-transform duration-300 ${open ? 'top-[5px] rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 h-[2px] w-full rounded bg-espresso transition-transform duration-300 ${open ? 'top-[5px] -rotate-45' : 'top-[10px]'}`} />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-espresso/10 bg-milk/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="section flex flex-col py-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display flex items-center justify-between border-b border-espresso/8 py-4 text-xl font-semibold"
              >
                {l.label}
                <span aria-hidden="true" className="text-cobalt">→</span>
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="btn btn-primary w-full">
              <ChatIcon className="h-5 w-5" />
              Order on WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
