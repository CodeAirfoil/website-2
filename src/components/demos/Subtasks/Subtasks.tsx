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
          <span className={styles.taskName}>Design mockups</span>
        </div>
        <div className={styles.subtask}>
          <span className={styles.taskName}>Client feedback</span>
        </div>
      </div>
    </div>
  )
}

export default Subtasks

