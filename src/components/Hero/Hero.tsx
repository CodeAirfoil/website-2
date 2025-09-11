import styles from './Hero.module.css'
import shared from '../../styles/shared.module.css'
import { Dashboard } from '../demos'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={shared.containerWide}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
            Beautifully lightweight freelance work management
            </h1>
            <p className={styles.heroSubtitle}>
            The all-in-one platform that helps freelancers and independent workers track time, manage projects, and get paid faster.
            </p>
            <div className={styles.heroActions}>
              <a href="/download/mac" className={`${shared.btn} ${shared.btnSecondary} ${shared.btnLarge} ${styles.heroDownload}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on Mac
              </a>
              <a href="https://dashboard.airfoil.app" className={`${shared.btn} ${shared.btnPrimary} ${shared.btnLarge} ${styles.heroCta}`}>
                Get Started Free
              </a>
            </div>
         
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.heroImageContainer}>
              <Dashboard className={styles.heroImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero