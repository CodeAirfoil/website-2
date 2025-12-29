import { Navigation, SubpageHero, Footer } from '@/components'
import { Deliverables } from '@/components/demos'

export default function DeliverablesPage() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navigation />
      <SubpageHero 
        title="Project Deliverables"
        subtitle="Track all your project deliverables and ensure nothing falls through the cracks."
      />
      <div style={{ padding: 'var(--space-16) 0' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 var(--space-6)'
        }}>
          <Deliverables />
        </div>
      </div>
      <Footer />
    </main>
  )
}
