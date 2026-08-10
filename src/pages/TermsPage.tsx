function PolicyLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">{title}</h1>
          <div className="prose prose-invert prose-sm sm:prose-base max-w-none text-gray-300 leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms of Service">
      <p>Last updated: July 2026</p>
      <p>Welcome to NexaCore. By accessing or using our website and services, you agree to be bound by these Terms of Service.</p>
      <h3>1. Services</h3>
      <p>NexaCore provides online software tools, SaaS subscriptions, digital workflow resources, and productivity solutions. All services are delivered digitally through online accounts, email instructions, or subscription-based access.</p>
      <h3>2. Account Registration</h3>
      <p>You may need to create an account to access certain services. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
      <h3>3. Subscription and Payment</h3>
      <p>Subscription fees are billed in advance on a monthly basis. All fees are non-refundable except as stated in our Refund Policy. We reserve the right to change pricing with notice.</p>
      <h3>4. Acceptable Use</h3>
      <p>You agree not to misuse our services, attempt unauthorized access, or use our platform for any unlawful purpose. We reserve the right to suspend accounts that violate these terms.</p>
      <h3>5. Digital Delivery</h3>
      <p>All products and services are delivered digitally. No physical products are shipped. Access is granted electronically upon successful payment.</p>
      <h3>6. Limitation of Liability</h3>
      <p>NexaCore provides services on an "as is" basis. We are not liable for indirect damages arising from your use of our services.</p>
      <h3>7. Contact</h3>
      <p>For questions about these terms, contact support@nexacore.com.</p>
    </PolicyLayout>
  )
}
