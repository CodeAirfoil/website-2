'use client'

import React, { useState, useEffect } from 'react'
import styles from './Timer.module.css'

export interface TimerProps {
  isRunning?: boolean
  elapsedTime?: string
  taskName?: string
  onStop?: () => void
  className?: string
}

const Timer = ({
  isRunning = true,
  elapsedTime: initialElapsedTime = "00:00:00",
  taskName = "Task: LinkedIn Post Series",
  onStop,
  className = ''
}: TimerProps) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(() => {
    // Parse initial time if provided
    if (initialElapsedTime !== "00:00:00") {
      const [hours, minutes, seconds] = initialElapsedTime.split(':').map(Number)
      return hours * 3600 + minutes * 60 + seconds
    }
    return 0
  })

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedSeconds(prev => prev + 1)
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isRunning])

  // Format seconds to HH:MM:SS
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const handleStop = () => {
    if (onStop) {
      onStop()
    }
  }

  return (
    <div className={`${styles.timer} ${className}`}>
      {/* Status indicator */}
      <div className={styles.statusRow}>
        <div className={`${styles.statusDot} ${isRunning ? styles.running : styles.stopped}`}></div>
        <span className={styles.statusText}>
          {isRunning ? 'Running Timer' : 'Timer Stopped'}
        </span>
      </div>

      {/* Main timer display */}
      <div className={styles.timeDisplay}>
        {formatTime(elapsedSeconds)}
      </div>

      {/* Task name */}
      <div className={styles.taskField}>
        {taskName}
      </div>

      {/* Stop button */}
      <button 
        className={styles.stopButton}
        onClick={handleStop}
        disabled={!isRunning}
      >
        <div className={styles.stopIcon}></div>
        <span>Stop</span>
      </button>
    </div>
  )
}

export default Timer 