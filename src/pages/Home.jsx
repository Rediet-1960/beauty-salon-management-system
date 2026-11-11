// Home page — single-page landing
// All sections live here. Navbar links scroll to each section by id.

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <Navbar />

      <main className="flex-1">

        {/* Each section has an id that the Navbar scrolls to */}
        <section id="hero">
          <Hero />
        </section>

        {/* ── Placeholder sections — built one by one ── */}
        <section id="about"
          className="min-h-screen flex items-center justify-center bg-zinc-900">
          <p className="text-amber-400 text-3xl font-bold">About Section — coming soon</p>
        </section>

        <section id="services"
          className="min-h-screen flex items-center justify-center bg-zinc-950">
          <p className="text-amber-400 text-3xl font-bold">Services Section — coming soon</p>
        </section>

        <section id="stylists"
          className="min-h-screen flex items-center justify-center bg-zinc-900">
          <p className="text-amber-400 text-3xl font-bold">Stylists Section — coming soon</p>
        </section>

        <section id="gallery"
          className="min-h-screen flex items-center justify-center bg-zinc-950">
          <p className="text-amber-400 text-3xl font-bold">Gallery Section — coming soon</p>
        </section>

        <section id="reviews"
          className="min-h-screen flex items-center justify-center bg-zinc-900">
          <p className="text-amber-400 text-3xl font-bold">Reviews Section — coming soon</p>
        </section>

        <section id="contact"
          className="min-h-screen flex items-center justify-center bg-zinc-950">
          <p className="text-amber-400 text-3xl font-bold">Contact Section — coming soon</p>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default Home
