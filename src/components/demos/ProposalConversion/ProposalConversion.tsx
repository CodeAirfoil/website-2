'use client'

import React from 'react'
import { Sparkle, CheckSquare, ListChecks } from '@phosphor-icons/react'
import styles from './ProposalConversion.module.css'

export interface ProposalConversionProps {
  className?: string
}

const ProposalConversion = ({ className = '' }: ProposalConversionProps) => {
  return (
    <div className={`${styles.conversionDemo} ${className}`}>
      <div className={styles.conversionContainer}>
        {/* Proposal Side */}
        <div className={styles.proposalCard}>
          <div className={styles.cardHeader}>
            <h4 className={styles.cardTitle}>Proposal</h4>
            <div className={styles.statusBadge}>
              <CheckSquare size={14} weight="fill" />
              <span>Accepted</span>
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.item}>
              <span className={styles.itemLabel}>Package:</span>
              <span className={styles.itemValue}>Brand Identity & Landing Page</span>
            </div>
            <div className={styles.item}>
              <span className={styles.itemLabel}>Total:</span>
              <span className={styles.itemValue}>$1,500.00</span>
            </div>
          </div>
        </div>

        {/* AI Conversion Arrow */}
        <div className={styles.conversionArrow}>
          <div className={styles.aiBadge}>
            <Sparkle size={18} weight="fill" />
            <span>AI</span>
          </div>
          <div className={styles.arrow}>→</div>
        </div>

        {/* Converted Project Side */}
        <div className={styles.projectCard}>
          <div className={styles.cardHeader}>
            <h4 className={styles.cardTitle}>Project Created</h4>
          </div>
          <div className={styles.projectItems}>
            <div className={styles.projectItem}>
              <ListChecks size={16} weight="regular" />
              <div className={styles.projectItemContent}>
                <span className={styles.projectItemTitle}>3 Tasks Created</span>
                <span className={styles.projectItemDesc}>Design Landing Page, Brand Guidelines, Final Review</span>
              </div>
            </div>
            <div className={styles.projectItem}>
              <CheckSquare size={16} weight="regular" />
              <div className={styles.projectItemContent}>
                <span className={styles.projectItemTitle}>2 Deliverables Added</span>
                <span className={styles.projectItemDesc}>Landing Page Design, Brand Guidelines</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProposalConversion

