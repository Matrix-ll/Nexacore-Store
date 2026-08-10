export default function RefundPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">Refund Policy</h1>
          <div className="text-gray-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>Last updated: July 2026</p>
            <p>
              NexaCore provides digital software access and online subscription services. Because our products are delivered digitally, customers may request a refund if they are unable to access the purchased service, were charged incorrectly, or experienced a technical issue that prevents use of the service.
            </p>
            <h3 className="text-lg font-semibold text-white mt-6">When Refunds Are Available</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>You are unable to access the digital service after purchase due to a technical issue on our end.</li>
              <li>You were charged incorrectly or charged multiple times for the same subscription period.</li>
              <li>You experienced a technical issue that prevents use of the service and our support team was unable to resolve it.</li>
            </ul>
            <h3 className="text-lg font-semibold text-white mt-6">How to Request a Refund</h3>
            <p>
              Refund requests can be sent to{' '}
              <a href="mailto:support@nexacore.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">support@nexacore.com</a>.
              Please include your account email and a description of the issue. Approved refunds will be processed back to the original payment method within 5-10 business days.
            </p>
            <h3 className="text-lg font-semibold text-white mt-6">Subscription Cancellation</h3>
            <p>
              You may cancel your subscription at any time by contacting support. Cancellation stops future billing but does not automatically refund previous charges unless they meet the refund criteria above.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
