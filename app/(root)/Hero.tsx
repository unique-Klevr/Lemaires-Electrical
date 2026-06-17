import { Clock, ShieldCheck, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-zinc-900 to-stone-900 py-24 text-white md:py-32" id="hero">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 md:flex-row">
        <div className="max-w-2xl space-y-6 md:w-1/2">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">Lemaire&apos;s Electrical Services</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Premium Electrical Services Built on Trust & Integrity</h1>
          <p className="text-lg leading-8 text-zinc-200 md:text-xl">Proudly Firefighter‑Owned & Operated. Serving homes and businesses across Louisiana and Texas.</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="tel:3375223221" className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300">Call Now: (337) 522‑3221</a>
            <a href="mailto:info@lemaireelectrical.com" className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950">Get a Free Estimate</a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/10 p-6 shadow-2xl">
            <div className="absolute right-6 top-6 rounded-full bg-amber-300/20 p-5 text-amber-200">
              <Zap size={56} strokeWidth={1.7} />
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-wider text-zinc-300">Licensed service</p>
                <p className="mt-2 text-3xl font-semibold">Residential & Commercial</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-md bg-slate-950/65 p-4">
                  <ShieldCheck className="mb-3 text-amber-300" size={28} />
                  <p className="font-semibold">Safety-first repairs</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-300">Trusted diagnostics, upgrades, and emergency service.</p>
                </div>
                <div className="rounded-md bg-slate-950/65 p-4">
                  <Clock className="mb-3 text-amber-300" size={28} />
                  <p className="font-semibold">Responsive scheduling</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-300">Dependable electrical help when the job cannot wait.</p>
                </div>
              </div>
              <div className="h-2 rounded-full bg-zinc-700">
                <div className="h-full w-3/4 rounded-full bg-amber-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
