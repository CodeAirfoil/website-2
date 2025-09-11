'use client'

import React, { useState } from 'react'
import styles from './Pricing.module.css'
import shared from '../../styles/shared.module.css'

interface PricingTier {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  isPopular?: boolean
  ctaText: string
  ctaVariant: 'primary' | 'secondary'
}

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)
  
  const pricingTiers: PricingTier[] = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Ideal for freelancers just getting started. Manage a single project and stay organized with essential tools — no cost, no commitment.',
      features: [
        '1 Project',
        '1 Client',
        '10 Tasks',
        '3 Milestones',
        '2GB file storage',
      ],
      ctaText: 'Get Started Free',
      ctaVariant: 'secondary'
    },
    {
      name: 'Pro',
      price: isYearly ? '$54' : '$6',
      period: isYearly ? '/year' : '/month',
      description: 'Built for professionals ready to scale. Unlock unlimited projects, clients, plus enough storage to support.',
      features: [
        'Unlimited Projects',
        'Unlimited Clients',
        'Unlimited Tasks',
        'Unlimited Milestones',
        'Unlimited Invoices',
        '20GB File Storage',
        'Custom Theme Colors',
        'Priority Support',

      ],
      isPopular: true,
      ctaText: 'Start Pro Trial',
      ctaVariant: 'primary'
    }
  ]

  return (
    <section className={styles.pricing}>
      <div className={shared.container}>
    

        <div className={styles.tiers}>
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.name}
              className={`${styles.tier} ${tier.name === 'Pro' ? styles.pro : ''}`}
            >
        
              
              <div className={styles.tierHeader}>
                {tier.name === 'Pro' ? (
                  <div className={styles.proHeaderRow}>
                    <div className={styles.titlePriceContainer}>
                      <h3 className={styles.tierName}>
                        <span className={styles.proStar}>★</span>
                        {tier.name}
                      </h3>
                      <div className={styles.priceContainer}>
                        <span className={styles.price}>{tier.price}</span>
                        {tier.period && (
                          <span className={styles.period}>{tier.period}</span>
                        )}
                      </div>
                    </div>
                    <div className={styles.billingToggle}>
                      {isYearly && (
                        <span className={styles.savingsBadge}>Save 17%</span>
                      )}
                      <span className={styles.toggleLabel}>Monthly</span>
                      <button 
                        className={`${styles.toggleButton} ${isYearly ? styles.toggleActive : ''}`}
                        onClick={() => setIsYearly(!isYearly)}
                      >
                        <div className={styles.toggleSlider}></div>
                      </button>
                      <span className={styles.toggleLabel}>Yearly</span>
                    </div>
                  </div>
                ) : (
                  <div className={styles.titlePriceContainer}>
                    <h3 className={styles.tierName}>{tier.name}</h3>
                    <div className={styles.priceContainer}>
                      <span className={`${styles.price} ${tier.name === 'Basic' ? styles.priceFree : ''}`}>{tier.price}</span>
                      {tier.period && (
                        <span className={styles.period}>{tier.period}</span>
                      )}
                    </div>
                  </div>
                )}
                <p className={styles.tierDescription}>{tier.description}</p>
              </div>

              <ul className={styles.features}>
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.feature}>
                    <svg 
                      className={`${styles.checkIcon} ${tier.name === 'Basic' ? styles.checkIconBasic : ''}`}
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      fill="none"
                    >
                      <path 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        fill="currentColor"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            All plans include a 14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing 