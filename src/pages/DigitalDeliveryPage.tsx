export default function DigitalDeliveryPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">Digital Delivery Policy</h1>
          <div className="text-gray-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>Last updated: July 2026</p>
            <p>
              NexaCore provides online software tools, SaaS subscriptions, digital workflow resources, productivity solutions, and cloud-based account access. All products and services are delivered digitally through online accounts, email instructions, or subscription-based access. NexaCore does not sell or ship physical products.
            </p>
            <p>
              Customers receive access instructions by email or through their online account after successful payment. If a customer has trouble accessing the service, they may contact support at{' '}
              <a href="mailto:support@nexacore.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">support@nexacore.com</a>.
            </p>
            <h3 className="text-lg font-semibold text-white mt-6">What to Expect After Payment</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>A confirmation email with access instructions will be sent to the email address you provided.</li>
              <li>You may also access your subscription through your online account dashboard.</li>
              <li>Access is typically granted immediately or within a few minutes of successful payment.</li>
            </ul>
            <h3 className="text-lg font-semibold text-white mt-6">No Physical Shipping</h3>
            <p>
              All NexaCore services are digital. We do not manufacture, warehouse, or ship any physical products. There are no shipping fees, delivery times, or tracking numbers associated with any purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
