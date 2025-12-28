'use client'

import { Navigation, SubpageHero, Footer } from '@/components'
import shared from '@/styles/shared.module.css'
import featureStyles from '@/components/Features/Features.module.css'
import styles from './deliverables.module.css'
import { CheckSquare, FolderSimple, CalendarBlank, FileText } from '@phosphor-icons/react'

// IntroCard component - same as Features
interface IntroCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  learnMoreLink?: string
}

const IntroCard = ({ title, description, icon, learnMoreLink }: IntroCardProps) => {
  return (
    <div className={featureStyles.introCard}>
      <div className={featureStyles.introCardContent}>
        {icon && (
          <div className={featureStyles.introCardTitleWithIcon}>
            <div className={featureStyles.introCardIcon}>{icon}</div>
            <h3 className={featureStyles.introCardTitle}>{title}</h3>
          </div>
        )}
        {!icon && <h3 className={featureStyles.introCardTitle}>{title}</h3>}
        <p className={featureStyles.introCardDescription}>{description}</p>
        {learnMoreLink && (
          <a href={learnMoreLink} className={featureStyles.introCardLearnMore}>
            Learn more →
          </a>
        )}
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Log Deliverables',
    description: 'Log project deliverables and completion dates. Keep a comprehensive record of all work shipped to clients.',
    icon: <CheckSquare size={20} weight="regular" />
  },
  {
    title: 'Link to Projects & Milestones',
    description: 'Link deliverables to projects and milestones for better organization and tracking across your entire workflow.',
    icon: <FolderSimple size={20} weight="regular" />
  },
  {
    title: 'Status Tracking',
    description: 'Track deliverable status with clear indicators: in progress, completed, or delivered. Visual progress at a glance.',
    icon: <CalendarBlank size={20} weight="regular" />
  },
  {
    title: 'Complete Record',
    description: 'Keep a permanent record of all work shipped. Never lose track of what you\'ve delivered and when.',
    icon: <FileText size={20} weight="regular" />
  }
]

export default function DeliverablesPage() {
  return (
    <main className={styles.page}>
      <Navigation />
      <SubpageHero
        title="Deliverables Management"
        subtitle="Organize and track all project deliverables with clear checklists and completion status. Keep your projects on track and your clients informed."
        primaryAction={{
          text: 'Get Started',
          href: 'https://dashboard.airfoil.app/auth?mode=register'
        }}
        secondaryAction={{
          text: 'View Pricing',
          href: '/pricing'
        }}
      />
      <section className={`${shared.container} ${styles.content}`}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>
            Track What You've Delivered
          </h2>
          <p className={styles.sectionDescription}>
            Airfoil makes it easy to organize, track, and deliver on your project commitments. Create detailed checklists, set completion status, and keep everyone in the loop.
          </p>
          
          <div className={featureStyles.introCardsGrid}>
            {features.map((feature, index) => (
              <IntroCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

