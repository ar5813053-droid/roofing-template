import { config } from "../lib/config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl text-slate-900">
          {config.companyName}
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-blue-700 transition">Services</a>
          <a href="#pricing" className="hover:text-blue-700 transition">Pricing</a>
          <a href="#reviews" className="hover:text-blue-700 transition">Reviews</a>
          <a href="#estimate" className="hover:text-blue-700 transition">Contact</a>
        </nav>
        <a href="#estimate" className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">
          Free Estimate
        </a>
      </div>
    </header>
  );
}
