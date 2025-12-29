'use client'

import React, { useState, useEffect } from 'react'
import styles from './ProjectStats.module.css'

export interface StatCardProps {
  title: string
  percentage: number
  description?: string
  color: 'green' | 'blue' | 'orange'
  className?: string
  dollarValue?: string
}

const StatCard = ({ title, percentage, description, color, className = '', dollarValue }: StatCardProps) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)
  const [animatedDollar, setAnimatedDollar] = useState(0)

  // Parse dollar value to get numeric amount
  const dollarAmount = dollarValue ? parseInt(dollarValue.replace(/[^0-9]/g, '')) : 0

  useEffect(() => {
    const duration = 4000 // 4 seconds to count up
    const steps = 350 // More steps for smoother animation
    const stepDuration = duration / steps
    const pauseDuration = 4000 // 4 seconds pause between animations

    const animate = () => {
      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        const currentPercentage = Math.floor(percentage * progress)
        const currentDollar = Math.floor(dollarAmount * progress)
        
        setAnimatedPercentage(currentPercentage)
        if (dollarValue) {
          setAnimatedDollar(currentDollar)
        }

        if (currentStep >= steps) {
          clearInterval(timer)
          setAnimatedPercentage(percentage)
          if (dollarValue) {
            setAnimatedDollar(dollarAmount)
          }
          
          // Restart animation after pause
          setTimeout(() => {
            setAnimatedPercentage(0)
            setAnimatedDollar(0)
            // Add a small delay before starting the next animation
            setTimeout(() => {
              animate()
            }, 2000)
          }, pauseDuration)
        }
      }, stepDuration)

      return timer
    }

    const timer = animate()
    return () => clearInterval(timer)
  }, [percentage, dollarAmount, dollarValue])

  // Format dollar amount with commas
  const formatDollar = (amount: number) => {
    return `$${amount.toLocaleString()}`
  }

  return (
    <div className={`${styles.statCard} ${className}`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <span className={styles.percentage}>
          {dollarValue ? formatDollar(animatedDollar) : `${animatedPercentage}%`}
        </span>
      </div>
      
      <div className={styles.progressBar}>
        <div 
          className={`${styles.progressFill} ${styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`]}`}
          style={{ width: `${animatedPercentage}%` }}
        />
      </div>
    </div>
  )
}

export interface ProjectStatsProps {
  className?: string
}

const ProjectStats = ({ className = '' }: ProjectStatsProps) => {
  const stats = [
    {
      title: "Revenue Collection",
      percentage: 20,
      dollarValue: "$2,000",
      color: 'green' as const
    },
    {
      title: "Project Progress", 
      percentage: 56,
      color: 'blue' as const
    }
  ]

  return (
    <div className={`${styles.projectStats} ${className}`}>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          percentage={stat.percentage}
          dollarValue={stat.dollarValue}
          color={stat.color}
          className={styles[`card${index + 1}`]}
        />
      ))}
    </div>
  )
}

export default ProjectStats 