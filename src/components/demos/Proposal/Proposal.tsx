'use client'

import React from 'react'
import { CheckCircle } from '@phosphor-icons/react'
import styles from './Proposal.module.css'

export interface ProposalProps {
  className?: string
}

const Proposal = ({ className = '' }: ProposalProps) => {
  return (
    <div className={`${styles.proposalDemo} ${className}`}>
      <div className={styles.proposalCard}>
        <div className={styles.proposalHeader}>
          <h3 className={styles.proposalTitle}>Concert Poster Design Proposal</h3>
          <div className={styles.proposalStatus}>
            <CheckCircle size={16} weight="fill" />
            <span>Converted</span>
          </div>
        </div>
        <div className={styles.selectedPackages}>
          <div className={styles.selectedPackagesHeader}>Selected Packages:</div>
          <div className={styles.packageCard}>
            <div className={styles.packageInfo}>
              <div className={styles.packageTitle}>Brand Identity & Landing Page Design</div>
              <div className={styles.packageQuantity}>1 x $1,500.00</div>
              <div className={styles.packageDeliverables}>Deliverables Included: Landing Page Design</div>
            </div>
            <div className={styles.packageTotal}>$1,500.00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proposal

