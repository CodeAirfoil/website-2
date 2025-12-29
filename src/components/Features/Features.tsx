'use client'
import { TaskCard, Timer as TimerDemo, ProjectStats, GanttChart, FileManager, Invoice, TimelogsChart, ClientTags, Calendar, Proposal, Deliverables, Expenses, ProposalConversion, InvoiceTable } from '../demos'
import { CurrencyDollar, ChartLineUp, Clock, FileText, Calendar as CalendarIcon, Folder, FolderSimple, Timer, Receipt, Users, FileText as FileTextIcon, Wallet, CheckSquare, CalendarBlank, FolderOpen } from '@phosphor-icons/react'
import styles from './Features.module.css'
import shared from '../../styles/shared.module.css'

// FeatureCard component with variants
interface FeatureCardProps {
  title: string
  description: string
  icon?: string | React.ReactNode
  image?: string
  imageAlt?: string
  demo?: React.ReactNode
  textAlign?: 'left' | 'center' | 'right'
  imagePosition?: 'top' | 'bottom' | 'top-clipped' | 'bottom-clipped' | 'left-clipped' | 'right-clipped'
  size?: 'small' | 'medium' | 'large' | 'wide' | 'full' | 'tall'
  className?: string
  noPadding?: boolean
}

// IntroCard component - separate from FeatureCard
interface IntroCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  learnMoreLink?: string
}

const IntroCard = ({ title, description, icon, learnMoreLink }: IntroCardProps) => {
  return (
    <div className={styles.introCard}>
      <div className={styles.introCardContent}>
        {icon && (
          <div className={styles.introCardTitleWithIcon}>
            <div className={styles.introCardIcon}>{icon}</div>
            <h3 className={styles.introCardTitle}>{title}</h3>
          </div>
        )}
        {!icon && <h3 className={styles.introCardTitle}>{title}</h3>}
        <p className={styles.introCardDescription}>{description}</p>
        {learnMoreLink && (
          <a href={learnMoreLink} className={styles.introCardLearnMore}>
            Learn more →
          </a>
        )}
      </div>
    </div>
  )
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
  className = '',
  noPadding = false
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
  ) : (icon && typeof icon === 'string') ? (
    <div className={styles.featureIcon}>{icon}</div>
  ) : null

  // Determine if image should be rendered based on position
  const shouldRenderImage = image && (
    imagePosition === 'top' || 
    imagePosition === 'bottom'
  )

  return (
    <div className={`${styles.featureCard} ${styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]} ${!noPadding ? styles.cardPadding : ''} ${className}`}>
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
  noPadding?: boolean
}

interface FeatureSection {
  id: string
  title: string
  subtitle: string
  features: Feature[]
  headerAlign?: 'left' | 'center' | 'right'
}

