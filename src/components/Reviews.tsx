import { config } from "../lib/config";

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What Homeowners Say</h2>
          <p className="text-slate-600">Real reviews from real customers</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {config.reviews.map((review) => (
            <div key={review.name} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-orange-400">★</span>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-semibold text-slate-900">{review.name}</p>
                <p className="text-sm text-slate-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
