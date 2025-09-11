import styles from './SubpageHero.module.css'
import shared from '../../styles/shared.module.css'

interface SubpageHeroProps {
  title: string
  subtitle: string
  primaryAction?: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
}

const SubpageHero = ({ 
  title, 
  subtitle, 
  primaryAction, 
  secondaryAction 
}: SubpageHeroProps) => {
  return (
    <section className={styles.hero}>
      <div className={shared.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              {title}
            </h1>
            <p className={styles.heroSubtitle}>
              {subtitle}
            </p>
            {(primaryAction || secondaryAction) && (
              <div className={styles.heroActions}>
                {primaryAction && (
                  <a href={primaryAction.href} className={`${shared.btn} ${shared.btnPrimary} ${shared.btnLarge} ${styles.heroCta}`}>
                    {primaryAction.text}
                  </a>
                )}
                {secondaryAction && (
                  <a href={secondaryAction.href} className={`${shared.btn} ${shared.btnSecondary}`}>
                    {secondaryAction.text}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubpageHero 