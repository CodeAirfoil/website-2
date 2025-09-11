import { Navigation, SubpageHero, Pricing, Footer } from '@/components'

export default function PricingPage() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navigation />
      <SubpageHero 
        title="One Price. All Features."
        subtitle="Start free and scale up as you need. No hidden fees, no surprises. Choose the plan that fits your freelance workflow."
        primaryAction={{
          text: "Sign Up",
          href: "/signup"
        }}
      />
      <div id="pricing-plans">
        <Pricing />
      </div>
      <Footer />
    </main>
  )
} 