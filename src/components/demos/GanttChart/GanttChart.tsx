import React from 'react'
import styles from './GanttChart.module.css'

export interface GanttTask {
  id: string
  title: string
  startDate: Date
  endDate: Date
}

export interface GanttChartProps {
  tasks?: GanttTask[]
  className?: string
}

const GanttChart = ({ tasks, className = '' }: GanttChartProps) => {
  const [showNewTask, setShowNewTask] = React.useState(false)

  // Default tasks based on the image
  const defaultTasks: GanttTask[] = [
    {
      id: '1',
      title: 'E-commerce Product Catalog Launch',
      startDate: new Date('2025-08-29'),
      endDate: new Date('2025-09-06')
    },
    {
      id: '2', 
      title: 'Q1 Marketing Campaign Completion',
      startDate: new Date('2025-07-22'),
      endDate: new Date('2025-08-23')
    }
  ]

  // New task that will be animated in
  const newTask: GanttTask = {
    id: '3',
    title: 'Brand Identity Package Delivery',
    startDate: new Date('2025-07-26'),
    endDate: new Date('2025-08-11')
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewTask(true)
    }, 2000) // Show new task after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  const chartTasks = tasks || defaultTasks
  const allTasks = showNewTask ? [newTask, ...chartTasks] : chartTasks

  // Generate timeline weeks
  const generateTimeline = () => {
    const weeks = []
    const startDate = new Date('2025-07-21')
    const endDate = new Date('2025-09-07')
    
    let currentDate = new Date(startDate)
    while (currentDate <= endDate) {
      const weekStart = new Date(currentDate)
      const weekEnd = new Date(currentDate)
      weekEnd.setDate(weekEnd.getDate() + 6)
      
      weeks.push({
        start: new Date(weekStart),
        end: new Date(weekEnd),
        label: `${weekStart.getDate()}-${weekEnd.getDate()}`
      })
      
      currentDate.setDate(currentDate.getDate() + 7)
    }
    
    return weeks
  }

  const timeline = generateTimeline()

  // Calculate task position and width as percentages
  const getTaskPosition = (task: GanttTask) => {
    const chartStart = new Date('2025-07-21')
    const chartEnd = new Date('2025-09-07')
    const totalDays = (chartEnd.getTime() - chartStart.getTime()) / (1000 * 60 * 60 * 24)
    
    const startOffset = (task.startDate.getTime() - chartStart.getTime()) / (1000 * 60 * 60 * 24)
    const duration = (task.endDate.getTime() - task.startDate.getTime()) / (1000 * 60 * 60 * 24)
    
    const leftPercent = (startOffset / totalDays) * 100
    const widthPercent = (duration / totalDays) * 100
    
    return { left: leftPercent, width: widthPercent }
  }

  return (
    <div className={`${styles.ganttChart} ${className}`}>
      {/* Header with timeline */}
      <div className={styles.header}>
        <div className={styles.taskHeader}></div>
        <div className={styles.timelineHeader}>
          {timeline.map((week, index) => (
            <div key={index} className={styles.weekHeader}>
              {week.label}
            </div>
          ))}
        </div>
      </div>

      {/* Chart body */}
      <div className={styles.chartBody}>
        <div className={styles.taskList}>
          {allTasks.map((task, index) => (
            <div 
              key={task.id} 
              className={`${styles.taskRow} ${task.id === '3' ? styles.newTaskRow : ''}`}
            >
              <div className={styles.taskName}>
                {task.title}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.timelineGrid}>
          {/* Grid lines */}
          {timeline.map((week, index) => (
            <div key={index} className={styles.weekColumn}></div>
          ))}
          
          {/* Task bars */}
          {allTasks.map((task, index) => {
            const { left, width } = getTaskPosition(task)
            return (
              <div 
                key={task.id}
                className={`${styles.taskBar} ${task.id === '3' ? styles.newTaskBar : ''}`}
                style={{
                  top: `${index * 64 + 20}px`,
                  left: `${left}%`,
                  width: `${width}%`
                }}
              >
                <div className={styles.taskBarContent}></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default GanttChart 