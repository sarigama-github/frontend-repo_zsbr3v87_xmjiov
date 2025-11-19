import { useEffect, useState } from 'react'

export default function CTA() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleCheckout = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    const form = new FormData(e.currentTarget)
    const payload = {
      items: [
        { product_id: 'featured', title: 'TheraKnee Pro', price: 129.0, quantity: 1 }
      ],
      subtotal: 129.0,
      shipping: 0,
      total: 129.0,
      customer_name: form.get('name'),
      customer_email: form.get('email'),
      customer_phone: form.get('phone'),
      shipping_address: form.get('address'),
      city: form.get('city'),
      country: form.get('country'),
      postal_code: form.get('postal'),
      notes: form.get('notes')
    }

    try {
      const res = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Checkout failed')
      const data = await res.json()
      setSuccess(`Order received! ID: ${data.order_id}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="buy" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white/10 ring-1 ring-white/15 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold">Fast, secure checkout</h3>
            <p className="text-white/70 mt-2">We’ll email your receipt and shipping updates. No account required.</p>

            <form onSubmit={handleCheckout} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="bg-white/5 ring-1 ring-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50" name="name" placeholder="Full name" required />
              <input className="bg-white/5 ring-1 ring-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50" name="email" type="email" placeholder="Email" required />
              <input className="bg-white/5 ring-1 ring-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 sm:col-span-2" name="phone" placeholder="Phone (optional)" />
              <input className="bg-white/5 ring-1 ring-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 sm:col-span-2" name="address" placeholder="Shipping address" required />
              <input className="bg-white/5 ring-1 ring-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50" name="city" placeholder="City" required />
              <input className="bg-white/5 ring-1 ring-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50" name="country" placeholder="Country" required />
              <input className="bg-white/5 ring-1 ring-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50" name="postal" placeholder="Postal code" required />
              <textarea className="bg-white/5 ring-1 ring-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 sm:col-span-2" name="notes" placeholder="Notes (optional)" rows="3"></textarea>

              <button disabled={loading} className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold shadow-lg shadow-emerald-500/20 transition-colors">
                {loading ? 'Processing...' : 'Place Order'}
              </button>

              {success && <p className="sm:col-span-2 text-emerald-300">{success}</p>}
              {error && <p className="sm:col-span-2 text-rose-300">{error}</p>}
            </form>
          </div>

          <div className="bg-white/5 ring-1 ring-white/10 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold">What’s included</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>• TheraKnee Pro device</li>
              <li>• USB-C charging cable</li>
              <li>• Breathable knee wrap</li>
              <li>• Quick-start guide</li>
              <li>• 1-year warranty</li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-emerald-400/10 text-emerald-200 ring-1 ring-emerald-400/20">
              30-day risk-free trial — love it or return it for a full refund.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
