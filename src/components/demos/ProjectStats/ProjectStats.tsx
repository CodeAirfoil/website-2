'use client'

import React, { useState, useEffect } from 'react'
import styles from './ProjectStats.module.css'

export interface StatCardProps {
  title: string
  percentage: number
  description: string
  color: 'green' | 'blue' | 'orange'
  className?: string
}

const StatCard = ({ title, percentage, description, color, className = '' }: StatCardProps) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)

  useEffect(() => {
    const duration = 4000 // 1 second to count up (faster)
    const steps = 350 // More steps for smoother animation
    const stepDuration = duration / steps
    const pauseDuration = 4000 // 5 seconds pause between animations (longer)

    const animate = () => {
      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        const currentValue = Math.floor(percentage * progress)
        
        setAnimatedPercentage(currentValue)

        if (currentStep >= steps) {
          clearInterval(timer)
          setAnimatedPercentage(percentage)
          
          // Restart animation after pause
          setTimeout(() => {
            setAnimatedPercentage(0)
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
  }, [percentage])

  return (
    <div className={`${styles.statCard} ${className}`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <span className={styles.percentage}>{animatedPercentage}%</span>
      </div>
      
      <div className={styles.progressBar}>
        <div 
          className={`${styles.progressFill} ${styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`]}`}
          style={{ width: `${animatedPercentage}%` }}
        />
      </div>
      
      <p className={styles.description}>{description}</p>
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
      description: "$2,000 paid of $10,000 invoiced",
      color: 'green' as const
    },
    {
      title: "Project Progress", 
      percentage: 56,
      description: "1 of 2 Milestones Completed",
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
          description={stat.description}
          color={stat.color}
          className={styles[`card${index + 1}`]}
        />
      ))}
    </div>
  )
}

export default ProjectStats 