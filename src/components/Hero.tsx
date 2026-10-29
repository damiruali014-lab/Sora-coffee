import { srcSetFor } from './Img'
import { ArrowIcon, StarIcon } from './icons'
import { CLOUD_D } from './Logo'

// Each layout only downloads its own photo: the other <picture> falls back to this 1×1 GIF.
const BLANK = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='

const WISPS = [
  { d: 'M0 0c-16-24 16-44 0-70s14-46 0-72', x: -46, delay: '0s', sway: '-18px' },
  { d: 'M0 0c14-22-14-44 0-68s-12-48 2-74', x: 4, delay: '-2.2s', sway: '-6px' },
  { d: 'M0 0c-12-26 14-42 0-66s16-50-2-76', x: 52, delay: '-4.4s', sway: '-24px' },
]

const PUFFS = [
  { delay: '0s', dx: '-1050px', dy: '-300px', s: 2.8 },
  { delay: '-7s', dx: '-1250px', dy: '-120px', s: 2.2 },
  { delay: '-14s', dx: '-900px', dy: '-430px', s: 3.1 },
]

/** Steam in "cup units": origin = centre of the cup's rim, roughly 400 units across. */
function Steam({ x, y, scale, id }: { x: number; y: number; scale: number; id: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <defs>
        <filter id={`${id}-soft`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>
      {PUFFS.map((p, i) => (
        <g key={i} className="steam-puff" style={{ '--d': p.delay, '--dx': p.dx, '--dy': p.dy, '--s': p.s } as React.CSSProperties}>
          <path d={CLOUD_D} transform="translate(-80 -150) scale(4)" fill="#fff" filter={`url(#${id}-soft)`} />
        </g>
      ))}
      {WISPS.map((w, i) => (
        <g key={i} transform={`translate(${w.x} -20)`}>
          <path
            className="steam-wisp"
            style={{ '--d': w.delay, '--sway': w.sway } as React.CSSProperties}
            d={w.d}
            fill="none"
            stroke="#fff"
            strokeWidth="13"
            strokeLinecap="round"
            filter={`url(#${id}-soft)`}
          />
        </g>
      ))}
    </g>
  )
}

const SKY_CLOUDS = [
  { top: '18%', w: 220, t: '95s', d: '-20s', o: 0.9, rest: '8vw' },
  { top: '42%', w: 140, t: '70s', d: '-52s', o: 0.7, rest: '55vw' },
  { top: '8%', w: 110, t: '120s', d: '-75s', o: 0.6, rest: '30vw' },
]

function SkyClouds({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {SKY_CLOUDS.map((c, i) => (
        <svg
          key={i}
          viewBox="0 0 40 21"
          className="sky-cloud absolute left-0"
          style={{ top: c.top, width: c.w, opacity: c.o, '--t': c.t, '--d': c.d, '--rest': c.rest } as React.CSSProperties}
        >
          <path d={CLOUD_D} fill="#fff" />
        </svg>
      ))}
    </div>
  )
}

function HeroCopy() {
  return (
    <>
      <p className="eyebrow">Specialty coffee bar · Almaty</p>
      <h1 id="hero-title" className="mt-5 text-[2.55rem] font-bold sm:text-6xl lg:text-[4.4rem] xl:text-[4.9rem]">
        Coffee with your head in the <span className="text-cobalt">clouds.</span>
      </h1>
      <p className="mt-6 max-w-[30rem] text-lg text-espresso-soft sm:text-xl">
        A bright morning coffee bar on Abay Avenue. Single-origin espresso, slow pour-overs and pastries out of the oven
        before you are.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#menu" className="btn btn-primary">
          See the menu
          <ArrowIcon className="h-[18px] w-[18px]" />
        </a>
        <a href="#visit" className="btn btn-ghost">
          Find us
        </a>
      </div>
      <p className="mt-8 flex items-center gap-2 text-sm text-espresso-soft">
        <span className="flex text-cobalt" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} className="h-4 w-4" />
          ))}
        </span>
        <span>
          <strong className="font-semibold text-espresso">4.9</strong> from 380+ guests on 2GIS &amp; Google
        </span>
      </p>
    </>
  )
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-sky">
      {/* Desktop: the wide banner fills the hero and the copy sits in its empty sky on the left */}
      <div className="absolute inset-0 hidden lg:block">
        <picture>
          <source
            media="(min-width: 1024px)"
            type="image/webp"
            srcSet="/images/r/banner-wide-1280.webp 1280w, /images/r/banner-wide-1600.webp 1600w, /images/banner-wide.webp 2400w"
            sizes="100vw"
          />
          <img
            src={BLANK}
            alt=""
            width={2400}
            height={1357}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-sky/70 via-sky/10 to-transparent" aria-hidden="true" />
      </div>
      <SkyClouds />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        viewBox="0 0 2400 1357"
        preserveAspectRatio="xMidYMid slice"
      >
        <Steam id="steam-d" x={1688} y={590} scale={1} />
      </svg>

      <div className="section relative pt-28 pb-12 sm:pt-32 lg:flex lg:h-[min(100svh,880px)] lg:min-h-[680px] lg:items-center lg:pt-16 lg:pb-0">
        <div className="max-w-[38rem] xl:max-w-[40rem]">
          <HeroCopy />
        </div>

        {/* Mobile & tablet: the portrait photo under the copy */}
        <div className="relative mt-10 overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgb(43_29_22/0.45)] sm:mx-auto sm:max-w-[34rem] lg:hidden">
          <picture>
            <source media="(max-width: 1023px)" type="image/webp" srcSet={srcSetFor('hero')} sizes="(max-width: 1023px) 92vw" />
            <img
              src={BLANK}
              alt="A pale blue cup of latte with a heart in the foam on Sora's sunlit oak counter"
              width={1600}
              height={2000}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover"
            />
          </picture>
          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1600 2000">
            <Steam id="steam-m" x={866} y={1030} scale={1.9} />
          </svg>
        </div>
      </div>
    </section>
  )
}
