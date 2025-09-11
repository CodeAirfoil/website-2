'use client'

import React, { useState } from 'react'
import styles from './Calendar.module.css'
import Image from 'next/image'

export interface CalendarEvent {
  id: string
  title: string
  startTime: string
  endTime: string
  color: 'blue' | 'green' | 'purple' | 'orange'
  icon?: string
}

export interface CalendarProps {
  events?: CalendarEvent[]
  className?: string
}

const Calendar = ({ events, className = '' }: CalendarProps) => {
  const [currentTime, setCurrentTime] = useState('10:00')

  // Default events based on the image
  const defaultEvents: CalendarEvent[] = [
    {
      id: '1',
      title: 'Brew & Bean Weekly Check-in',
      startTime: '9:00',
      endTime: '10:00',
      color: 'blue'
    },
    {
      id: '2',
      title: 'Design Review Call (Via Google Calendar)',
      startTime: '11:00',
      endTime: '12:00',
      color: 'green',
      icon: 'google-calendar'
    }
  ]

  const calendarEvents = events || defaultEvents

  // Static time for demo purposes - no need to update
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = new Date()
  //     const hours = now.getHours()
  //     const minutes = now.getMinutes()
  //     setCurrentTime(`${hours}:${minutes.toString().padStart(2, '0')}`)
  //   }, 60000)

  //   return () => clearInterval(interval)
  // }, [])

  // Generate time slots from 9 AM to 12 PM
  const timeSlots = Array.from({ length: 4 }, (_, i) => `${9 + i}:00`)

  const getEventPosition = (startTime: string, endTime: string) => {
    // Custom positioning for specific events
    if (startTime === '9:00' && endTime === '10:00') {
      return 12  // First event custom position
    }
    if (startTime === '11:00' && endTime === '12:00') {
      return 62  // Second event custom position
    }
    
    // Default grid alignment for other events
    const [hours] = startTime.split(':').map(Number)
    const hourOffsets: { [key: number]: number } = {
      9: 0,
      10: 30,
      11: 60,
      12: 90
    }
    return hourOffsets[hours] || 0
  }

  const getEventHeight = (startTime: string, endTime: string) => {
    // Custom heights for specific events
    if (startTime === '9:00' && endTime === '10:00') {
      return 26  // First event custom height
    }
    if (startTime === '11:00' && endTime === '12:00') {
      return 27  // Second event custom height
    }
    
    // Default height calculation
    const [startHours] = startTime.split(':').map(Number)
    const [endHours] = endTime.split(':').map(Number)
    const duration = endHours - startHours
    return duration * 30
  }

  const getCurrentTimePosition = () => {
    const [hours] = currentTime.split(':').map(Number)
    // Time indicator positions: 9am=7.5%, 10am=37.5%, 11am=67.5%
    const timePositions: { [key: number]: number } = {
      9: 7.5,
      10: 37.5,
      11: 67.5,
      12: 97.5
    }
    return timePositions[hours] || 37.5
  }

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return styles.eventBlue
      case 'green':
        return styles.eventGreen
      case 'purple':
        return styles.eventPurple
      case 'orange':
        return styles.eventOrange
      default:
        return styles.eventBlue
    }
  }

  return (
    <div className={`${styles.calendar} ${className}`}>
      <div className={styles.calendarHeader}>
        <h3 className={styles.calendarTitle}>Today's Schedule</h3>
        <div className={styles.currentTime}>
          {currentTime}
        </div>
      </div>

      <div className={styles.calendarBody}>
        <div className={styles.timeColumn}>
          {timeSlots.map((time) => (
            <div key={time} className={styles.timeSlot}>
              {time}
            </div>
          ))}
        </div>

        <div className={styles.eventsColumn}>
          {/* Current time indicator */}
          <div 
            className={styles.currentTimeIndicator}
            style={{ top: `${getCurrentTimePosition()}%` }}
          >
            <div className={styles.currentTimeDot}></div>
            <div className={styles.currentTimeLine}></div>
          </div>

          {/* Events */}
          {calendarEvents.map((event, index) => (
            <div
              key={event.id}
              className={`${styles.event} ${getColorClass(event.color)}`}
              style={{
                top: `${getEventPosition(event.startTime, event.endTime)}%`,
                height: `${getEventHeight(event.startTime, event.endTime)}%`,
                animationDelay: `${0.5 + index * 0.2}s`
              }}
            >
              <div className={styles.eventContent}>
                {event.icon && (
                  <div className={styles.eventIcon}>
                    {event.icon === 'google-calendar' ? (
                      <Image
                        src="/images/Google_Calendar_icon_(2020).svg"
                        alt="Google Calendar"
                        width={16}
                        height={16}
                      />
                    ) : (
                      event.icon
                    )}
                  </div>
                )}
                <div className={styles.eventDetails}>
                  <div className={styles.eventTitle}>{event.title}</div>
                  <div className={styles.eventTime}>
                    {event.startTime} – {event.endTime}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calendar
