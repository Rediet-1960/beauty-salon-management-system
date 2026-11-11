import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Public pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Stylists from './pages/Stylists'
import Reviews from './pages/Reviews'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes — accessible to everyone */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stylists" element={<Stylists />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 — catches any unknown route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
