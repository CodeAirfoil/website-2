'use client'

import { Navigation, Hero, CTA, Footer, ScrollableSection } from '@/components'
import { TaskCard, ProjectStats, GanttChart, Timer, TimelogsChart, ClientTags, Invoice, Proposal, Expenses, InvoiceTable, Deliverables, Calendar, Subtasks } from '@/components/demos'
import { Flag, CircleDashed, CircleHalf, CheckCircle } from '@phosphor-icons/react'
import styles from './page.module.css'

export default function Home() {
  const featureSections = [
    {
      id: 'project-management',
      title: 'Project Management',
      activeBgColor: 'var(--color-brand-green-pale)',
      content: (
        <div className={styles.sectionContainer}>
          <div className={`${styles.contentCard} ${styles.cardWide}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Track progress with clarity</h3>
              <p className={styles.cardDescription}>Monitor revenue, milestones, and task insights—all in one glance. Create unlimited projects with custom budgets and timelines, and track progress with visual status indicators.</p>
            </div>
            <ProjectStats />
          </div>
          <div className={`${styles.contentCard} ${styles.cardHalf}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Track Project Deliverables</h3>
              <p className={styles.cardDescription}>Keep track of all project deliverables and ensure nothing falls through the cracks. Mark items as complete and monitor progress in real-time.</p>
            </div>
            <Deliverables />
          </div>
          <div className={`${styles.contentCard} ${styles.cardHalf}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>All Your Files Managed</h3>
              <p className={styles.cardDescription}>Upload and manage documents, assets, and code—neatly organized by project. Support for all file types with easy access and organization.</p>
            </div>
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
              ].map((icon) => (
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
        </div>
      )
    },
    {
      id: 'task-management',
      title: 'Task Management',
      activeBgColor: 'var(--color-brand-lavender)',
      content: (
        <div className={styles.sectionContainer}>
          <div className={`${styles.contentCard} ${styles.cardHalf}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Task Management</h3>
              <p className={styles.cardDescription}>Stay on top of everything that needs to get done with powerful task management features. Create tasks with priorities, due dates, and time estimates, then organize them in List view or visual Kanban boards.</p>
            </div>
            <div className={styles.taskCardsStack}>
              <TaskCard
                title="Website Redesign for Coffee Shop"
                description="Complete redesign of the website for 'Brew & Bean Coffee Co' including new branding and e-commerce functionality"
                progress={{ completed: 1, total: 4 }}
                dueDate="12 Days"
                status="in-progress"
                priority="high"
                category="Design"
              />
              <TaskCard
                title="Mobile App Development"
                description="Build a cross-platform mobile app for fitness tracking with real-time data synchronization"
                progress={{ completed: 3, total: 5 }}
                dueDate="5 Days"
                status="completed"
                priority="medium"
                category="Development"
              />
            </div>
          </div>
          <div className={`${styles.contentCard} ${styles.cardHalf}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Advanced Features</h3>
              <p className={styles.cardDescription}>Powerful tools for complex workflows that scale with your business. Filter and sort by status, priority, project, or deadline, and use drag-and-drop organization to reprioritize on the fly.</p>
              <div className={styles.reminderTags}>
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <CircleDashed size={14} weight="regular" />
                    <span>To Do</span>
                  </div>
                  <div className={`${styles.tag} ${styles.statusInProgress}`}>
                    <CircleHalf size={14} weight="fill" />
                    <span>In Progress</span>
                  </div>
                  <div className={`${styles.tag} ${styles.statusDone}`}>
                    <CheckCircle size={14} weight="fill" />
                    <span>Done</span>
                  </div>
                  <div className={`${styles.tag} ${styles.priorityLow}`}>
                    <Flag size={14} weight="fill" />
                    <span>Low</span>
                  </div>
                  <div className={`${styles.tag} ${styles.priorityMedium}`}>
                    <Flag size={14} weight="fill" />
                    <span>Medium</span>
                  </div>
                  <div className={`${styles.tag} ${styles.priorityHigh}`}>
                    <Flag size={14} weight="fill" />
                    <span>High</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.contentCard} ${styles.cardWide} ${styles.subtasksCardLayout}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Subtasks</h3>
              <p className={styles.cardDescription}>Tasks within tasks. Break down complex work into manageable subtasks and track progress at every level of detail.</p>
            </div>
            <div className={styles.subtasksDemo}>
              <Subtasks />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'time-tracking',
      title: 'Time Tracking',
      activeBgColor: 'var(--color-brand-cream)',
      content: (
        <div className={styles.sectionContainer}>
          <div className={`${styles.contentCard} ${styles.cardHalf}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Time Tracking</h3>
              <p className={styles.cardDescription}>Track time as you work with precision and ease. Use the built-in timer or add manual time entries, then associate them with specific tasks and projects.</p>
            </div>
            <Timer />
          </div>
          <div className={`${styles.contentCard} ${styles.cardHalf}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Time Analytics</h3>
              <p className={styles.cardDescription}>Visualize your productivity and understand how you spend your time. View time breakdowns by day, week, or month with beautiful charts, and export timesheets for client reporting.</p>
            </div>
            <TimelogsChart />
          </div>
        </div>
      )
    },
    {
      id: 'client-management',
      title: 'Client Management',
      activeBgColor: 'var(--color-brand-blue-light)',
      content: (
        <div className={styles.sectionContainer}>
          <div className={`${styles.contentCard} ${styles.cardHalf}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Client Database</h3>
              <p className={styles.cardDescription}>All your client information in one centralized place for seamless relationship management. Track all projects, invoices, and proposals per client, and keep detailed client history and communication notes.</p>
            </div>
            <ClientTags />
          </div>
          <div className={`${styles.contentCard} ${styles.cardHalf}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Manage Your Clients Time and Calendar</h3>
              <p className={styles.cardDescription}>Sync with Google Calendar and manage all your client meetings and appointments in one place. See your schedule at a glance and never miss an important meeting.</p>
            </div>
            <Calendar />
          </div>
        </div>
      )
    },
    {
      id: 'invoicing-payments',
      title: 'Expenses and Invoicing',
      activeBgColor: 'var(--color-brand-green-pale)',
      content: (
        <div className={styles.sectionContainer}>
          <div className={`${styles.contentCard} ${styles.cardWide}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Professional Invoicing</h3>
              <p className={styles.cardDescription}>Create and send professional invoices in minutes with our intuitive invoicing system. Track invoice status from draft to sent, paid, or overdue, and automatically calculate taxes and fees.</p>
            </div>
            <InvoiceTable />
          </div>
          <div className={`${styles.contentCard} ${styles.cardWide}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Seamless Payments</h3>
              <p className={styles.cardDescription}>Get paid faster with integrated payment processing powered by Stripe. Add automatic payment links to every invoice, accept credit cards and bank transfers, and send automatic payment reminders for overdue invoices.</p>
            </div>
            <Invoice />
          </div>
          <div className={`${styles.contentCard} ${styles.cardWide}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Expense Tracking</h3>
              <p className={styles.cardDescription}>Track all your business expenses in one place. Categorize expenses, attach receipts, and monitor spending to keep your finances organized and tax-ready.</p>
            </div>
            <Expenses />
          </div>
        </div>
      )
    },
    {
      id: 'proposals-quotes',
      title: 'Proposals & Quotes',
      activeBgColor: 'var(--color-brand-cream)',
      content: (
        <div className={styles.sectionContainer}>
          <div className={`${styles.contentCard} ${styles.cardWide}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Professional Proposals</h3>
              <p className={styles.cardDescription}>Win more work with beautiful, professional proposals that impress clients. Create detailed proposals with line items and pricing, add custom terms and conditions, and track proposal status from sent to viewed, accepted, or rejected.</p>
            </div>
            <Proposal />
          </div>
        </div>
      )
    },
    {
      id: 'milestones-timelines',
      title: 'Milestones & Timelines',
      activeBgColor: 'var(--color-brand-lavender)',
      content: (
        <div className={styles.sectionContainer}>
          <div className={`${styles.contentCard} ${styles.cardHalf}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>See the big picture</h3>
              <p className={styles.cardDescription}>Visualize your project timeline at a glance with interactive Gantt charts. Create project milestones with costs and deadlines, and track milestone completion with visual progress indicators.</p>
            </div>
            <GanttChart />
          </div>
          <div className={`${styles.contentCard} ${styles.cardHalf}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Budget & Timeline Control</h3>
              <p className={styles.cardDescription}>Stay on track and on budget with powerful project management tools. Allocate budgets per milestone to control spending, and adjust timelines with intuitive drag-and-drop controls.</p>
            </div>
            <GanttChart />
          </div>
        </div>
      )
    }
  ]

  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh',
      overflow: 'visible'
    }}>
      <Navigation />
      <Hero />
      <ScrollableSection
        mainTitle="Everything you need."
        mainSubtitle="All-in-one business management for freelancers and agencies."
        sections={featureSections}
      />
      <CTA />
      <Footer />
    </main>
  )
}