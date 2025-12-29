'use client'

import React from 'react'
import styles from './Proposal.module.css'

export interface ProposalProps {
  className?: string
}

const Proposal = ({ className = '' }: ProposalProps) => {
  return (
    <div className={`${styles.proposalDemo} ${className}`}>
      <div className={styles.proposalCard}>
        <div className={styles.selectedPackages}>
          <div className={styles.packageCard}>
            <div className={styles.packageInfo}>
              <div className={styles.packageTitle}>Brand Identity & Landing Page Design</div>
              <div className={styles.packageDeliverables}>Deliverables Included: Logo Design, Brand Guidelines, Landing Page Design, Responsive Design, Source Files</div>
            </div>
            <div className={styles.packageTotal}>$1,500.00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proposal

