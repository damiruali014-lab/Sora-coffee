import { useEffect, useRef, useState } from 'react'
import { Img } from './Img'
import { ChevronIcon, CloseIcon } from './icons'

const PHOTOS = [
  {
    name: 'interior',
    alt: 'Sora’s bar: pale-blue tiled counter, oak stools and shelves of coffee bags under white pendant lamps',
    caption: 'The bar on Abay Ave — morning light until noon',
    cell: 'col-span-2 row-span-2 md:col-span-5 md:row-span-2',
  },
  {
    name: 'latte-art',
    alt: 'Overhead view of a rosetta latte in a pale-blue cup with a cobalt spoon and coffee beans',
    caption: 'Rosetta on a house latte',
    cell: 'md:col-span-4',
  },
  {
    name: 'barista',
    alt: 'Barista in a linen apron pouring steamed milk into a blue cup',
    caption: 'Every cup poured by hand',
    cell: 'row-span-2 md:col-span-3 md:row-span-2 md:mt-12',
  },
  {
    name: 'pastries',
    alt: 'Croissants, a pistachio swirl and a slice of pistachio sponge on a blue plate',
    caption: 'This morning’s bake',
    cell: 'md:col-span-4',
  },
] as const

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const d = dialog.current
    if (!d) return
    if (index !== null && !d.open) d.showModal()
    if (index === null && d.open) d.close()
  }, [index])

  const open = (i: number, e: React.MouseEvent<HTMLButtonElement>) => {
    opener.current = e.currentTarget
    setIndex(i)
  }
  const step = (delta: number) => setIndex((i) => (i === null ? i : (i + delta + PHOTOS.length) % PHOTOS.length))

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') step(1)
    if (e.key === 'ArrowLeft') step(-1)
  }

  const photo = index === null ? null : PHOTOS[index]

  return (
    <section aria-labelledby="gallery-title" className="bg-milk py-20 sm:py-28">
      <div className="section">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Inside Sora</p>
            <h2 id="gallery-title" className="mt-4 text-3xl font-bold sm:text-[2.6rem]">
              Light, wood &amp; a little blue.
            </h2>
          </div>
          <p className="max-w-sm text-espresso-soft">Tap a photo to see it full size.</p>
        </div>

        <ul className="mt-12 grid auto-rows-[10.5rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] md:grid-cols-12 md:gap-4 lg:auto-rows-[16.5rem]">
          {PHOTOS.map((p, i) => (
            <li key={p.name} className={`reveal ${p.cell}`} style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>
              <button
                type="button"
                onClick={(e) => open(i, e)}
                className="group relative block h-full w-full overflow-hidden rounded-[1.5rem] bg-sky"
                aria-label={`Open photo: ${p.caption}`}
              >
                <Img
                  name={p.name}
                  alt={p.alt}
                  sizes="(min-width: 768px) 42vw, (min-width: 0px) 92vw"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-(--ease-soft) group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-milk/90 px-4 py-2 text-left text-sm font-medium opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  {p.caption}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        className="lightbox m-auto max-h-none max-w-none bg-transparent p-0 text-milk backdrop:bg-transparent"
        aria-label="Photo viewer"
        onClose={() => {
          setIndex(null)
          opener.current?.focus()
        }}
        onClick={(e) => e.target === e.currentTarget && setIndex(null)}
        onKeyDown={onKeyDown}
      >
        {photo && (
          <figure className="relative flex w-[min(92vw,1100px)] flex-col items-center">
            <Img
              key={photo.name}
              name={photo.name}
              alt={photo.alt}
              priority
              sizes="92vw"
              className="max-h-[78svh] w-auto rounded-[1.25rem] object-contain"
            />
            <figcaption className="mt-4 flex w-full items-center justify-between gap-4 text-sm sm:text-base">
              <span>
                {photo.caption}
                <span className="ml-3 text-milk/60">
                  {index! + 1} / {PHOTOS.length}
                </span>
              </span>
              <span className="flex gap-2">
                <button type="button" onClick={() => step(-1)} className="lb-btn" aria-label="Previous photo">
                  <ChevronIcon className="h-5 w-5 rotate-180" />
                </button>
                <button type="button" onClick={() => step(1)} className="lb-btn" aria-label="Next photo">
                  <ChevronIcon className="h-5 w-5" />
                </button>
                <button type="button" onClick={() => setIndex(null)} className="lb-btn" aria-label="Close photo viewer" autoFocus>
                  <CloseIcon className="h-5 w-5" />
                </button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  )
}
