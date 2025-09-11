'use client'

import { useState } from 'react'
import styles from './Tabs.module.css'

interface Tab {
  id: string
  name: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  className?: string
}

const Tabs = ({ 
  tabs, 
  className = ''
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div className={`${styles.tabsContainer} ${className}`}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${index === activeTab ? styles.tabActive : ''}`}
            onClick={() => handleTabClick(index)}
          >
            <span className={styles.tabName}>{tab.name}</span>
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

export default Tabs 