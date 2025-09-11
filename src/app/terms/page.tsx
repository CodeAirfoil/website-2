import { Navigation, SubpageHero, Footer } from '@/components'

export default function TermsPage() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navigation />
      <SubpageHero 
        title="Terms of Service"
        subtitle="The terms and conditions governing your use of Airfoil."
      />
      
      <section style={{ padding: 'var(--space-16) 0' }}>
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
              These Terms of Service ("Terms") govern your use of Airfoil's freelance work management 
              platform. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Acceptance of Terms
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              By creating an account or using our services, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms. If you do not agree to these Terms, 
              you must not use our services.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Description of Service
            </h3>
            <p style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
              Airfoil provides a comprehensive freelance work management platform that includes:
            </p>
            <ul style={{ 
              marginLeft: 'var(--space-6)', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-secondary)'
            }}>
              <li>Project and task management tools</li>
              <li>Time tracking and invoicing features</li>
              <li>File storage and document management</li>
              <li>Client and project analytics</li>
              <li>Collaboration and communication tools</li>
            </ul>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              User Accounts
            </h3>
            <p style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
              To access certain features of our service, you must create an account. You are responsible for:
            </p>
            <ul style={{ 
              marginLeft: 'var(--space-6)', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-secondary)'
            }}>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Subscription and Billing
            </h3>
            <p style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
              Our service offers both free and paid subscription plans:
            </p>
            <ul style={{ 
              marginLeft: 'var(--space-6)', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-secondary)'
            }}>
              <li>Free plans have limited features and usage</li>
              <li>Paid plans are billed monthly or annually</li>
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>Refunds are provided according to our refund policy</li>
              <li>We may change pricing with 30 days notice</li>
            </ul>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Acceptable Use
            </h3>
            <p style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
              You agree not to use our service to:
            </p>
            <ul style={{ 
              marginLeft: 'var(--space-6)', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-secondary)'
            }}>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our service</li>
            </ul>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Data and Privacy
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Your privacy is important to us. Our collection and use of personal information 
              is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Termination
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              You may cancel your account at any time. We may terminate or suspend your account 
              immediately if you violate these Terms. Upon termination, your right to use the 
              service will cease immediately.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Limitation of Liability
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              To the maximum extent permitted by law, Airfoil shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use of 
              our service.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Changes to Terms
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              We reserve the right to modify these Terms at any time. We will notify users of 
              significant changes via email or through our service. Continued use of our service 
              after changes constitutes acceptance of the new Terms.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-12)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-xl)', 
              fontWeight: '600', 
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Contact Information
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              If you have any questions about these Terms of Service, please contact us at{' '}
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
