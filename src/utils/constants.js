// App-wide constants

export const APP_NAME = 'My Beauty Salon'
export const APP_TAGLINE = 'Where Beauty Meets Excellence'

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  STYLISTS: '/stylists',
  REVIEWS: '/reviews',
  GALLERY: '/gallery',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  ADMIN: '/admin',
}

// Navigation links used by both Navbar and Footer
// Add or remove a page here and both components update automatically
export const NAV_LINKS = [
  { label: 'Home',     path: '/'         },
  { label: 'About',    path: '/about'    },
  { label: 'Services', path: '/services' },
  { label: 'Stylists', path: '/stylists' },
  { label: 'Gallery',  path: '/gallery'  },
  { label: 'Reviews',  path: '/reviews'  },
  { label: 'Contact',  path: '/contact'  },
]

export const APPOINTMENT_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  NO_SHOW: 'no_show',
}

export const PAYMENT_STATUS = {
  NOT_PAID: 'not_paid',
  WAITING: 'waiting_verification',
  VERIFIED: 'verified',
  REJECTED: 'rejected',
}
