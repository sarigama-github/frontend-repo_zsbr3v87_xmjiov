export default function Reviews() {
  const reviews = [
    { name: 'Sophia M.', text: 'I use it every evening after work. My knees feel lighter and I sleep better.', rating: 5 },
    { name: 'Daniel K.', text: 'Helped a ton after my ACL recovery. Heat + compression combo is amazing.', rating: 5 },
    { name: 'Linda R.', text: 'Bought for arthritis relief — noticeable difference in two weeks.', rating: 4 },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">Customer Reviews</h2>
          <div className="text-yellow-300">★★★★★ <span className="text-white/70 text-sm">4.8 average</span></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/10 ring-1 ring-white/15 p-6 rounded-2xl text-white">
              <div className="text-yellow-300 text-sm">{'★★★★★'.slice(0, r.rating)}{'☆☆☆☆☆'.slice(0, 5 - r.rating)}</div>
              <p className="mt-3 text-white/80">“{r.text}”</p>
              <div className="mt-4 text-white/90 font-medium">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
