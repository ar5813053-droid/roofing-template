import { config } from "../lib/config";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">{config.companyName}</h3>
            <p className="text-sm text-slate-400 max-w-xs">{config.tagline}</p>
          </div>
          <div className="text-sm space-y-1">
            <p>{config.phone}</p>
            <p>{config.email}</p>
            <p>{config.address}</p>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} {config.companyName}. All rights reserved. 
          Built as a Whop Websites template.
        </div>
      </div>
    </footer>
  );
}
