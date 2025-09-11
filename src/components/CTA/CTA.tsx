import styles from './CTA.module.css'
import shared from '../../styles/shared.module.css'

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={shared.container}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
          Ready to simplify and streamline your freelance workflow?
          </h2>
          <p className={styles.ctaDescription}>
            Join thousands of freelancers who are already using Airfoil to track time, manage projects, and get paid faster.
          </p>
          <div className={styles.ctaActions}>
            <a href="/signup" className={`${shared.btn} ${shared.btnPrimary} ${styles.ctaButton}`}>
              Get Started Free
            </a>
            <a href="/pricing" className={`${shared.btn} ${shared.btnSecondary}`}>
              View Pricing
            </a>
          </div>
          <p className={styles.ctaSubtext}>
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA
