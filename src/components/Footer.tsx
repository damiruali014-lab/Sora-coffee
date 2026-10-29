import { ADDRESS, AUTHOR_URL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, ROUTE_2GIS_URL, whatsappLink } from '../config'
import { HOURS_ROWS, hhmm } from '../lib/hours'
import { ChatIcon, InstagramIcon, RouteIcon } from './icons'
import { Logo } from './Logo'

const SOCIALS = [
  { href: INSTAGRAM_URL, label: 'Instagram', Icon: InstagramIcon },
  { href: whatsappLink(), label: 'WhatsApp', Icon: ChatIcon },
  { href: ROUTE_2GIS_URL, label: '2GIS', Icon: RouteIcon },
]

export function Footer() {
  return (
    <footer className="bg-espresso text-milk">
      <div className="section grid gap-12 pt-16 pb-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo tone="light" className="h-12 w-auto" />
          <p className="mt-5 max-w-xs text-milk/70">Specialty coffee with your head in the clouds. {ADDRESS}.</p>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold tracking-[0.16em] text-milk/60 uppercase">Hours</h2>
          <ul className="mt-4 space-y-2">
            {HOURS_ROWS.map((r) => (
              <li key={r.label} className="flex justify-between gap-6 tabular-nums md:max-w-[15rem]">
                <span>{r.label}</span>
                <span>
                  {hhmm(r.open)} – {hhmm(r.close)}
                </span>
              </li>
            ))}
          </ul>
          <a href={`tel:${PHONE_TEL}`} className="mt-4 inline-block text-milk/80 underline-offset-4 hover:underline">
            {PHONE_DISPLAY}
          </a>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold tracking-[0.16em] text-milk/60 uppercase">Follow</h2>
          <ul className="mt-4 flex gap-2">
            {SOCIALS.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-milk/25 transition-colors hover:bg-milk hover:text-espresso"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-milk/10">
        <div className="section flex flex-col gap-3 py-6 text-sm text-milk/70 md:flex-row md:items-center md:justify-between">
          <p>
            Concept website by Damir Uali. Sora Coffee is a fictional business.{' '}
            <a href={AUTHOR_URL} className="font-semibold text-sky underline decoration-sky/40 underline-offset-4 hover:decoration-sky">
              Like it? I can build one for your business.
            </a>
          </p>
          <p>© {new Date().getFullYear()} Sora Coffee (concept)</p>
        </div>
      </div>
    </footer>
  )
}
