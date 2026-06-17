import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-navy-900 to-navy-800 py-32 text-white" id="hero">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold">Premium Electrical Services Built on Trust & Integrity</h1>
          <p className="text-lg md:text-xl">Proudly Firefighter‑Owned & Operated. Serving Homes and Businesses Across Louisiana and Texas.</p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="tel:3375223221" className="bg-gold-400 text-navy-900 px-6 py-3 rounded-full font-medium hover:bg-gold-500 transition">Call Now: (337) 522‑3221</a>
            <a href="#contact" className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-navy-900 transition">Get a Free Estimate</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src="/hero-placeholder.png" alt="Electrical team picture" width={600} height={400} className="rounded-md" />
        </div>
      </div>
    </section>
  )
}
