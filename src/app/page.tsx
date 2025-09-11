import { Navigation, Hero, Features, CTA, Footer } from '@/components'

export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navigation />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}