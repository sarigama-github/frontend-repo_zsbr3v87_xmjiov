export default function Features() {
  const items = [
    {
      title: 'Dynamic Air Compression',
      desc: 'Three intensity levels gently improve circulation and reduce stiffness.',
      emoji: '💨'
    },
    {
      title: 'Soothing Heat Therapy',
      desc: 'Adjustable warmth helps relax muscles and ease joint discomfort.',
      emoji: '🔥'
    },
    {
      title: 'Targeted Vibration',
      desc: 'Relieves soreness and supports faster post-workout recovery.',
      emoji: '🎯'
    },
    {
      title: 'Ergonomic Wrap Design',
      desc: 'Breathable, lightweight, and fits either knee comfortably.',
      emoji: '🧵'
    },
  ]

  return (
    <section id="learn" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Why customers love TheraKnee Pro</h2>
        <p className="text-white/70 text-center mt-3 max-w-2xl mx-auto">Engineered for daily relief and long-term joint health, built with premium materials and smart safety features.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-6 text-white">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
