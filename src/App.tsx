import { About } from './components/About'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Insta } from './components/Insta'
import { Menu } from './components/Menu'
import { Reviews } from './components/Reviews'
import { Visit } from './components/Visit'
import { WhatsAppFab } from './components/WhatsAppFab'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Visit />
        <Insta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
