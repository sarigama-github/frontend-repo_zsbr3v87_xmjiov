import Hero from './components/Hero'
import Features from './components/Features'
import Reviews from './components/Reviews'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.05),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.05),transparent_40%)]" />
      <div className="relative">
        {/* Header */}
        <header className="sticky top-0 z-20 backdrop-blur-md bg-slate-900/60 ring-1 ring-white/10">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" className="text-white font-semibold tracking-tight">TheraKnee</a>
            <nav className="hidden sm:flex items-center gap-6 text-white/80">
              <a href="#learn" className="hover:text-white">Features</a>
              <a href="#buy" className="hover:text-white">Buy</a>
              <a href="/test" className="hover:text-white">System</a>
            </nav>
            <a href="#buy" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold shadow shadow-emerald-500/20 transition-colors">
              Order Now
            </a>
          </div>
        </header>

        <main>
          <Hero />
          <Features />
          <Reviews />
          <CTA />
        </main>

        {/* Footer */}
        <footer className="py-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 text-white/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} TheraKnee. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
