import { useEffect, useState } from 'react'
import { openStatus, type OpenStatus } from '../lib/hours'

/** Null during prerender/hydration (the server can't know the visitor's "now"), then ticks every 30s. */
export function useOpenStatus() {
  const [status, setStatus] = useState<OpenStatus | null>(null)
  useEffect(() => {
    const tick = () => setStatus(openStatus())
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])
  return status
}
