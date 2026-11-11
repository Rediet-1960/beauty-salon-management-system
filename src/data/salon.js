// ─────────────────────────────────────────────
// salon.js — Mock data for salon information
// This mirrors exactly what the backend API will return later.
// The Admin can edit this from the Admin Dashboard.
// When backend is ready, replace this with an API call — 
// no changes needed in any component.
// ─────────────────────────────────────────────

export const salonInfo = {
  name: 'My Beauty Salon',
  tagline: 'Where Beauty Meets Excellence',
  description: 'Enhancing confidence through professional beauty services.',
  address: 'Addis Ababa, Ethiopia',
  phone: '+251 900 000 000',
  email: 'contact@mybeautysalon.com',
  website: 'www.mybeautysalon.com',
  social: {
    facebook:  'https://facebook.com',
    instagram: 'https://instagram.com',
    tiktok:    'https://tiktok.com',
    telegram:  'https://t.me',
  },
}

// Hero section content — Admin editable from dashboard later
export const heroContent = {
  headline:        'Where Beauty Meets',
  headlineAccent:  'Confidence',
  description:     'Experience premium hair, skincare, nail, and beauty services delivered by skilled professionals in a relaxing and luxurious environment.',
  primaryBtn:      'Book Appointment',
  secondaryBtn:    'Explore Services',
  // image will be replaced with a real upload from the Admin dashboard
  image:           null,
}

// Trust indicators — Admin editable later
export const trustIndicators = [
  { id: 1, icon: '⭐', value: '4.9', label: 'Rating'         },
  { id: 2, icon: '👩', value: '500+', label: 'Happy Clients' },
  { id: 3, icon: '🏆', value: '',    label: 'Professional Staff' },
]

// Working hours — Admin can update these from the dashboard later.
export const workingHours = [
  { id: 1, day: 'Monday – Friday', open: '8:00 AM', close: '8:00 PM', isClosed: false },
  { id: 2, day: 'Saturday',        open: '9:00 AM', close: '7:00 PM', isClosed: false },
  { id: 3, day: 'Sunday',          open: '9:00 AM', close: '5:00 PM', isClosed: false },
]
