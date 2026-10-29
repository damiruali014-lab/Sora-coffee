import { useState } from 'react'
import { ADDRESS, MAP, PHONE_DISPLAY, PHONE_TEL, ROUTE_2GIS_URL, whatsappLink } from '../config'
import { useOpenStatus } from '../hooks/useOpenStatus'
import { HOURS_ROWS, hhmm } from '../lib/hours'
import { ChatIcon, CheckIcon, ClockIcon, PhoneIcon, PinIcon, RouteIcon } from './icons'

const d = 0.006
const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${MAP.lon - d * 1.6}%2C${MAP.lat - d}%2C${MAP.lon + d * 1.6}%2C${MAP.lat + d}&layer=mapnik&marker=${MAP.lat}%2C${MAP.lon}`

function HoursTable() {
  const status = useOpenStatus()
  return (
    <table className="mt-3 w-full text-left">
      <caption className="sr-only">Opening hours (Almaty time)</caption>
      <tbody>
        {HOURS_ROWS.map((row) => {
          const today = status !== null && row.days.includes(status.day)
          return (
            <tr key={row.label} className="border-b border-espresso/10 last:border-0">
              <th scope="row" className="py-3 font-medium">
                {row.label}
                {today && (
                  <span className="ml-2 rounded-full bg-cobalt px-2 py-0.5 text-[0.7rem] font-semibold tracking-wide text-milk uppercase">
                    Today
                  </span>
                )}
              </th>
              <td className="py-3 text-right font-display text-[0.95rem] font-semibold tabular-nums">
                {hhmm(row.open)} – {hhmm(row.close)}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [name, setName] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setName(String(new FormData(form).get('name') ?? '').trim().split(' ')[0])
    setState('sending')
    // Demo only: no backend. A real build would POST to a form service or a Telegram bot here.
    setTimeout(() => setState('sent'), 900)
  }

  if (state === 'sent') {
    return (
      <div role="status" className="flex min-h-[23rem] flex-col items-start justify-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-cobalt text-milk">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-6 text-2xl font-bold">Thanks{name ? `, ${name}` : ''}!</h3>
        <p className="mt-2 max-w-sm text-espresso-soft">
          Your message is with the team. We usually reply within an hour while the bar is open.
        </p>
        <button type="button" onClick={() => setState('idle')} className="btn btn-ghost mt-6">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4" aria-describedby="form-note">
      <h3 className="text-xl font-bold">Book a table or ask us anything</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Name
          <input name="name" required autoComplete="name" className="field" placeholder="Aigerim" />
        </label>
        <label className="text-sm font-semibold">
          Phone
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="[+0-9 ()\-]{7,}"
            className="field"
            placeholder="+7 7__ ___ __ __"
          />
        </label>
      </div>
      <label className="text-sm font-semibold">
        Message
        <textarea name="message" required rows={4} className="field resize-none" placeholder="A table for four on Saturday at 10:00?" />
      </label>
      <button type="submit" className="btn btn-dark justify-self-start" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p id="form-note" className="text-xs text-espresso-soft">
        Demo form: nothing is sent anywhere.
      </p>
    </form>
  )
}

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="bg-milk py-20 sm:py-28">
      <div className="section">
        <div className="reveal">
          <p className="eyebrow">Visit</p>
          <h2 id="visit-title" className="mt-4 text-3xl font-bold sm:text-[2.6rem]">
            Come up for air.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1.15fr]">
          <div className="reveal flex flex-col rounded-[2rem] bg-sky p-7 sm:p-9">
            <div className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-6 w-6 shrink-0 text-cobalt" />
              <address className="not-italic">
                <p className="font-display text-xl font-semibold">{ADDRESS}</p>
                <p className="text-espresso-soft">Corner of Abay &amp; Baitursynov, ground floor</p>
              </address>
            </div>

            <div className="mt-8 flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-6 w-6 shrink-0 text-cobalt" />
              <div className="flex-1">
                <p className="font-semibold">Opening hours</p>
                <HoursTable />
              </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-8 [&>a]:flex-auto">
              <a href={ROUTE_2GIS_URL} target="_blank" rel="noopener" className="btn btn-dark !px-4">
                <RouteIcon className="h-5 w-5" />
                Route in 2GIS
              </a>
              <a href={whatsappLink('Hi Sora! I have a question:')} target="_blank" rel="noopener" className="btn btn-primary !px-4">
                <ChatIcon className="h-5 w-5" />
                WhatsApp us
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost !px-4" aria-label={`Call ${PHONE_DISPLAY}`}>
                <PhoneIcon className="h-5 w-5" />
                Call
              </a>
            </div>
          </div>

          <div className="reveal relative min-h-[20rem] overflow-hidden rounded-[2rem] bg-sky ring-1 ring-sky-deep/60" style={{ '--d': '90ms' } as React.CSSProperties}>
            <iframe
              title={`Map showing Sora Coffee at ${ADDRESS}`}
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[35%] saturate-[0.85]"
            />
          </div>
        </div>

        <div className="reveal mt-4 grid gap-8 rounded-[2rem] bg-sky-soft p-7 ring-1 ring-sky-deep/50 sm:p-9 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-display text-2xl leading-tight font-bold sm:text-3xl">
              Planning a meeting, a birthday or a team breakfast?
            </p>
            <p className="mt-4 max-w-sm text-espresso-soft">
              We hold the window table for groups up to eight. Drop us a line and we’ll text you back.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
