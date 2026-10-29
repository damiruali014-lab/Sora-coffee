// The ₸ glyph lives in the fonts' latin-ext subset (≈140 kB for one character), so draw it instead.
export function TengeSign() {
  return (
    <svg viewBox="0 0 10 12" className="ml-[0.18em] inline-block h-[0.76em] w-auto align-baseline" role="img" aria-label="tenge">
      <path d="M1 1.2h8M1 4.2h8M5 4.2V12" fill="none" stroke="currentColor" strokeWidth="2.3" />
    </svg>
  )
}

/** Renders text with every "₸" swapped for <TengeSign />. */
export function WithTenge({ text }: { text: string }) {
  const parts = text.split('₸')
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p.replace(/\s$/, '')}
          {i < parts.length - 1 && <TengeSign />}
        </span>
      ))}
    </>
  )
}
