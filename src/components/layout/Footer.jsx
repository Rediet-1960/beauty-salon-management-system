// ─────────────────────────────────────────────
// Footer.jsx
// 3 columns: Brand | Contact Us | Working Hours
// ─────────────────────────────────────────────

import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe, Send, Clock } from 'lucide-react'
import { salonInfo, workingHours } from '../../data/salon'
import Container from '../ui/Container'

// ── Custom SVG brand icons ─────────────────────
function FacebookIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.26 8.26 0 0 0 4.83 1.56V6.78a4.85 4.85 0 0 1-1.06-.09z" />
    </svg>
  )
}

// ── Reusable social icon button ────────────────
// color       = icon color at rest
// hoverBg     = background color on hover (brand color)
// hoverIcon   = icon color on hover (white for most, black for TikTok)
function SocialLink({ href, label, color, hoverBg, hoverIcon = '#ffffff', children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 flex items-center justify-center rounded-full
           bg-zinc-800 transition-all duration-300
           hover:scale-110 hover:shadow-lg"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverBg;
        e.currentTarget.querySelector("span").style.color = hoverIcon;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "";
        e.currentTarget.querySelector("span").style.color = color;
      }}
    >
      <span style={{ color, display: "block", lineHeight: 0 }}>{children}</span>
    </a>
  );
}

// ── Column heading ─────────────────────────────
function FooterHeading({ children }) {
  return (
    <h3 className="text-white font-bold text-xl mb-8">
      {children}
    </h3>
  )
}

// ── Main Footer ────────────────────────────────
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 text-gray-400">

      {/* 3 equal columns */}
      <Container className="pt-20 pb-14">
        <div className="grid grid-cols-3 gap-20 px-6">

          {/* Column 1 — Brand */}
          <div className="w-full">
            <FooterHeading>{salonInfo.name}</FooterHeading>
            <p className="text-base leading-relaxed mb-8">
              {salonInfo.description}
            </p>
            <div className="flex items-center gap-5">
              <SocialLink href={salonInfo.social.facebook} label="Facebook" color="#1877F2" hoverBg="#1877F2">
                <FacebookIcon size={22} />
              </SocialLink>
              <SocialLink href={salonInfo.social.instagram} label="Instagram" color="#E1306C" hoverBg="#E1306C">
                <InstagramIcon size={22} />
              </SocialLink>
              <SocialLink href={salonInfo.social.tiktok} label="TikTok" color="#ffffff" hoverBg="#ffffff" hoverIcon="#000000">
                <TikTokIcon size={22} />
              </SocialLink>
              <SocialLink href={salonInfo.social.telegram} label="Telegram" color="#29A8EB" hoverBg="#29A8EB">
                <Send size={22} />
              </SocialLink>
            </div>
          </div>

          {/* Column 2 — Working Hours */}
          <div className="w-full">
            <FooterHeading>Working Hours</FooterHeading>
            <ul className="space-y-5">
              {workingHours.map(item => (
                <li key={item.id} className="flex items-start gap-3 text-base">
                  <Clock size={20} className="text-rose-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-300 font-semibold">{item.day}</p>
                    <p className="text-gray-500">
                      {item.isClosed ? 'Closed' : `${item.open} – ${item.close}`}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <address className="not-italic w-full">
            <FooterHeading>Contact Us</FooterHeading>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-base">
                <MapPin size={20} className="text-rose-500 mt-0.5 shrink-0" />
                <span>{salonInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Phone size={20} className="text-rose-500 shrink-0" />
                <a href={`tel:${salonInfo.phone}`}
                  className="hover:text-rose-400 transition-colors duration-200">
                  {salonInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Mail size={20} className="text-rose-500 shrink-0" />
                <a href={`mailto:${salonInfo.email}`}
                  className="hover:text-rose-400 transition-colors duration-200">
                  {salonInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Globe size={20} className="text-rose-500 shrink-0" />
                <a href={`https://${salonInfo.website}`} target="_blank" rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors duration-200">
                  {salonInfo.website}
                </a>
              </li>
            </ul>
          </address>

        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {currentYear} Beauty Salon Management System. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/privacy"
              className="text-gray-500 hover:text-rose-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-zinc-700">|</span>
            <Link to="/terms"
              className="text-gray-500 hover:text-rose-400 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>

    </footer>
  )
}

export default Footer
