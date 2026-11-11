// ─────────────────────────────────────────────
// Hero.jsx
// First section — takes full screen height.
// Footer is NOT visible when page loads.
// Two-column: text left, image right.
// ─────────────────────────────────────────────

import { Link } from 'react-router-dom'
import { Sparkles, ChevronRight } from 'lucide-react'
import Container from '../ui/Container'
import { heroContent, trustIndicators } from '../../data/salon'

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80'

// Scrolls smoothly to a section by its id
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Hero() {
  return (
    // min-h-screen → occupies full viewport height
    // Footer is only visible when user scrolls past all sections
    <section
      className="min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom right, #09090b, #18181b, #000000)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <Container>
        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── LEFT: Text ─────────────────────── */}
          <div className="flex flex-col items-start gap-8">

            {/* Label */}
            <div className="animate-fade-in-up flex items-center gap-3
                            rounded-full bg-amber-400/10 border border-amber-400/30"
                 style={{ padding: '10px 24px' }}>
              <Sparkles size={14} className="text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-wide">
                Premium Beauty Services
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up animation-delay-200
                           text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {heroContent.headline}{' '}
              <span className="text-amber-400">{heroContent.headlineAccent}</span>
            </h1>

            {/* Description */}
            <p className="animate-fade-in-up animation-delay-400
                          text-gray-400 text-lg leading-relaxed"
               style={{ maxWidth: '520px' }}>
              {heroContent.description}
            </p>

            {/* Buttons */}
            <div className="animate-fade-in-up animation-delay-600
                            flex flex-wrap gap-4 w-full sm:w-auto">

              {/* Primary — Book Appointment → goes to booking page */}
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full
                           bg-amber-400 text-zinc-900 font-extrabold text-base
                           hover:bg-amber-300 hover:scale-105
                           transition-all duration-200 shadow-lg shadow-amber-400/25
                           w-full sm:w-auto justify-center"
                style={{ padding: '12px 32px' }}
              >
                <Sparkles size={16} />
                {heroContent.primaryBtn}
              </Link>

              {/* Secondary — Explore Services → scrolls to services section */}
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center gap-2 rounded-full
                           bg-amber-400 text-zinc-900 font-extrabold text-base
                           hover:bg-amber-300 hover:scale-105
                           transition-all duration-200 shadow-lg shadow-amber-400/25
                           w-full sm:w-auto justify-center cursor-pointer"
                style={{ padding: '12px 32px' }}
              >
                {heroContent.secondaryBtn}
                <ChevronRight size={16} />
              </button>

            </div>

            {/* Trust indicators */}
            <div className="animate-fade-in-up animation-delay-800 flex flex-wrap gap-3">
              {trustIndicators.map(item => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-full
                             bg-zinc-800 border border-zinc-700
                             hover:border-amber-400/50 transition-colors duration-200"
                  style={{ padding: '10px 20px' }}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.value && (
                    <span className="text-white font-bold text-sm">{item.value}</span>
                  )}
                  <span className="text-gray-400 text-sm">{item.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT: Image ───────────────────── */}
          <div className="animate-fade-in-up animation-delay-400
                          relative flex items-center justify-center mt-8 lg:mt-0">

            {/* Decorative circles */}
            <div className="absolute w-80 h-80 rounded-full bg-amber-400
                            opacity-20 blur-3xl -top-10 -right-10 z-0" />
            <div className="absolute w-64 h-64 rounded-full bg-amber-600
                            opacity-15 blur-3xl -bottom-10 -left-10 z-0" />

              {/* Image */}
            <div className="relative z-10 w-full">
              <img
                src={PLACEHOLDER_IMAGE}
                alt="Salon interior"
                className="w-full object-cover rounded-3xl shadow-2xl border-2 border-amber-400/30"
                style={{ height: '520px' }}
              />
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
