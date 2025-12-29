import React from 'react'
import Image from 'next/image'
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
        // Evergro Farms
        return (
          <Image
            src="/images/company-icons/logoipsum-392.svg"
            alt=""
            width={16}
            height={16}
            className={styles.logoImage}
          />
        )
      case 'gear':
        // OrbitPay
        return (
          <Image
            src="/images/company-icons/logoipsum-396.svg"
            alt=""
            width={16}
            height={16}
            className={styles.logoImage}
          />
        )
      case 'profile':
        // John Smith
        return (
          <Image
            src="/images/company-icons/logoipsum-411.svg"
            alt=""
            width={16}
            height={16}
            className={styles.logoImage}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={`${styles.clientTags} ${className}`}>
      {clientData.map((client) => (
        <div key={client.id} className={styles.clientTag}>
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