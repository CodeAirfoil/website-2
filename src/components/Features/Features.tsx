'use client'

import { TaskCard, Timer, ProjectStats, GanttChart, FileManager, Invoice, TimelogsChart, ClientTags, Calendar } from '../demos'
import styles from './Features.module.css'
import shared from '../../styles/shared.module.css'

// FeatureCard component with variants
interface FeatureCardProps {
  title: string
  description: string
  icon?: string
  image?: string
  imageAlt?: string
  demo?: React.ReactNode
  textAlign?: 'left' | 'center' | 'right'
  imagePosition?: 'top' | 'bottom' | 'top-clipped' | 'bottom-clipped' | 'left-clipped' | 'right-clipped'
  size?: 'small' | 'medium' | 'large' | 'wide' | 'full' | 'tall'
  className?: string
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  image, 
  imageAlt,
  demo,
  textAlign = 'left',
  imagePosition = 'top',
  size = 'medium',
  className = ''
}: FeatureCardProps) => {
  
  const content = (
    <div className={`${styles.featureContent} ${styles[`textAlign${textAlign.charAt(0).toUpperCase() + textAlign.slice(1)}`]}`}>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  )

  const visual = demo ? (
    <div className={styles.featureDemo}>
      {demo}
    </div>
  ) : image ? (
    <div className={styles.featureImage}>
      <img src={image} alt={imageAlt || title} />
    </div>
  ) : icon ? (
    <div className={styles.featureIcon}>{icon}</div>
  ) : null

  // Determine if image should be rendered based on position
  const shouldRenderImage = image && (
    imagePosition === 'top' || 
    imagePosition === 'bottom'
  )

  return (
    <div className={`${styles.featureCard} ${styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]} ${styles.cardPadding} ${className}`}>
      {imagePosition === 'top' && visual}
      {content}
      {imagePosition === 'bottom' && visual}
    </div>
  )
}

interface Feature {
  title: string
  description: string
  icon?: string
  image?: string
  imageAlt?: string
  demo?: React.ReactNode
  size: 'small' | 'medium' | 'large' | 'wide' | 'full' | 'tall'
  imagePosition?: 'top' | 'bottom' | 'top-clipped' | 'bottom-clipped' | 'left-clipped' | 'right-clipped'
}

interface FeatureSection {
  id: string
  title: string
  subtitle: string
  features: Feature[]
  headerAlign?: 'left' | 'center' | 'right'
}

const Features = () => {
  const allFeatures: Feature[] = [
    {
      title: "Track progress with clarity",
      description: "Monitor revenue, milestones, and tasks insights—all in one glance",
      demo: (
        <div className={styles.demoContainerMedium}>
          <ProjectStats />
        </div>
      ),
      size: "large" as const,
      imagePosition: "bottom" as const
    },
    {
      title: "Visual task planning, simplified.",
      description: "Manage your workload in an intuitive drag-and-drop board with live updates and due dates",
      demo: (
        <div className={styles.demoContainerMedium}>
          <div className={styles.taskCardsStack}>
            <TaskCard
              title="Mobile App Development"
              description="Build a cross-platform mobile app for fitness tracking with real-time data synchronization"
              progress={{ completed: 3, total: 5 }}
              dueDate="5 Days"
              status="completed"
              priority="medium"
              category="Development"
            />
            <TaskCard
              title="Website Redesign for Coffee Shop"
              description="Complete redesign of the website for 'Brew & Bean Coffee Co' including new branding and e-commerce functionality"
              progress={{ completed: 1, total: 4 }}
              dueDate="12 Days"
              status="in-progress"
              priority="high"
              category="Design"
            />
          </div>
        </div>
      ),
      size: "large" as const,
      imagePosition: "bottom" as const
    },
    {
      title: "Sync with your existing calendar",
      description: "Connect to Google Calendar to automatically sync meetings and events with your projects",
      demo: (
        <div className={styles.demoContainerMedium}>
          <Calendar />
        </div>
      ),
      size: "wide" as const,
      imagePosition: "bottom" as const
    },
    {
      title: "Track every second you work",
      description: "Start a timer and track every moment. Your time is automatically logged for billing",
      demo: (
        <div className={styles.demoContainerMedium}>
          <Timer
            isRunning={true}
            elapsedTime="00:12:56"
            taskName="Mobile App Development"
          />
        </div>
      ),
      size: "medium" as const,
      imagePosition: "bottom" as const
    },
    {
      title: "See the big picture",
      description: "Set key project milestones and track your progress with dynamic visual timelines",
      demo: (
        <div className={styles.demoContainerLarge}>
          <GanttChart />
        </div>
      ),
      size: "full" as const,
      imagePosition: "bottom" as const
    },
    {
      title: "Your time, automatically tallied",
      description: "We track your work hours so you can focus on tasks—not spreadsheets",
      demo: (
        <div className={styles.demoContainerMedium}>
          <TimelogsChart />
        </div>
      ),
      size: "wide" as const,
      imagePosition: "bottom" as const
    },
    {
      title: "Lightweight storage",
      description: "Upload and manage documents, assets, and code—neatly organized by project",
      demo: (
        <div className={styles.demoContainerMedium}>
          <div className={styles.fileIconsGrid}>
            {[
              { name: 'doc.svg', delay: '1.6s' },
              { name: 'html.svg', delay: '2s' },
              { name: 'jpg.svg', delay: '1.4s' },
              { name: 'pdf.svg', delay: '1.5s' },
              { name: 'ppt.svg', delay: '6s' },
              { name: 'xls.svg', delay: '1s' },
              { name: 'zip.svg', delay: '4.2s' },
              { name: 'mp3.svg', delay: '3.2s' },
              { name: 'txt.svg', delay: '5.1s' }
            ].map((icon, index) => (
              <div 
                key={icon.name} 
                className={styles.floatingIcon}
                style={{ animationDelay: icon.delay }}
              >
                <img 
                  src={`/images/file-icons/${icon.name}`} 
                  alt={icon.name.replace('.svg', '')}
                  width={64}
                  height={64}
                />
              </div>
            ))}
          </div>
        </div>
      ),
      size: "medium" as const,
      imagePosition: "bottom" as const
    },
    {
      title: "Everything you've tracked, turned into an invoice",
      description: "Your time entries, tasks, and project data come together to create ready-to-send invoices—automatically",
      demo: (
        <div className={styles.demoContainerMedium}>
          <Invoice />
        </div>
      ),
      size: "full" as const,
      imagePosition: "bottom" as const
    }
  ]

  return (
    <section className={styles.features} id="features">
      <div className={shared.container}>
        <div className={styles.featuresHeader}>
          <h2 className={styles.featuresTitle}>
            The Operating System for Independent Work
          </h2>
          <p className={styles.featuresSubtitle}>
            A lightweight, all-in-one toolkit to streamline your freelance workflow—built with intention.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {allFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              image={feature.image}
              imageAlt={feature.imageAlt}
              demo={feature.demo}
              size={feature.size}
              imagePosition={feature.imagePosition}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
export { FeatureCard }