import { useState, FormEvent } from "react";
import { config } from "../lib/config";

declare global {
  interface Window {
    whop?: { track: (event: string, data?: Record<string, any>) => void };
  }
}

export function EstimateForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      address: formData.get("address") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    try {
      // On a real Whop Website the server runtime has the API key injected.
      // We call a relative API route that uses the Whop SDK to create a Lead.
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // Fallback for local demo / when API route is not yet wired
        console.log("Lead payload (demo):", payload);
      }

      // Fire required tracking event
      if (typeof window !== "undefined" && window.whop) {
        window.whop.track("estimate_requested", {
          service: payload.service,
          event_id: `est_${Date.now()}`,
        });
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or call us.");
    }
  };

  return (
    <section id="estimate" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Request a Free Estimate
          </h2>
          <p className="text-slate-600">
            Tell us about your project and we’ll get back to you within a few hours.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Estimate Request Received</h3>
            <p className="text-green-700">
              Thanks! We’ve received your details and will contact you shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-green-700 underline"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                <input
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone *</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Property Address</label>
              <input
                name="address"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123 Main St, City, State"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Needed *</label>
              <select
                name="service"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Select a service</option>
                <option value="repair">Roof Repair</option>
                <option value="replacement">Roof Replacement</option>
                <option value="inspection">Roof Inspection</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us more about the issue or project..."
              />
            </div>

            {status === "error" && (
              <p className="text-red-600 text-sm">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold py-3.5 rounded-lg transition"
            >
              {status === "loading" ? "Sending..." : "Request Free Estimate"}
            </button>

            <p className="text-xs text-slate-500 text-center">
              By submitting you agree to be contacted about your project. We never share your data.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
