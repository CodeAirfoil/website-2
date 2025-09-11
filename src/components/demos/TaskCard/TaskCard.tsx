import React from 'react'
import styles from './TaskCard.module.css'

export interface TaskCardProps {
  title: string
  description: string
  progress: {
    completed: number
    total: number
  }
  dueDate?: string
  status: 'in-progress' | 'completed' | 'overdue' | 'pending'
  priority?: 'low' | 'medium' | 'high'
  category?: string
  className?: string
}

const TaskCard = ({
  title,
  description,
  progress,
  dueDate,
  status,
  priority = 'medium',
  category,
  className = ''
}: TaskCardProps) => {
  const progressPercentage = (progress.completed / progress.total) * 100

  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return styles.statusCompleted
      case 'overdue':
        return styles.statusOverdue
      case 'pending':
        return styles.statusPending
      default:
        return styles.statusInProgress
    }
  }

  const getPriorityColor = () => {
    switch (priority) {
      case 'high':
        return styles.priorityHigh
      case 'low':
        return styles.priorityLow
      default:
        return styles.priorityMedium
    }
  }

  return (
    <div className={`${styles.taskCard} ${getStatusColor()} ${className}`}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.dragHandle}>
          <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className={styles.headerRight}>
          {/* Progress Circle */}
          <div className={styles.progressContainer}>
            <svg className={styles.progressCircle} viewBox="0 0 36 36">
              <path
                className={styles.progressBackground}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={styles.progressFill}
                strokeDasharray={`${progressPercentage}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className={styles.progressText}>
              {progress.completed}/{progress.total}
            </span>
          </div>

          {/* Due Date */}
          {dueDate && (
            <span className={styles.dueDate}>
              Due: {dueDate}
            </span>
          )}

          {/* Priority Flag */}
          <div className={`${styles.priorityFlag} ${getPriorityColor()}`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 2l2 20h14l2-20H3zm2 2h14l-1.5 15H6.5L5 4z"/>
            </svg>
          </div>


        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Category Badge */}
      {category && (
        <div className={styles.category}>
          {category}
        </div>
      )}
    </div>
  )
}

export default TaskCard 