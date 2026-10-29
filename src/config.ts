// Contact details for the (fictional) café. Swap these for a real client's details.
export const WHATSAPP_NUMBER = '77000000000'
export const PHONE_DISPLAY = '+7 700 000 00 00'
export const PHONE_TEL = '+77000000000'
export const INSTAGRAM_HANDLE = 'soracoffee'
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
export const ADDRESS = 'Abay Ave 52, Almaty'
export const MAP = { lat: 43.2399, lon: 76.9215 }
export const ROUTE_2GIS_URL = `https://2gis.kz/almaty/geo/${MAP.lon},${MAP.lat}`
export const AUTHOR_URL = 'https://damiruali014-lab.github.io'

export function whatsappLink(message = "Hi Sora! I'd like to order:") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** 1800 → "1 800 ₸" with non-breaking spaces so prices never wrap. */
export function tenge(amount: number) {
  return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₸`
}
