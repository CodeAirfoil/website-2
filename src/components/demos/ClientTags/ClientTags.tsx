import React from 'react'
import styles from './ClientTags.module.css'

export interface ClientTag {
  id: string
  name: string
  color: 'blue' | 'red' | 'purple' | 'grey'
  icon: 'target' | 'star' | 'gear' | 'profile'
  avatar?: string
}

export interface ClientTagsProps {
  clients?: ClientTag[]
  className?: string
}

const ClientTags = ({ clients, className = '' }: ClientTagsProps) => {
  // Default clients based on the image
  const defaultClients: ClientTag[] = [
    {
      id: '1',
      name: 'Evergro Farms',
      color: 'blue',
      icon: 'target'
    },
    {
      id: '2',
      name: 'Fathom Analytics Group',
      color: 'red',
      icon: 'star'
    },
    {
      id: '3',
      name: 'OrbitPay',
      color: 'purple',
      icon: 'gear'
    },
    {
      id: '4',
      name: 'John Smith',
      color: 'grey',
      icon: 'profile'
    }
  ]

  const clientData = clients || defaultClients

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'target':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#6B7280"/>
            <circle cx="12" cy="12" r="4" fill="white"/>
          </svg>
        )
      case 'star':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#92400E"/>
            <path d="M12 4l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 4z" fill="white"/>
          </svg>
        )
      case 'gear':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#7C3AED"/>
            <path d="M12 6l1.5 1.5L15 6l1.5 1.5L18 9l-1.5 1.5L18 12l-1.5 1.5L15 15l-1.5-1.5L12 15l-1.5-1.5L9 15l-1.5-1.5L6 12l1.5-1.5L6 9l1.5-1.5L9 6l1.5 1.5L12 6z" fill="white"/>
          </svg>
        )
      case 'profile':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#6B7280"/>
            <circle cx="12" cy="9" r="3" fill="white"/>
            <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="white"/>
          </svg>
        )
      default:
        return null
    }
  }

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return styles.blueTag
      case 'red':
        return styles.redTag
      case 'purple':
        return styles.purpleTag
      case 'grey':
        return styles.greyTag
      default:
        return styles.greyTag
    }
  }

  return (
    <div className={`${styles.clientTags} ${className}`}>
      {clientData.map((client) => (
        <div key={client.id} className={`${styles.clientTag} ${getColorClass(client.color)}`}>
          <div className={styles.tagIcon}>
            {getIcon(client.icon)}
          </div>
          <span className={styles.tagName}>{client.name}</span>
        </div>
      ))}
    </div>
  )
}

export default ClientTags 