export function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Book & Deposit",
      text: "Choose inspection or pay a project deposit. Your card is securely saved on file.",
    },
    {
      num: "2",
      title: "We Complete the Job",
      text: "Our licensed crew arrives on schedule and completes the work to the highest standard.",
    },
    {
      num: "3",
      title: "Final Invoice",
      text: "Remaining balance is billed automatically via Whop Invoice using your saved card — or paid manually.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Simple deposit → job → final invoice flow designed for high-ticket roofing projects.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-14 h-14 rounded-full bg-blue-700 text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
