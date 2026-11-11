// ─────────────────────────────────────────────
// Navbar.jsx
// Sticky navigation bar.
// Links smooth-scroll to sections on the Home page.
// Active section is highlighted using IntersectionObserver.
// ─────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'
import Container from '../ui/Container'
import logoPlaceholder from '../../assets/react.svg'

// ── Navigation items ───────────────────────────
// id = the section's HTML id on the Home page
// label = what shows in the navbar
const navItems = [
  { label: 'Home',      id: 'hero'      },
  { label: 'About',     id: 'about'     },
  { label: 'Services',  id: 'services'  },
  { label: 'Stylists',  id: 'stylists'  },
  { label: 'Gallery',   id: 'gallery'   },
  { label: 'Reviews',   id: 'reviews'   },
  { label: 'Contact',   id: 'contact'   },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen]   = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const location = useLocation()

  // ── Smooth scroll handler ──────────────────
  // When a nav link is clicked, find the section by id
  // and scroll to it smoothly instead of navigating
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  // ── IntersectionObserver — active section ──
  // Watches which section is currently visible in the viewport
  // and updates activeSection so we can highlight the right nav link
  useEffect(() => {
    // Only run on the home page
    if (location.pathname !== '/') return

    const observers = []

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          // If more than 40% of the section is visible, mark it active
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.4 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    // Cleanup: stop observing when component unmounts
    return () => observers.forEach(o => o.disconnect())
  }, [location.pathname])

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const closeMenu  = () => setIsMenuOpen(false)

  // ── Whether we're on the home page ────────
  const isHome = location.pathname === '/'

  return (
    <nav className="sticky top-0 z-50 bg-zinc-900 shadow-lg">
      <Container>
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ──────────────────────────── */}
          <button
            onClick={() => isHome ? scrollToSection('hero') : null}
            className="flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <img src={logoPlaceholder} alt="Salon Logo" className="h-8 w-8 object-contain" />
            <span className="text-amber-400 font-bold text-xl tracking-wide">
              My Beauty Salon
            </span>
          </button>

          {/* ── Desktop nav links ─────────────── */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => isHome
                  ? scrollToSection(id)
                  : window.location.href = `/#${id}`
                }
                className={`font-bold transition-colors duration-200 cursor-pointer
                  ${activeSection === id && isHome
                    ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5'
                    : 'text-gray-200 hover:text-amber-400'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* ── Right side: Book Now + hamburger ── */}
          <div className="flex items-center gap-4">

            {/* Book Now — goes to booking page (separate route) */}
            <Link
              to="/book-appointment"
              className="hidden md:inline-flex items-center gap-2 rounded-full
                         bg-amber-400 text-zinc-900 font-extrabold text-base
                         hover:bg-amber-300 transition-colors duration-200"
              style={{ padding: '10px 32px' }}
            >
              <Sparkles size={17} />
              Book Now
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-200 hover:text-amber-400
                         transition-colors duration-200 p-1"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </Container>

      {/* ── Mobile dropdown ───────────────────── */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-800 border-t border-zinc-700 px-4 py-4">
          <div className="flex flex-col gap-1">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => {
                  isHome
                    ? scrollToSection(id)
                    : (window.location.href = `/#${id}`)
                  closeMenu()
                }}
                className={`px-3 py-2 rounded-md text-base font-bold text-left
                            transition-colors duration-200
                  ${activeSection === id && isHome
                    ? 'bg-zinc-700 text-amber-400'
                    : 'text-gray-200 hover:bg-zinc-700 hover:text-amber-400'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-700">
            <Link
              to="/book-appointment"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full rounded-full
                         bg-amber-400 text-zinc-900 font-extrabold
                         hover:bg-amber-300 transition-colors duration-200"
              style={{ padding: '10px 32px' }}
            >
              <Sparkles size={15} />
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
