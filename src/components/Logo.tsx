import { WORDMARK } from './logo-paths'

// Cloud silhouette in a 40×20 box; used for the hero's drifting clouds.
export const CLOUD_D = 'M10 20H32A5 5 0 0 0 32 10A7 7 0 0 0 19 6A6 6 0 0 0 9 11A4.5 4.5 0 0 0 10 20Z'
// The same cloud as one open stroke: a wisp of steam rises from below and traces the cloud's outline.
export const STEAM_CLOUD_D = 'M21 29.5c-3.5-2.8 3.5-5.8 0-9.5H10A4.5 4.5 0 0 1 9 11A6 6 0 0 1 19 6A7 7 0 0 1 32 10A5 5 0 0 1 32 20H25.5'

type Props = { className?: string; tone?: 'dark' | 'light' }

/** "sora" wordmark; a wisp of steam rises out of the "o" and curls into a small cloud. */
export function Logo({ className, tone = 'dark' }: Props) {
  const { o } = WORDMARK
  const ink = tone === 'dark' ? 'var(--color-espresso)' : 'var(--color-milk)'
  const accent = tone === 'dark' ? 'var(--color-cobalt)' : 'var(--color-sky)'
  const k = 1.45
  return (
    <svg viewBox="0 -114 286 118" className={className} role="img" aria-label="Sora Coffee">
      <path d={WORDMARK.d} fill={ink} />
      <path
        d={STEAM_CLOUD_D}
        transform={`translate(${o.cx - 21 * k} ${-76 - 20 * k}) scale(${k})`}
        fill="none"
        stroke={accent}
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
