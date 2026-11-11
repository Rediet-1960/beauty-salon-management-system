import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Navbar />

      {/* Page content grows to fill space, pushing Footer to bottom */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-amber-400">
          Welcome to My Beauty Salon
        </h1>
        <p className="text-gray-400 mt-4">
          I will build this section by section
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default Home
