import { useEffect, useState } from 'react'

export default function Hero() {
  const [product, setProduct] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/products`).then(res => res.json()).then(data => {
      setProduct(data[0])
    }).catch(() => {})
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.15),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 ring-1 ring-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            In stock · Free 3–5 day shipping
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            TheraKnee Pro
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-sky-300"> Heat & Air Compression</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80 max-w-xl">
            Soothe knee pain, boost circulation, and recover faster with adjustable heat, air compression, and vibration — all in a breathable, ergonomic wrap.
          </p>

          {product && (
            <div className="mt-8 flex items-end gap-6">
              <div className="text-white">
                <div className="text-3xl font-bold">${'{'}product.price.toFixed(2){'}'}</div>
                {product.compare_at_price && (
                  <div className="text-white/60 line-through text-sm">${'{'}product.compare_at_price.toFixed(2){'}'}</div>
                )}
              </div>
              <a href="#buy" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold shadow-lg shadow-emerald-500/20 transition-colors">
                Buy Now
              </a>
              <a href="#learn" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold ring-1 ring-white/20 transition-colors">
                Learn More
              </a>
            </div>
          )}
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-tr from-emerald-400/20 to-sky-400/20 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/20">
            <img
              src={product?.images?.[0] || 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop'}
              alt="Knee massager"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
