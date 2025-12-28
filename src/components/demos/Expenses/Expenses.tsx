'use client'

import React from 'react'
import { Laptop, Coffee, Car, WifiHigh, Paperclip } from '@phosphor-icons/react'
import styles from './Expenses.module.css'

export interface ExpensesProps {
  className?: string
}

const Expenses = ({ className = '' }: ExpensesProps) => {
  return (
    <div className={`${styles.expenses} ${className}`}>
      <div className={styles.expenseCard}>
        <div className={styles.expenseHeader}>
          <h3 className={styles.expenseTitle}>Recent Expenses</h3>
          <span className={styles.expenseTotal}>$1,462.49</span>
        </div>
        <div className={styles.expenseList}>
          <div className={styles.expenseItem}>
            <div className={styles.expenseIcon}>
              <Laptop size={16} weight="fill" />
            </div>
            <div className={styles.expenseDetails}>
              <span className={styles.expenseName}>Software License</span>
            </div>
            <span className={styles.expenseDate}>Jan 15, 2024</span>
            <span className={styles.expenseAmount}>$299.00</span>
          </div>
          <div className={styles.expenseItem}>
            <div className={styles.expenseIcon}>
              <Coffee size={16} weight="fill" />
            </div>
            <div className={styles.expenseDetails}>
              <span className={styles.expenseName}>Client Meeting</span>
            </div>
            <span className={styles.expenseDate}>Jan 12, 2024</span>
            <span className={styles.expenseAmount}>$45.00</span>
          </div>
          <div className={styles.expenseItem}>
            <div className={styles.expenseIcon}>
              <Car size={16} weight="fill" />
            </div>
            <div className={styles.expenseDetails}>
              <span className={styles.expenseName}>Travel</span>
            </div>
            <span className={styles.expenseDate}>Jan 10, 2024</span>
            <span className={styles.expenseAmount}>$901.00</span>
          </div>
          <div className={styles.expenseItem}>
            <div className={styles.expenseIcon}>
              <WifiHigh size={16} weight="fill" />
            </div>
            <div className={styles.expenseDetails}>
              <span className={styles.expenseName}>Internet & Phone</span>
            </div>
            <span className={styles.expenseDate}>Jan 8, 2024</span>
            <span className={styles.expenseAmount}>$89.99</span>
          </div>
          <div className={styles.expenseItem}>
            <div className={styles.expenseIcon}>
              <Paperclip size={16} weight="fill" />
            </div>
            <div className={styles.expenseDetails}>
              <span className={styles.expenseName}>Office Supplies</span>
            </div>
            <span className={styles.expenseDate}>Jan 5, 2024</span>
            <span className={styles.expenseAmount}>$127.50</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expenses

