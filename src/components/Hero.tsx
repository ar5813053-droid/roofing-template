import { config } from "../lib/config";

export function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="text-blue-300 font-medium mb-3 tracking-wide uppercase text-sm">
            Licensed • Insured • Trusted
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {config.tagline}
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-xl">
            From emergency repairs to full replacements — we deliver quality workmanship 
            and honest pricing. Get your free estimate in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#estimate" className="inline-flex justify-center items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition text-center">
              Request Free Estimate
            </a>
            <a href="#pricing" className="inline-flex justify-center items-center border border-slate-500 hover:border-white text-white font-semibold px-8 py-3.5 rounded-lg transition text-center">
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
