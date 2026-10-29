// Opening hours, evaluated against the current wall-clock time in Almaty (whatever the visitor's timezone).
export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const

const WEEKDAY = { open: 8 * 60, close: 21 * 60 }
const WEEKEND = { open: 9 * 60, close: 22 * 60 }

/** dayIndex: 0 = Monday … 6 = Sunday */
export const hoursFor = (dayIndex: number) => (dayIndex >= 5 ? WEEKEND : WEEKDAY)

export const HOURS_ROWS = [
  { label: 'Mon – Fri', days: [0, 1, 2, 3, 4], ...WEEKDAY },
  { label: 'Sat – Sun', days: [5, 6], ...WEEKEND },
]

export const hhmm = (minutes: number) =>
  `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`

const fmt = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Almaty',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})
const SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export function almatyNow(date = new Date()) {
  const parts = Object.fromEntries(fmt.formatToParts(date).map((p) => [p.type, p.value]))
  return { day: SHORT.indexOf(parts.weekday), minutes: Number(parts.hour) * 60 + Number(parts.minute) }
}

export type OpenStatus = { open: boolean; detail: string; day: number }

export function openStatus(date = new Date()): OpenStatus {
  const { day, minutes } = almatyNow(date)
  const today = hoursFor(day)
  if (minutes >= today.open && minutes < today.close) {
    return { open: true, day, detail: `until ${hhmm(today.close)}` }
  }
  if (minutes < today.open) return { open: false, day, detail: `opens ${hhmm(today.open)}` }
  return { open: false, day, detail: `opens tomorrow ${hhmm(hoursFor((day + 1) % 7).open)}` }
}
