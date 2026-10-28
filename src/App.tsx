import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { HowItWorks } from "./components/HowItWorks";
import { Financing } from "./components/Financing";
import { ServiceArea } from "./components/ServiceArea";
import { Reviews } from "./components/Reviews";
import { EstimateForm } from "./components/EstimateForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <HowItWorks />
        <Financing />
        <ServiceArea />
        <Reviews />
        <EstimateForm />
      </main>
      <Footer />
    </div>
  );
}
