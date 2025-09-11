'use client'

import React from 'react'
import Image from 'next/image'
import styles from './Integrations.module.css'
import shared from '../../styles/shared.module.css'

const Integrations = () => {
  return (
    <section className={styles.integrations}>
      <div className={shared.container}>
        <div className={styles.integrationsHeader}>
          <h2 className={styles.integrationsTitle}>
            Seamless Integrations
          </h2>
          <p className={styles.integrationsSubtitle}>
            Connect with the tools you already use to streamline your workflow
          </p>
        </div>

        <div className={styles.integrationsGrid}>
          {/* Stripe Integration */}
          <div className={styles.integrationCard}>
            <div className={styles.integrationIcon}>
              <Image
                src="/images/Stripe-S-Logo.svg"
                alt="Stripe"
                width={48}
                height={48}
                className={styles.stripeIcon}
              />
            </div>
            <div className={styles.integrationContent}>
              <h3 className={styles.integrationTitle}>Stripe</h3>
              <p className={styles.integrationDescription}>
                Accept payments instantly with Stripe's secure payment processing. Send invoices and get paid faster with one-click payment links.
              </p>
              <ul className={styles.integrationFeatures}>
                <li>One-click invoice payments</li>
                <li>Automatic payment tracking</li>
                <li>Global payment support</li>
                <li>Secure transactions</li>
              </ul>
              <div className={styles.integrationBadge}>
                <span className={styles.badgeText}>Most Popular</span>
              </div>
            </div>
          </div>

          {/* Google Calendar Integration */}
          <div className={styles.integrationCard}>
            <div className={styles.integrationIcon}>
              <Image
                src="/images/Google_Calendar_icon_(2020).svg"
                alt="Google Calendar"
                width={48}
                height={48}
                className={styles.googleIcon}
              />
            </div>
            <div className={styles.integrationContent}>
              <h3 className={styles.integrationTitle}>Google Calendar</h3>
              <p className={styles.integrationDescription}>
                Sync your schedule effortlessly. Import meetings, automatically track time, and never miss a project deadline again.
              </p>
              <ul className={styles.integrationFeatures}>
                <li>Two-way calendar sync</li>
                <li>Automatic time tracking</li>
                <li>Meeting imports</li>
                <li>Deadline reminders</li>
              </ul>
              <div className={styles.integrationBadge}>
                <span className={styles.badgeText}>Essential</span>
              </div>
            </div>
          </div>

          {/* Coming Soon - More Integrations */}
          <div className={styles.comingSoonCard}>
            <div className={styles.comingSoonContent}>
              <h3 className={styles.comingSoonTitle}>More integrations coming soon</h3>
              <p className={styles.comingSoonDescription}>
                We're adding support for Slack, Notion, QuickBooks, and many more tools to supercharge your workflow.
              </p>
              <div className={styles.comingSoonLogos}>
                <div className={styles.placeholderLogo}>Slack</div>
                <div className={styles.placeholderLogo}>Notion</div>
                <div className={styles.placeholderLogo}>QuickBooks</div>
                <div className={styles.placeholderLogo}>+6 more</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.integrationsFooter}>
          <p className={styles.footerText}>
            Request an integration or build your own with our{' '}
            <a href="#" className={styles.footerLink}>API documentation</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Integrations
