import { BeanIcon, CroissantIcon, MountainIcon } from './icons'

const FACTS = [
  {
    Icon: BeanIcon,
    title: 'Single-origin beans',
    text: 'One farm per bag — Ethiopia, Colombia, Kenya — so every cup tastes of the place it grew.',
  },
  {
    Icon: MountainIcon,
    title: 'Roasted in Almaty',
    text: 'Light roasts done in small batches every Tuesday, a short drive from the Alatau foothills.',
  },
  {
    Icon: CroissantIcon,
    title: 'Fresh pastries daily',
    text: 'Croissants, pistachio swirls and lemon tarts, laminated and baked in-house each morning.',
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative bg-milk py-20 sm:py-24">
      <div className="section">
        <div className="reveal grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">About Sora</p>
            <h2 id="about-title" className="mt-4 text-3xl font-bold sm:text-[2.6rem]">
              Sora means <em className="text-cobalt not-italic">sky</em>.
            </h2>
          </div>
          <p className="max-w-xl text-lg text-espresso-soft">
            We built a coffee bar that feels like the first clear morning after snow in Almaty: big windows, pale-blue
            tiles, light wood and a barista who remembers your order.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {FACTS.map(({ Icon, title, text }, i) => (
            <li
              key={title}
              className="reveal group rounded-[1.75rem] bg-sky-soft p-7 ring-1 ring-sky-deep/50 transition-colors duration-500 hover:bg-sky"
              style={{ '--d': `${i * 90}ms` } as React.CSSProperties}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-milk text-cobalt shadow-[0_8px_20px_-12px_rgb(47_91_234/0.5)] transition-transform duration-500 group-hover:-translate-y-1">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-espresso-soft">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
