'use client'

import React, { useState, useEffect } from 'react'
import styles from './Invoice.module.css'

export interface InvoiceItem {
  service: string
  description: string
  quantity: number
  rate: string
  amount: number
}

export interface InvoiceProps {
  items?: InvoiceItem[]
  subtotal?: number
  taxRate?: number
  className?: string
}

const Invoice = ({ 
  items, 
  subtotal, 
  taxRate = 0.20, 
  className = '' 
}: InvoiceProps) => {
  const defaultItems: InvoiceItem[] = [
    {
      service: "Line Item: Mobile App Development",
      description: "Create and schedule 8 LinkedIn posts for brand awareness campaign",
      quantity: 8,
      rate: "$120/hr",
      amount: 960
    }
  ]

  const invoiceItems = items || defaultItems
  const calculatedSubtotal = subtotal || invoiceItems.reduce((sum, item) => sum + item.amount, 0)
  const tax = calculatedSubtotal * taxRate
  const total = calculatedSubtotal + tax

  // Animation state
  const [animatedSubtotal, setAnimatedSubtotal] = useState(0)
  const [animatedTax, setAnimatedTax] = useState(0)
  const [animatedTotal, setAnimatedTotal] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps
    const pauseDuration = 3000 // 3 seconds pause between animations

    const animate = () => {
      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setAnimatedSubtotal(Math.floor(calculatedSubtotal * progress))
        setAnimatedTax(Math.floor(tax * progress))
        setAnimatedTotal(Math.floor(total * progress))

        if (currentStep >= steps) {
          clearInterval(timer)
          setAnimatedSubtotal(calculatedSubtotal)
          setAnimatedTax(tax)
          setAnimatedTotal(total)
          
          // Restart animation after pause
          setTimeout(() => {
            setAnimatedSubtotal(0)
            setAnimatedTax(0)
            setAnimatedTotal(0)
            animate()
          }, pauseDuration)
        }
      }, stepDuration)

      return timer
    }

    const timer = animate()
    return () => clearInterval(timer)
  }, [calculatedSubtotal, tax, total])

  return (
    <div className={`${styles.invoice} ${className}`}>
      <div className={styles.invoiceContent}>
        {/* Financial Summary Card */}
        <div className={styles.summaryCard}>
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Subtotal:</span>
            <span className={styles.summaryValue}>${animatedSubtotal.toLocaleString()}</span>
          </div>
          
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Tax:</span>
            <span className={styles.summaryValue}>
              {Math.round(taxRate * 100)}% (${animatedTax.toLocaleString()})
            </span>
          </div>
          
          <div className={styles.divider}></div>
          
          <div className={styles.summaryRow}>
            <span className={styles.totalLabel}>Total:</span>
            <span className={styles.totalValue}>${animatedTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invoice 