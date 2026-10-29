import { StarIcon } from './icons'

const REVIEWS = [
  {
    name: 'Aigerim S.',
    source: '2GIS',
    text: 'The brightest spot on Abay. The flat white is properly balanced and the pistachio swirl is dangerous. I now plan my mornings around it.',
  },
  {
    name: 'Timur K.',
    source: 'Google',
    text: 'Finally a place that does a real V60 in Almaty. The barista talked me through the beans without any snobbery. Great for working an hour, too.',
  },
  {
    name: 'Dana M.',
    source: '2GIS',
    text: 'Came for the photos, stayed for the Sora raf. Bright, calm, spotless — and the staff remembered my order on the second visit.',
  },
]

function Stars({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <span className="flex text-cobalt" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} className={className} />
      ))}
    </span>
  )
}

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-sky py-20 sm:py-28">
      <div className="section grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Reviews</p>
          <h2 id="reviews-title" className="mt-4 text-3xl font-bold sm:text-[2.6rem]">
            Regulars say it best.
          </h2>
          <div className="mt-8 inline-flex items-center gap-5 rounded-[1.75rem] bg-milk p-6 pr-8 ring-1 ring-sky-deep/60">
            <p className="font-display text-6xl font-bold leading-none" aria-hidden="true">
              4.9
            </p>
            <div>
              <Stars className="h-5 w-5" />
              <p className="mt-2 text-sm text-espresso-soft">
                <span className="sr-only">Rated 4.9 out of 5 </span>on 2GIS &amp; Google
                <br />
                <strong className="font-semibold text-espresso">380+ reviews</strong>
              </p>
            </div>
          </div>
        </div>

        <ul className="grid gap-4">
          {REVIEWS.map((r, i) => (
            <li
              key={r.name}
              className="reveal rounded-[1.75rem] bg-milk p-7 ring-1 ring-sky-deep/50 sm:p-8 lg:even:ml-12"
              style={{ '--d': `${i * 90}ms` } as React.CSSProperties}
            >
              <figure>
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="text-xs font-semibold tracking-wider text-espresso-soft uppercase">via {r.source}</span>
                </div>
                <blockquote className="mt-4 text-lg leading-relaxed">“{r.text}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 text-sm font-semibold">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-sky font-display text-xs text-cobalt-deep" aria-hidden="true">
                    {r.name[0]}
                  </span>
                  {r.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
