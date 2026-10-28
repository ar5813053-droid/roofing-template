import { useEffect } from "react";
import { config } from "../lib/config";
import {
  WhopElements,
  Checkout,
  CheckoutElement,
  ExpressCheckoutElement,
  BrandingElement,
} from "@whop/elements-react";
import { loadWhop } from "@whop/elements";

type PlanKey = "inspection" | "deposit" | "flatRate";

interface Props {
  planKey: PlanKey;
  onClose: () => void;
}

export function CheckoutModal({ planKey, onClose }: Props) {
  const plan = config.plans[planKey];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-slate-900">{plan.name}</h3>
            <p className="text-slate-500 text-sm">${plan.price} one-time</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <WhopElements elements={loadWhop()}>
            <Checkout
              plan={plan.id}
              returnUrl={typeof window !== "undefined" ? window.location.origin + "/?checkout=success" : undefined}
              onComplete={(completion) => {
                console.log("Checkout complete", completion);
                // You can close the modal or redirect here
              }}
            >
              {/* Express wallets first (Apple Pay / Google Pay) */}
              <div className="mb-4">
                <ExpressCheckoutElement />
              </div>

              {/* Full checkout form */}
              <CheckoutElement />

              {/* Required BrandingElement */}
              <div className="mt-4">
                <BrandingElement />
              </div>
            </Checkout>
          </WhopElements>
        </div>
      </div>
    </div>
  );
}
