// Small line icons drawn for Sora (24px grid, 1.75 stroke) so they share one hand.
type P = React.SVGProps<SVGSVGElement>
const base = (p: P) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...p,
})

export const BeanIcon = (p: P) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="12" rx="6.5" ry="9" transform="rotate(35 12 12)" />
    <path d="M8.2 17.6c2.6-1.6 1.2-5.2 3.8-6.8s1.6-4.9 3.8-6.4" />
  </svg>
)

export const MountainIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m2.5 19.5 6.2-10 3.6 5.6 2.4-3.6 6.8 8z" />
    <path d="m7 12 1.7 1.3L10.3 12" />
    <circle cx="17.5" cy="5.5" r="2" />
  </svg>
)

export const CroissantIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M3.5 15.5c0-5 3.9-9 8.5-9s8.5 4 8.5 9c-1.2.8-2.8.8-4 0-1.3 1-3 1.4-4.5 1.4S9.2 16.5 7.9 15.5c-1.4.8-3.2.8-4.4 0Z" />
    <path d="M9 7.3 10.3 16M15 7.3 13.7 16" />
  </svg>
)

export const ChatIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4.3 19.7 5.4 16A8 8 0 1 1 8.3 18.7Z" />
    <path d="M9.4 9.1c0 2.6 2.4 5.4 5.4 5.4l1-1.3-1.8-1-1 .8a4 4 0 0 1-2-2l.8-1-1-1.8Z" fill="currentColor" strokeWidth="1" />
  </svg>
)

export const PhoneIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 4h3.5l1.5 4-2 1.3a10.5 10.5 0 0 0 6.7 6.7L16 14l4 1.5V19a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
  </svg>
)

export const RouteIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="6" cy="18" r="2" />
    <path d="M8 18h7.5a3 3 0 0 0 0-6h-7a3 3 0 0 1 0-6H16" />
    <path d="M18 2.5c-1.7 0-3 1.2-3 2.9 0 2 3 4.6 3 4.6s3-2.6 3-4.6c0-1.7-1.3-2.9-3-2.9Z" />
  </svg>
)

export const PinIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
)

export const ClockIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
)

export const InstagramIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
  </svg>
)

export const ArrowIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const CloseIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const ChevronIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m9 5 7 7-7 7" />
  </svg>
)

export const StarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...p}>
    <path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8Z" />
  </svg>
)

export const CheckIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
)
