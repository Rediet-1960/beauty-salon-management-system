import { BrowserRouter, Routes, Route } from 'react-router-dom'

// The Home page is now a single-page landing page with all sections
import Home from './pages/Home'

// These remain as separate pages
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Single-page landing — all public sections live here */}
        <Route path="/" element={<Home />} />

        {/* Separate routes — only for auth and booking */}
        <Route path="/login"            element={<Login />} />
        <Route path="/register"         element={<Register />} />
        <Route path="/book-appointment" element={<Home />} /> {/* placeholder until Phase 4 */}

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
