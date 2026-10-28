import { config } from "../lib/config";

export function ServiceArea() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Service Area</h2>
          <p className="text-slate-600">Proudly serving homeowners across the United States</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {config.serviceAreas.map((area) => (
            <span
              key={area}
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
