'use client'

import React from 'react'
import styles from './Subtasks.module.css'

export interface SubtasksProps {
  className?: string
}

const Subtasks = ({ className = '' }: SubtasksProps) => {
  return (
    <div className={`${styles.subtasks} ${className}`}>
      {/* Parent Task */}
      <div className={styles.parentTask}>
        <svg className={styles.taskIcon} viewBox="0 0 24 24" width="16" height="16">
          <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
        </svg>
        <span className={styles.taskName}>Website Redesign</span>
      </div>

      {/* Connecting Lines */}
      <div className={styles.connector}>
        <div className={styles.verticalLine}></div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.leftBranch}></div>
        <div className={styles.rightBranch}></div>
      </div>

      {/* Subtasks */}
      <div className={styles.subtasksContainer}>
        <div className={styles.subtask}>
          <svg className={styles.taskIcon} viewBox="0 0 24 24" width="14" height="14">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
          <span className={styles.taskName}>Design mockups</span>
        </div>
        <div className={styles.subtask}>
          <svg className={styles.taskIcon} viewBox="0 0 24 24" width="14" height="14">
            <path d="M12 4l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 4z" fill="currentColor" />
          </svg>
          <span className={styles.taskName}>Client feedback</span>
        </div>
      </div>
    </div>
  )
}

export default Subtasks

