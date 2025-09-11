'use client'

import React, { useState, useEffect } from 'react'
import styles from './TimelogsChart.module.css'

export interface TimeSegment {
  hours: number
  color: 'green' | 'purple' | 'blue'
}

export interface DayData {
  day: string
  date: number
  segments: TimeSegment[]
}

export interface TimelogsChartProps {
  data?: DayData[]
  className?: string
}

const TimelogsChart = ({ data, className = '' }: TimelogsChartProps) => {
  const [isVisible, setIsVisible] = useState(false)

  // Default data based on the image - Mon-Sun
  const defaultData: DayData[] = [
    {
      day: 'Mon',
      date: 17,
      segments: [
        { hours: 6, color: 'green' },
        { hours: 4, color: 'purple' },
        { hours: 2, color: 'blue' }
      ]
    },
    {
      day: 'Tue',
      date: 18,
      segments: [
        { hours: 2, color: 'green' },
        { hours: 3, color: 'purple' },
        { hours: 1, color: 'blue' }
      ]
    },
    {
      day: 'Wed',
      date: 19,
      segments: [
        { hours: 1, color: 'green' },
        { hours: 3, color: 'purple' },
        { hours: 3, color: 'blue' }
      ]
    },
    {
      day: 'Thu',
      date: 20,
      segments: [
        { hours: 4, color: 'green' },
        { hours: 2, color: 'purple' },
        { hours: 2, color: 'blue' }
      ]
    },
    {
      day: 'Fri',
      date: 21,
      segments: [
        { hours: 3, color: 'green' },
        { hours: 5, color: 'purple' },
        { hours: 1, color: 'blue' }
      ]
    },
    {
      day: 'Sat',
      date: 22,
      segments: [
        { hours: 1, color: 'green' },
        { hours: 1, color: 'purple' },
        { hours: 0, color: 'blue' }
      ]
    },
    {
      day: 'Sun',
      date: 23,
      segments: [
        { hours: 0, color: 'green' },
        { hours: 2, color: 'purple' },
        { hours: 1, color: 'blue' }
      ]
    }
  ]

  const chartData = data || defaultData

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Calculate max hours for scaling
  const maxHours = Math.max(
    ...chartData.map(day => 
      day.segments.reduce((total, segment) => total + segment.hours, 0)
    )
  )

  const getSegmentHeight = (hours: number) => {
    const percentage = (hours / maxHours) * 100
    return Math.max(percentage, 5) // Ensure minimum 5% height for visibility
  }

  const getColorClass = (color: string) => {
    switch (color) {
      case 'green':
        return styles.greenSegment
      case 'purple':
        return styles.purpleSegment
      case 'blue':
        return styles.blueSegment
      default:
        return styles.greenSegment
    }
  }

  return (
    <div className={`${styles.timelogsChart} ${className}`}>
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.title}>Timelogs</h3>
      </div>

      {/* Chart Area */}
      <div className={styles.chartArea}>
        <div className={styles.chartContainer}>
          {/* Baseline */}
          <div className={styles.baseline}></div>
          
          {/* Bars */}
          <div className={styles.barsContainer}>
            {chartData.map((day, dayIndex) => (
              <div key={dayIndex} className={styles.dayColumn}>
                <div className={styles.barContainer}>
                  <div className={styles.stackedBar}>
                    {day.segments.map((segment, segmentIndex) => (
                      <div
                        key={segmentIndex}
                        className={`${styles.barSegment} ${getColorClass(segment.color)}`}
                        style={{
                          height: isVisible ? `${getSegmentHeight(segment.hours)}%` : '0%',
                          transitionDelay: `${dayIndex * 100 + segmentIndex * 50}ms`
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className={styles.dayLabel}>
                  {day.day}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelogsChart 