'use client'

import React from 'react'
import styles from './Deliverables.module.css'

export interface DeliverablesProps {
  className?: string
}

const Deliverables = ({ className = '' }: DeliverablesProps) => {
  return (
    <div className={`${styles.deliverables} ${className}`}>
      <div className={styles.deliverableCard}>
        <div className={styles.deliverableHeader}>
          <h3 className={styles.deliverableTitle}>Project Deliverables</h3>
          <span className={styles.deliverableCount}>4 Items</span>
        </div>
        <div className={styles.deliverableList}>
          <div className={styles.deliverableItem}>
            <div className={styles.checkbox}></div>
            <span className={styles.itemName}>Concept Development</span>
          </div>
          <div className={styles.deliverableItem}>
            <div className={styles.checkbox}></div>
            <span className={styles.itemName}>Final Poster Designs</span>
          </div>
          <div className={styles.deliverableItem}>
            <div className={`${styles.checkbox} ${styles.checked}`}></div>
            <span className={`${styles.itemName} ${styles.completed}`}>Brand Guidelines</span>
          </div>
          <div className={styles.deliverableItem}>
            <div className={styles.checkbox}></div>
            <span className={styles.itemName}>Print-Ready Files</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deliverables

