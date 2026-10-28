// ==============================
// TEMPLATE CONFIG - Edit these values to rebrand
// ==============================

export const config = {
  // Company
  companyName: "Premier Roofing Co.",
  tagline: "Trusted Roofing Experts Across America",
  phone: "(555) 123-4567",
  email: "hello@premierroofing.com",
  address: "Serving homeowners nationwide",

  // Colors (Tailwind classes)
  colors: {
    primary: "blue-700",
    primaryHover: "blue-800",
    accent: "orange-500",
    dark: "slate-900",
  },

  // Plans (use the Plan IDs you created)
  plans: {
    inspection: {
      id: "plan_DaoMFnwaSClvP",
      name: "Roof Inspection",
      price: 149,
      description: "Comprehensive roof inspection with detailed report",
      features: ["Full visual inspection", "Written report", "Photo documentation", "Priority scheduling"],
    },
    deposit: {
      id: "plan_QygSqo4yrxJ6U",
      name: "Project Deposit",
      price: 500,
      description: "Secure your project slot with a refundable deposit",
      features: ["Locks in your date", "Card saved on file", "Applied to final invoice", "Cancel anytime before work starts"],
    },
    flatRate: {
      id: "plan_yr70QjjJVkojm",
      name: "Flat Rate Service",
      price: 299,
      description: "Fixed-price minor repair or gutter cleaning",
      features: ["Fixed price – no surprises", "Same-day availability", "Licensed technicians", "1-year workmanship warranty"],
    },
  },

  // Services
  services: [
    {
      id: "repair",
      title: "Roof Repair",
      description: "Fast, reliable repairs for leaks, missing shingles, and storm damage.",
      icon: "🔧",
    },
    {
      id: "replacement",
      title: "Roof Replacement",
      description: "Complete roof replacement with premium materials and workmanship warranty.",
      icon: "🏠",
    },
    {
      id: "inspection",
      title: "Roof Inspection",
      description: "Detailed inspection with photos and a clear written report.",
      icon: "🔍",
    },
  ],

  // Service areas
  serviceAreas: [
    "Texas", "Florida", "California", "Georgia", "North Carolina",
    "Arizona", "Colorado", "Virginia", "Tennessee", "Ohio",
  ],

  // Reviews
  reviews: [
    {
      name: "Michael R.",
      location: "Austin, TX",
      text: "They replaced our entire roof in two days. Clean, professional, and the price was exactly what they quoted.",
      rating: 5,
    },
    {
      name: "Sarah L.",
      location: "Tampa, FL",
      text: "Had a leak after the storm. They came the next morning, fixed it, and left the place spotless. Highly recommend.",
      rating: 5,
    },
    {
      name: "James K.",
      location: "Phoenix, AZ",
      text: "The inspection was thorough and the report was easy to understand. No pressure sales, just honest advice.",
      rating: 5,
    },
  ],
};
