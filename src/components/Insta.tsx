import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../config'
import { InstagramIcon } from './icons'
import { Img } from './Img'

const POSTS = [
  { name: 'insta-1', alt: 'Iced latte on a pale-blue tiled counter' },
  { name: 'insta-2', alt: 'Coffee beans spilling from a kraft bag beside a blue mug' },
  { name: 'insta-3', alt: 'Cappuccino and an open notebook by a window over the city' },
  { name: 'insta-4', alt: 'Espresso pouring from the portafilter into a blue cup' },
  { name: 'insta-5', alt: 'Matcha latte and lemon tart on an oak tray' },
  { name: 'insta-6', alt: 'A hand holding a blue takeaway cup against a cloudy sky' },
] as const

export function Insta() {
  return (
    <section aria-labelledby="insta-title" className="bg-milk pb-20 sm:pb-28">
      <div className="section">
        <div className="reveal flex flex-col items-start justify-between gap-5 border-t border-espresso/10 pt-14 sm:flex-row sm:items-center">
          <div>
            <h2 id="insta-title" className="text-2xl font-bold sm:text-3xl">
              @{INSTAGRAM_HANDLE}
            </h2>
            <p className="mt-2 text-espresso-soft">New beans, new bakes and the occasional cloud.</p>
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="btn btn-dark">
            <InstagramIcon className="h-5 w-5" />
            Follow @{INSTAGRAM_HANDLE}
          </a>
        </div>

        <ul className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
          {POSTS.map((p, i) => (
            <li key={p.name} className="reveal" style={{ '--d': `${i * 60}ms` } as React.CSSProperties}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-sky"
              >
                <Img
                  name={p.name}
                  alt={p.alt}
                  sizes="(min-width: 1024px) 16vw, 31vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-(--ease-soft) group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-espresso/0 text-milk opacity-0 transition-all duration-500 group-hover:bg-espresso/35 group-hover:opacity-100">
                  <InstagramIcon className="h-7 w-7" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
