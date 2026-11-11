// ─────────────────────────────────────────────
// Navbar.jsx
// The top navigation bar shown on every public page.
// It contains: logo, nav links, Book Now button, mobile menu.
// ─────────────────────────────────────────────

import { useState } from 'react'
// useState lets us remember whether the mobile menu is open or closed

import { NavLink } from 'react-router-dom'
// NavLink is like a link but it knows which page is currently active
// so we can highlight the current page link

import { Menu, X, Sparkles } from 'lucide-react'
// Menu = hamburger icon (☰)  |  X = close icon (✕)  |  Sparkles = ✨ icon for Book Now
// Lucide is our icon library

import logoPlaceholder from '../../assets/react.svg'
// Temporary logo — we'll replace this with the real salon logo later

// ── The navigation links data ──────────────────
// We define links as an array so we don't repeat <NavLink> code 7 times.
// This is called the DRY principle: Don't Repeat Yourself.
// When we need to add or remove a link, we only edit this array.
const navLinks = [
  { label: 'Home',      path: '/'         },
  { label: 'About',     path: '/about'    },
  { label: 'Services',  path: '/services' },
  { label: 'Stylists',  path: '/stylists' },
  { label: 'Reviews',   path: '/reviews'  },
  { label: 'Gallery',   path: '/gallery'  },
  { label: 'Contact',   path: '/contact'  },
]

// ── The Navbar component ───────────────────────
function Navbar() {

  // isMenuOpen: false = mobile menu is hidden, true = it is visible
  // setIsMenuOpen: the function we call to change that value
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // This function toggles the menu open/closed
  // If it was open, it closes. If it was closed, it opens.
  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  // This function closes the menu (used when a link is clicked)
  const closeMenu = () => setIsMenuOpen(false)

  // ── NavLink active style helper ───────────────
  // NavLink accepts a function for className
  // React Router passes { isActive } so we know if this link is the current page
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-amber-400 font-bold border-b-2 border-amber-400 pb-0.5'
      : 'text-gray-200 font-bold hover:text-amber-400 transition-colors duration-200'

  return (
    // ── Outer wrapper ──────────────────────────
    // sticky top-0 z-50 → navbar stays at top while scrolling
    // bg-zinc-900     → very dark background (luxury feel)
    // shadow-lg       → subtle shadow below navbar
    <nav className="sticky top-0 z-50 bg-zinc-900 shadow-lg">

      {/* ── Inner container ───────────────────────
          max-w-7xl mx-auto → centers content and limits max width
          px-4 sm:px-6 lg:px-8 → horizontal padding, more on larger screens
          h-16 → fixed height of 64px
          flex items-center justify-between → logo left, links center, button right
      */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo section (left side) ─────────── */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={logoPlaceholder}
              alt="Salon Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-amber-400 font-bold text-xl tracking-wide">
              My Beauty Salon
            </span>
          </NavLink>

          {/* ── Desktop nav links (center) ──────────
              hidden md:flex → hidden on mobile, shown on medium+ screens
          */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              // We use link.path as the key because it is unique
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClass}
                // end prop on Home link: only mark active on exact "/" match
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* ── Right side: Book Now + hamburger ─── */}
          <div className="flex items-center gap-4">

            {/* Book Now button — hidden on mobile, shown on md+ screens */}
            <NavLink
              to="/services"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full
                         bg-amber-400 text-zinc-900 font-extrabold text-base
                         hover:bg-amber-300 transition-colors duration-200"
              style={{ padding: '10px 32px' }}
            >
              <Sparkles size={17} />
              Book Now
            </NavLink>

            {/* Hamburger button — only visible on mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-200 hover:text-amber-400
                         transition-colors duration-200 p-1"
              aria-label="Toggle menu"
              // aria-label is for screen readers (accessibility)
            >
              {/* Show X icon if menu is open, hamburger if closed */}
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </div>

      {/* ── Mobile dropdown menu ────────────────────
          Only renders in the DOM when isMenuOpen is true
          md:hidden → disappears on desktop automatically
      */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-800 border-t border-zinc-700 px-4 py-4">

          {/* Mobile nav links — stacked vertically */}
          <div className="flex flex-col gap-1">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                // closeMenu: clicking a link closes the mobile menu
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-zinc-700 text-amber-400'
                      : 'text-gray-200 hover:bg-zinc-700 hover:text-amber-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Book Now button in mobile menu */}
          <div className="mt-4 pt-4 border-t border-zinc-700">
            <NavLink
              to="/services"
              onClick={closeMenu}
              className="flex items-center justify-center gap-1.5 w-full text-center px-5 py-2.5 rounded-full
                         bg-amber-400 text-zinc-900 font-semibold text-sm
                         hover:bg-amber-300 transition-colors duration-200"
            >
              <Sparkles size={15} />
              Book Now
            </NavLink>
          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar
