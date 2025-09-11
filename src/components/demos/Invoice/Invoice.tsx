'use client'

import React, { useState, useEffect } from 'react'
import styles from './Invoice.module.css'
import Image from 'next/image'

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
      {/* Service Item Details Card */}
      <div className={styles.serviceCard}>
        <div className={styles.serviceInfo}>
          <div className={styles.serviceName}>
            {invoiceItems[0].service}
          </div>
        </div>
        
        <div className={styles.serviceDetails}>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Quantity</span>
            <span className={styles.detailValue}>{invoiceItems[0].quantity}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Rate</span>
            <span className={styles.detailValue}>{invoiceItems[0].rate}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>To Be Billed</span>
            <span className={styles.detailValue}>${invoiceItems[0].amount.toLocaleString()}</span>
          </div>
        </div>
      </div>

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

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
      <div className={styles.sendButton}>
          Download Invoice
        </div>
        <div className={styles.stripeButton}>
          <Image
            src="/images/Stripe-S-Logo.svg"
            alt="Stripe"
            width={16}
            height={16}
            className={styles.stripeIcon}
          />
          Send with Stripe
        </div>
      
      </div>
    </div>
  )
}

export default Invoice 