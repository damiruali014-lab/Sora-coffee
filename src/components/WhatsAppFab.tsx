import { whatsappLink } from '../config'
import { ChatIcon } from './icons'

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hi Sora! I'd like to order a coffee for pickup:")}
      target="_blank"
      rel="noopener"
      aria-label="Order on WhatsApp"
      className="group fixed right-4 bottom-4 z-30 flex h-14 items-center gap-2 rounded-full bg-cobalt pr-4 pl-4 text-milk shadow-[0_14px_34px_-10px_rgb(47_91_234/0.8)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-cobalt-deep sm:right-6 sm:bottom-6"
    >
      <ChatIcon className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-[max-width] duration-500 group-hover:max-w-40 group-focus-visible:max-w-40">
        Order on WhatsApp
      </span>
    </a>
  )
}
