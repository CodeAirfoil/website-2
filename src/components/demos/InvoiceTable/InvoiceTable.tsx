'use client'

import React from 'react'
import Image from 'next/image'
import { CheckCircle, XCircle, Clock, FileText, ArrowCounterClockwise, ExclamationMark } from '@phosphor-icons/react'
import styles from './InvoiceTable.module.css'

export interface InvoiceTableProps {
  className?: string
}

interface Invoice {
  id: string
  title: string
  client: {
    name: string
    avatar: string
  }
  project: {
    name: string
    icon: string
  }
  status: 'paid' | 'refunded' | 'overdue' | 'cancelled' | 'draft'
  recurring: string
  dueDate: string
  amount: string
}

const InvoiceTable = ({ className = '' }: InvoiceTableProps) => {
  const invoices: Invoice[] = [
    {
      id: 'INV-607035KEH',
      title: 'Website Redesign',
      client: { name: 'Chris Reed', avatar: '/images/avatar.png' },
      project: { name: 'Landing Page', icon: 'sparkle' },
      status: 'overdue',
      recurring: '-',
      dueDate: 'Jan 18, 2026',
      amount: '$960.00'
    },
    {
      id: 'INV-876466X9C',
      title: 'Brand Identity',
      client: { name: 'Evan Morales', avatar: '/images/avatar.png' },
      project: { name: 'Poster Design', icon: 'confetti' },
      status: 'paid',
      recurring: '-',
      dueDate: 'Jan 18, 2026',
      amount: '$1,500.00'
    },
    {
      id: 'INV-846067IWR',
      title: 'Mobile App',
      client: { name: 'Jordan Whitman', avatar: '/images/avatar.png' },
      project: { name: 'Website & App', icon: 'dice' },
      status: 'refunded',
      recurring: 'Monthly',
      dueDate: 'Jan 14, 2026',
      amount: '$1,925.00'
    }
  ]

  const getStatusConfig = (status: Invoice['status']) => {
    switch (status) {
      case 'paid':
        return {
          icon: <CheckCircle size={14} weight="fill" />,
          label: 'Paid',
          className: styles.statusPaid
        }
      case 'refunded':
        return {
          icon: <ArrowCounterClockwise size={14} weight="fill" />,
          label: 'Refunded',
          className: styles.statusRefunded
        }
      case 'overdue':
        return {
          icon: <ExclamationMark size={14} weight="fill" />,
          label: 'Overdue',
          className: styles.statusOverdue
        }
      case 'cancelled':
        return {
          icon: <XCircle size={14} weight="fill" />,
          label: 'Cancelled',
          className: styles.statusCancelled
        }
      case 'draft':
        return {
          icon: <FileText size={14} weight="fill" />,
          label: 'Draft',
          className: styles.statusDraft
        }
    }
  }

  return (
    <div className={`${styles.invoiceTableDemo} ${className}`}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <tbody>
            {invoices.map((invoice) => {
              const statusConfig = getStatusConfig(invoice.status)
              return (
                <tr key={invoice.id}>
                  <td className={styles.idColumn}>{invoice.id}</td>
                  <td>
                    <div className={`${styles.statusBadge} ${statusConfig.className}`}>
                      {statusConfig.icon}
                      <span>{statusConfig.label}</span>
                    </div>
                  </td>
                  <td className={styles.recurringColumn}>
                    {invoice.recurring !== '-' ? invoice.recurring : '-'}
                  </td>
                  <td className={styles.dateColumn}>{invoice.dueDate}</td>
                  <td className={styles.amountColumn}>{invoice.amount}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InvoiceTable

