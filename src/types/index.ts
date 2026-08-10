export interface Plan {
  name: string
  price: string
  period: string
  desc: string
  features: string[]
  cta: string
  stripeUrl: string
  highlight: boolean
}

export interface Service {
  title: string
  desc: string
}

export interface Step {
  step: string
  title: string
  desc: string
}

export interface FAQItem {
  q: string
  a: string
}
