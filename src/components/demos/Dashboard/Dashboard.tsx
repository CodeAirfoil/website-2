"use client"

import React, { useState, useEffect } from 'react'
import styles from './Dashboard.module.css'

export interface DashboardProps {
  className?: string
}

const Dashboard = ({ className = '' }: DashboardProps) => {
  // State for progress tracking
  const [projectProgress, setProjectProgress] = useState(0)
  const [taskProgress, setTaskProgress] = useState(0)
  const [timeProgress, setTimeProgress] = useState(0)
  const [revenueProgress, setRevenueProgress] = useState(0)

  // Time utilization counter state (in minutes)
  const [timeUtilization, setTimeUtilization] = useState(0)

  // Timer state
  const [timerSeconds, setTimerSeconds] = useState(776) // 12 minutes 56 seconds = 776 seconds
  const [isTimerRunning, setIsTimerRunning] = useState(true)

  // Animate progress bars on component mount
  useEffect(() => {
    const animateProgress = () => {
      // All progress bars animate simultaneously
      const duration = 1000 // 1 second animation
      const steps = 60 // 60 steps for smooth animation
      const stepDuration = duration / steps
      
      let currentStep = 0
      
      const interval = setInterval(() => {
        currentStep++
        
        // Calculate progress for each bar
        const projectTarget = 25
        const taskTarget = 56
        const timeTarget = 10
        const revenueTarget = 15 // Changed from 0 to 15% to show some progress
        const timeUtilizationTarget = 225 // 3hr 45min = 225 minutes
        
        const progress = currentStep / steps
        
        setProjectProgress(Math.round(projectTarget * progress))
        setTaskProgress(Math.round(taskTarget * progress))
        setTimeProgress(Math.round(timeTarget * progress))
        setRevenueProgress(Math.round(revenueTarget * progress))
        setTimeUtilization(Math.round(timeUtilizationTarget * progress))
        
        if (currentStep >= steps) {
          clearInterval(interval)
          // Ensure final values are exact
          setProjectProgress(projectTarget)
          setTaskProgress(taskTarget)
          setTimeProgress(timeTarget)
          setRevenueProgress(revenueTarget)
          setTimeUtilization(timeUtilizationTarget)
        }
      }, stepDuration)
    }

    // Start animation after a short delay
    setTimeout(animateProgress, 300)
  }, [])

  // Timer effect - just continue counting from 00:12:56
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  // Format timer time
  const formatTimerTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  // Format time utilization (minutes to "Xhr Xmin")
  const formatTimeUtilization = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    
    return `${hours}hr ${minutes}min`
  }

  return (
    <div className={`${styles.dashboard} ${className}`}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.userProfile}>
          <div className={styles.avatar}>
            <img src="/images/avatar.png" alt="Sarah Mitchell" />
          </div>
          <span className={styles.userName}>Sarah Mitchell</span>
        </div>
        
        <nav className={styles.navigation}>
          <div className={styles.navSection}>
            <ul className={styles.navList}>
              <li className={styles.navItem}><div className={styles.navBar}></div></li>
              <li className={styles.navItem}><div className={styles.navBar}></div></li>
              <li className={styles.navItem}><div className={styles.navBar}></div></li>
              <li className={styles.navItem}><div className={styles.navBar}></div></li>
              <li className={styles.navItem}><div className={styles.navBar}></div></li>
            </ul>
          </div>
          
          <div className={styles.navSection}>
            <h3 className={styles.navTitle}>Projects</h3>
            <ul className={styles.navList}>
              <li className={`${styles.navItem} ${styles.active}`}>
                <span className={styles.projectIcon}>🌱</span>
                GreenTech Analytics
              </li>
            </ul>
          </div>
        </nav>

        {/* Timer Widget */}
        <div className={styles.timerWidget}>
          <div className={styles.timerHeader}>
            <div className={`${styles.timerStatusDot} ${styles.running}`}></div>
            <span className={styles.timerStatusText}>
              Running Timer
            </span>
          </div>
          
          <div className={styles.timerDisplay}>
            {formatTimerTime(timerSeconds)}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Project Header */}
        <div className={styles.projectHeader}>
          <div className={styles.projectTitleRow}>
            <h1 className={styles.projectTitle}>
              <span className={styles.projectIcon}>🌱</span>
              GreenTech Analytics
            </h1>
            
            <div className={styles.projectTabs}>
              <button className={`${styles.tab} ${styles.active}`}>Overview</button>
              <button className={styles.tab}>
                Tasks
                <span className={styles.notification}>2</span>
              </button>
              <button className={styles.tab}>Milestones</button>
              <button className={styles.tab}>
                Files
                <span className={styles.notification}>12</span>
              </button>
              <button className={styles.tab}>
                Invoices
                <span className={styles.notification}>2</span>
              </button>
            </div>
          </div>
          
          <div className={styles.projectDescription}>
            <div className={styles.descriptionBar}></div>
            <div className={styles.descriptionBar}></div>
          </div>
        </div>

        {/* Project Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <h3 className={styles.statTitle}>Project Progress</h3>
              <span className={styles.statValue}>{projectProgress}%</span>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${projectProgress}%` }}></div>
              </div>
              <p className={styles.statDescription}>1 of 4 milestones  </p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <h3 className={styles.statTitle}>Task Completion</h3>
              <span className={styles.statValue}>{taskProgress}%</span>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <div className={`${styles.progressFill} ${styles.blue}`} style={{ width: `${taskProgress}%` }}></div>
              </div>
              <p className={styles.statDescription}>14 of 25 tasks completed</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <h3 className={styles.statTitle}>Time</h3>
              <span className={styles.statValue}>{formatTimeUtilization(timeUtilization)}</span>
            </div>
            <div className={styles.timeUtilizationViz}>
              <div className={styles.dayBars}>
                <div className={`${styles.dayBar} ${styles.weekend}`} style={{ '--final-opacity': 1, animationDelay: '0ms' } as React.CSSProperties}></div>
                <div className={styles.dayBar} style={{ '--final-opacity': 0.4, animationDelay: '100ms' } as React.CSSProperties}></div>
                <div className={styles.dayBar} style={{ '--final-opacity': 0.6, animationDelay: '200ms' } as React.CSSProperties}></div>
                <div className={styles.dayBar} style={{ '--final-opacity': 0.8, animationDelay: '300ms' } as React.CSSProperties}></div>
                <div className={styles.dayBar} style={{ '--final-opacity': 1, animationDelay: '400ms' } as React.CSSProperties}></div>
                <div className={styles.dayBar} style={{ '--final-opacity': 0.3, animationDelay: '500ms' } as React.CSSProperties}></div>
                <div className={`${styles.dayBar} ${styles.weekend}`} style={{ '--final-opacity': 1, animationDelay: '600ms' } as React.CSSProperties}></div>
              </div>
              <div className={styles.weekDays}>
                <span className={styles.dayLabel}>S</span>
                <span className={styles.dayLabel}>M</span>
                <span className={styles.dayLabel}>T</span>
                <span className={styles.dayLabel}>W</span>
                <span className={styles.dayLabel}>T</span>
                <span className={styles.dayLabel}>F</span>
                <span className={styles.dayLabel}>S</span>
              </div>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              <h3 className={styles.statTitle}>Revenue Collection</h3>
              <span className={styles.statValue}>{revenueProgress}%</span>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${revenueProgress}%` }}></div>
              </div>
              <p className={styles.statDescription}>$180 paid of $1,200</p>
            </div>
          </div>
        </div>

        {/* Active Tasks */}
        <div className={styles.tasksSection}>
          <h2 className={styles.sectionTitle}>Tasks Due This Week</h2>
          
          <div className={styles.taskCards}>
            <div className={`${styles.taskCard} ${styles.inProgress}`}>
              <div className={styles.taskHeader}>
                <div className={styles.dragHandle}>
                  <div className={styles.dots}>
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
              <div className={styles.taskContent}>
                <h3 className={styles.taskTitle}>Carbon Footprint Dashboard</h3>
                <p className={styles.taskDescription}>Build interactive dashboard for tracking and visualizing carbon emissions data with predictive analytics.</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Dashboard 