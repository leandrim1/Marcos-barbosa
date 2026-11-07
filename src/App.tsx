import { About } from './components/About'
import { ContactSection } from './components/ContactSection'
import { Differentials } from './components/Differentials'
import { FeaturedSection } from './components/FeaturedSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MobileContactBar } from './components/MobileContactBar'
import { Properties } from './components/Properties'
import { Testimonials } from './components/Testimonials'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <a
        href="#imoveis"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:text-white"
      >
        Ir para os imóveis
      </a>

      <Header />

      <main>
        <Hero />
        <About />
        <Properties />
        <Differentials />
        <FeaturedSection />
        <Testimonials />
        <ContactSection />
      </main>

      <Footer />

      {/* Espaço para a barra fixa mobile não cobrir o rodapé */}
      <div aria-hidden="true" className="h-28 md:hidden" />

      <WhatsAppButton />
      <MobileContactBar />
    </>
  )
}
