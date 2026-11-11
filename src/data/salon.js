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

// Working hours — Admin can update these from the dashboard later.
// Each entry has: day label, open time, close time, and a closed flag.
export const workingHours = [
  { id: 1, day: 'Monday – Friday', open: '8:00 AM', close: '8:00 PM', isClosed: false },
  { id: 2, day: 'Saturday',        open: '9:00 AM', close: '7:00 PM', isClosed: false },
  { id: 3, day: 'Sunday',          open: '9:00 AM', close: '5:00 PM', isClosed: false },
]
