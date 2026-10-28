import { useState } from "react";
import { config } from "../lib/config";
import { CheckoutModal } from "./CheckoutModal";

type PlanKey = "inspection" | "deposit" | "flatRate";

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<PlanKey | null>(null);

  const plans = [
    { key: "inspection" as PlanKey, ...config.plans.inspection, popular: false },
    { key: "deposit" as PlanKey, ...config.plans.deposit, popular: true },
    { key: "flatRate" as PlanKey, ...config.plans.flatRate, popular: false },
  ];

  const openCheckout = (key: PlanKey) => {
    if (typeof window !== "undefined" && window.whop) {
      window.whop.track("deposit_started", { plan: key });
    }
    setSelectedPlan(key);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            No hidden fees. Choose the option that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? "border-blue-600 shadow-lg scale-[1.02]"
                  : "border-slate-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-600 text-sm mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                <span className="text-slate-500 ml-1">one-time</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openCheckout(plan.key)}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? "bg-blue-700 hover:bg-blue-800 text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                {plan.key === "deposit" ? "Pay Deposit" : "Buy Now"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <CheckoutModal
          planKey={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </section>
  );
}