const Features = () => {
  const featureSections: FeatureSection[] = [
    {
      id: 'project-management',
      title: 'Project Management & Planning',
      subtitle: 'Organize your work and track progress across all your projects',
      features: [
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
          title: "See the big picture",
          description: "Set key project milestones and track your progress with dynamic visual timelines",
      demo: (
            <div className={styles.demoContainerLarge}>
              <GanttChart />
        </div>
      ),
          size: "full" as const,
      imagePosition: "bottom" as const
        }
      ]
    },
    {
      id: 'time-tracking',
      title: 'Time Tracking',
      subtitle: 'Accurately track your work hours and billable time',
      features: [
    {
      title: "Track every second you work",
      description: "Start a timer and track every moment. Your time is automatically logged for billing",
      demo: (
        <div className={styles.demoContainerMedium}>
          <TimerDemo
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
      title: "Your time, automatically tallied",
      description: "We track your work hours so you can focus on tasks—not spreadsheets",
      demo: (
        <div className={styles.demoContainerMedium}>
          <TimelogsChart />
        </div>
      ),
      size: "wide" as const,
      imagePosition: "bottom" as const
        }
      ]
    },
    {
      id: 'financial-management',
      title: 'Financial Management',
      subtitle: 'Get paid faster and keep accurate financial records',
      features: [
        {
          title: "Everything you've tracked, turned into an invoice",
          description: "Your time entries, tasks, and project data come together to create ready-to-send invoices—automatically",
          demo: (
            <div className={styles.demoContainerMedium}>
              <Invoice />
            </div>
          ),
          size: "large" as const,
          imagePosition: "bottom" as const
        },
        {
          title: "Track business expenses",
          description: "Record and categorize business expenses to keep accurate financial records and maximize deductions",
          demo: (
            <div className={styles.demoContainerMedium}>
              <Expenses />
            </div>
          ),
          size: "large" as const,
          imagePosition: "bottom" as const
        },
        {
          title: "Manage all your invoices in one place",
          description: "View, track, and manage all your invoices with clear status indicators. See what's been paid, what's overdue, and what's still pending",
          demo: (
            <div className={styles.demoContainerLarge}>
              <InvoiceTable />
            </div>
          ),
          size: "full" as const,
          imagePosition: "bottom" as const
        }
      ]
    },
    {
      id: 'client-project-setup',
      title: 'Client & Project Setup',
      subtitle: 'Win more work and deliver on your promises',
      features: [
        {
          title: "Win more work with professional proposals",
          description: "Create beautiful proposals with detailed line items, pricing, and custom terms to win more clients",
          demo: (
            <div className={styles.demoContainerMedium}>
              <Proposal />
            </div>
          ),
          size: "large" as const,
          imagePosition: "bottom" as const
        },
        {
          title: "Track project deliverables",
          description: "Organize and track all project deliverables with clear checklists and completion status",
          demo: (
            <div className={styles.demoContainerMedium}>
              <Deliverables />
            </div>
          ),
          size: "large" as const,
          imagePosition: "bottom" as const
        },
        {
          title: "Accept proposals and automatically convert to projects",
          description: "When a client accepts your proposal, it automatically converts into a project with tasks, deliverables, and milestones—ready to start work immediately",
          demo: (
            <div className={styles.demoContainerLarge}>
              <ProposalConversion />
            </div>
          ),
          size: "full" as const,
          imagePosition: "bottom" as const
        }
      ]
    },
    {
      id: 'organization-integration',
      title: 'Organization & Integration',
      subtitle: 'Stay organized and connected with your existing tools',
      features: [
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
        }
      ]
    }
  ]

  const introSection = {
    id: 'intro',
    title: 'What Airfoil Does',
    subtitle: 'Everything you need to run your freelance business',
    features: [
      {
        title: 'Project Management',
        description: 'Organize and track all your client work with unlimited projects, custom budgets, and visual progress indicators.',
        icon: <FolderSimple size={20} weight="regular" />,
        size: 'medium' as const,
        imagePosition: 'bottom' as const,
        learnMoreLink: '/project-management'
      },
      {
        title: 'Time Tracking',
        description: 'Track every second you work with built-in timers that automatically log time for billing.',
        icon: <Timer size={20} weight="regular" />,
        size: 'medium' as const,
        imagePosition: 'bottom' as const,
        learnMoreLink: '/time-tracking'
      },
      {
        title: 'Invoicing & Payments',
        description: 'Automatically generate professional invoices from your time entries and get paid faster with integrated payment processing.',
        icon: <Receipt size={20} weight="regular" />,
        size: 'medium' as const,
        imagePosition: 'bottom' as const,
        learnMoreLink: '/invoicing'
      },
      {
        title: 'Client Management',
        description: 'Build stronger relationships with a centralized client database and comprehensive relationship insights.',
        icon: <Users size={20} weight="regular" />,
        size: 'medium' as const,
        imagePosition: 'bottom' as const,
        learnMoreLink: '/client-management'
      },
      {
        title: 'Proposals & Quotes',
        description: 'Create beautiful proposals with detailed line items, pricing, and custom terms to win more clients.',
        icon: <FileTextIcon size={20} weight="regular" />,
        size: 'medium' as const,
        imagePosition: 'bottom' as const,
        learnMoreLink: '/proposals'
      },
      {
        title: 'Expense Tracking',
        description: 'Record and categorize business expenses to keep accurate financial records and maximize deductions.',
        icon: <Wallet size={20} weight="regular" />,
        size: 'medium' as const,
        imagePosition: 'bottom' as const,
        learnMoreLink: '/expenses'
      },
      {
        title: 'Deliverables Management',
        description: 'Organize and track all project deliverables with clear checklists and completion status.',
        icon: <CheckSquare size={20} weight="regular" />,
        size: 'medium' as const,
        imagePosition: 'bottom' as const,
        learnMoreLink: '/deliverables'
      },
      {
        title: 'Calendar Integration',
        description: 'Connect to Google Calendar to automatically sync meetings and events with your projects.',
        icon: <CalendarBlank size={20} weight="regular" />,
        size: 'medium' as const,
        imagePosition: 'bottom' as const,
        learnMoreLink: '/calendar'
      },
      {
        title: 'File Storage',
        description: 'Upload and manage documents, assets, and code—neatly organized by project.',
        icon: <FolderOpen size={20} weight="regular" />,
        size: 'medium' as const,
        imagePosition: 'bottom' as const,
        learnMoreLink: '/file-storage'
      }
    ]
  }

  return (
    <section className={styles.features} id="features">
      <div className={shared.container}>
        {featureSections.map((section) => (
          <div key={section.id} className={styles.featureSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTitleGroup}>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <p className={styles.sectionSubtitle}>{section.subtitle}</p>
              </div>
            </div>
        <div className={styles.featuresGrid}>
              {section.features.map((feature, index) => (
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
        ))}
      </div>
    </section>
  )
}

export default Features
export { FeatureCard }