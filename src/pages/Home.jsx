// Home page — the main landing page of the salon
// For now it just shows the Navbar so we can test it
// We will add sections (Hero, Services preview, etc.) one by one

import Navbar from '../components/layout/Navbar'

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      {/* Temporary placeholder content */}
      <div className="flex flex-col items-center justify-center h-96">
        <h1 className="text-4xl font-bold text-amber-400">
          Welcome to My Beauty Salon
        </h1>
        <p className="text-gray-400 mt-4">
          I will build this section by section
        </p>
      </div>
    </div>
  )
}

export default Home
