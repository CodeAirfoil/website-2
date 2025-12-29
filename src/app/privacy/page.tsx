import { Navigation, SubpageHero, Footer } from '@/components'

export default function PrivacyPage() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navigation />
      <SubpageHero 
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />
      
      <section style={{ padding: 'var(--space-16) 0', backgroundColor: '#FFFFFF' }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '0 var(--space-6)',
          lineHeight: '1.6'
        }}>
          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ 
              fontSize: 'var(--font-size-2xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-6)',
              color: 'var(--color-text-primary)'
            }}>
              Last Updated: January 2025
            </h2>
            
            <p style={{ 
              fontSize: 'var(--font-size-lg)', 
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-8)'
            }}>
              At Airfoil, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our freelance work management platform.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Information We Collect
            </h3>
            <p style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support. This may include:
            </p>
            <ul style={{ 
              marginLeft: 'var(--space-6)', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-secondary)'
            }}>
              <li>Name, email address, and contact information</li>
              <li>Account credentials and profile information</li>
              <li>Project data, time logs, and work-related content</li>
              <li>Payment and billing information</li>
              <li>Communication preferences and settings</li>
            </ul>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              How We Use Your Information
            </h3>
            <p style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
              We use the information we collect to:
            </p>
            <ul style={{ 
              marginLeft: 'var(--space-6)', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-secondary)'
            }}>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions</li>
            </ul>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Information Sharing
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share your information 
              with trusted third-party service providers who assist us in operating our platform, 
              conducting business, or servicing you.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Data Security
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet or electronic storage is 100% secure.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Your Rights
            </h3>
            <p style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
              You have the right to:
            </p>
            <ul style={{ 
              marginLeft: 'var(--space-6)', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-secondary)'
            }}>
              <li>Access and update your personal information</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Contact us with privacy concerns</li>
            </ul>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Contact Us
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hello@airfoil.app" style={{ color: 'var(--color-blue-600)' }}>
                hello@airfoil.app
              </a>
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
