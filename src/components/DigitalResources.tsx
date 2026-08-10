const products = [
  {
    name: 'Workflow Template Pack',
    price: '$29',
    period: 'one-time',
    desc: 'A downloadable set of digital workflow templates, productivity resources, and ready-to-use business organization materials.',
    cta: 'Buy Now',
    url: 'https://buy.stripe.com/4gM14geB2cqhcxcbHe7AI04',
  },
  {
    name: 'Onboarding & Setup Guide',
    price: '$59',
    period: 'one-time',
    desc: 'A digital onboarding and setup resource package designed to help customers get started with NexaCore tools and organize their workflow more efficiently.',
    cta: 'Buy Now',
    url: 'https://buy.stripe.com/4gMeV6csU1LDfJo5iQ7AI03',
  },
]

export default function DigitalResources() {
  return (
    <section data-component="src/components/DigitalResources.tsx" className="py-16 sm:py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading">Additional Digital Resources</h2>
          <p className="section-subheading mx-auto">One-time purchases to complement your subscription. All delivered digitally.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {products.map((p) => (
            <div key={p.name} className="glass-card p-6 sm:p-8 flex flex-col">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{p.name}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">{p.price}</span>
                  <span className="text-gray-500 text-sm ml-1">{p.period}</span>
                </div>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-sm sm:text-base"
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs sm:text-sm text-gray-500 mt-8 sm:mt-10">
          All resources are delivered digitally. No physical products are shipped.
        </p>
      </div>
    </section>
  )
}
