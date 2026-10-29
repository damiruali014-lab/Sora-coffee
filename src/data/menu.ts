export type MenuItem = { name: string; description: string; price: number; tag?: string }
export type MenuTab = { id: string; label: string; note: string; items: MenuItem[] }

export const MENU: MenuTab[] = [
  {
    id: 'coffee',
    label: 'Coffee',
    note: 'Oat, almond or coconut milk +300 ₸ · Extra shot +400 ₸',
    items: [
      { name: 'Espresso', description: 'Our seasonal single origin, pulled short and sweet.', price: 1000 },
      { name: 'Americano', description: 'Double espresso over hot water, clean and bright.', price: 1200 },
      { name: 'Flat white', description: 'Double ristretto, silky microfoam, 180 ml.', price: 1800 },
      { name: 'Cappuccino', description: 'Equal parts espresso, milk and cloud-thick foam.', price: 1700 },
      { name: 'Latte', description: 'Mellow and milky, poured with a rosetta.', price: 1800 },
      { name: 'Sora raf', description: 'Espresso whipped with cream, vanilla and a pinch of sea salt.', price: 2200, tag: 'Signature' },
      { name: 'V60 pour-over', description: 'Ask for this week’s beans — tasting notes on the board.', price: 2000 },
      { name: 'Cloud cold brew', description: '18-hour cold brew topped with sweet whipped milk.', price: 2200, tag: 'New' },
    ],
  },
  {
    id: 'tea',
    label: 'Tea & More',
    note: 'All drinks can be made iced',
    items: [
      { name: 'Matcha latte', description: 'Ceremonial Uji matcha whisked with steamed milk.', price: 2200 },
      { name: 'Hojicha latte', description: 'Roasted green tea, toasty and low in caffeine.', price: 2100 },
      { name: 'Sea-buckthorn tea', description: 'Pot of black tea with sea buckthorn, honey and mint.', price: 1900, tag: 'Warming' },
      { name: 'Masala chai', description: 'House-blended spices simmered with milk.', price: 1900 },
      { name: 'Hot chocolate', description: '54% dark chocolate melted into whole milk.', price: 1900 },
      { name: 'Fresh orange juice', description: 'Squeezed to order, 300 ml.', price: 1900 },
    ],
  },
  {
    id: 'bakery',
    label: 'Bakery',
    note: 'Baked in-house every morning, while they last',
    items: [
      { name: 'Butter croissant', description: '27 layers of French butter, shatteringly crisp.', price: 1300 },
      { name: 'Pistachio swirl', description: 'Laminated dough rolled with pistachio cream.', price: 1600, tag: 'Bestseller' },
      { name: 'Almond croissant', description: 'Twice-baked with frangipane and toasted almonds.', price: 1700 },
      { name: 'Pistachio sponge', description: 'Light sponge, white chocolate cream, crushed pistachio.', price: 2200 },
      { name: 'Lemon tart', description: 'Sharp lemon curd in a buttery shortcrust.', price: 2100 },
      { name: 'Baursaks & honey butter', description: 'Warm Kazakh doughnuts with whipped honey butter.', price: 1200 },
    ],
  },
]
