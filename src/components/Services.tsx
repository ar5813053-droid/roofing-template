import { config } from "../lib/config";

declare global {
  interface Window {
    whop?: { track: (event: string, data?: Record<string, any>) => void };
  }
}

export function Services() {
  const handleServiceClick = (serviceId: string) => {
    if (typeof window !== "undefined" && window.whop) {
      window.whop.track("service_viewed", { service: serviceId });
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Professional roofing solutions tailored to protect your home and investment.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {config.services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition cursor-pointer"
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
