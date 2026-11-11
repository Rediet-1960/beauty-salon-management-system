// PublicLayout wraps all public pages with Navbar + Footer
// Every public page (Home, About, Services...) uses this layout
// This way we don't repeat Navbar/Footer in every single page

import Navbar from './Navbar'
import Footer from './Footer'

function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout
