# Beauty Salon Management System

A full-stack web application for a women's beauty salon. Customers can discover services, book appointments, pay deposits, and leave reviews. Admins manage the entire salon operation.

## Tech Stack

**Frontend:** React, Vite, Tailwind CSS, React Router, Axios, React Hook Form, Zod  
**Backend (Phase 6):** Node.js, Express, PostgreSQL, Prisma, JWT

## Features

- Browse salon services by category
- View stylist profiles and specialties
- Book appointments with time slot availability
- Deposit payment with receipt upload
- Customer dashboard with appointment history
- Admin dashboard for full salon management
- Review system with verified customers only

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, PublicLayout
│   └── ui/           # Reusable UI components (Button, Card...)
├── context/          # React Context (Auth, etc.)
├── data/             # Mock data (replaced by API in Phase 6)
├── hooks/            # Custom React hooks
├── pages/            # One file per page/route
└── utils/            # Constants and helper functions
```

## Development Phases

- [x] Phase 1 — Project setup & folder structure
- [ ] Phase 2 — Public website (Home, About, Services, Stylists, Reviews, Gallery, Contact)
- [ ] Phase 3 — Authentication (Register, Login, Protected routes)
- [ ] Phase 4 — Customer dashboard
- [ ] Phase 5 — Admin dashboard
- [ ] Phase 6 — Backend & database
- [ ] Phase 7 — Testing, CI/CD, Deployment
