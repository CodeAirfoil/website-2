'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import styles from './ScrollableSection.module.css'

export interface ScrollableSectionItem {
  id: string
  title: string
  content: React.ReactNode
  activeBgColor?: string
}

interface ScrollableSectionProps {
  mainTitle: string
  mainSubtitle?: string
  sections: ScrollableSectionItem[]
  className?: string
}

const ScrollableSection = ({ 
  mainTitle, 
  mainSubtitle,
  sections,
  className = '' 
}: ScrollableSectionProps) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '')
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Check all observed sections to find the most visible one
        const allRefs = Object.values(sectionRefs.current).filter(Boolean) as HTMLElement[]
        let maxVisibility = 0
        let mostVisibleId = ''

        allRefs.forEach((ref) => {
          const rect = ref.getBoundingClientRect()
          const viewportHeight = window.innerHeight
          
          // Calculate how much of the section is visible in the viewport
          const visibleTop = Math.max(0, rect.top)
          const visibleBottom = Math.min(viewportHeight, rect.bottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          
          // Prefer sections that start near the top of viewport
          const distanceFromTop = Math.abs(rect.top - 150)
          const visibility = visibleHeight - (distanceFromTop * 0.5)

          if (visibility > maxVisibility) {
            maxVisibility = visibility
            mostVisibleId = ref.id
          }
        })

        if (mostVisibleId && mostVisibleId !== activeSection) {
          setActiveSection(mostVisibleId)
        }
      },
      {
        rootMargin: '-150px 0px -40% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      }
    )

    const refs = Object.values(sectionRefs.current).filter(Boolean) as HTMLElement[]
    refs.forEach((ref) => observer.observe(ref))

    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = useCallback((id: string) => {
    const section = sectionRefs.current[id]
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const activeSectionData = sections.find(s => s.id === activeSection)
  const wrapperBgColor = activeSectionData?.activeBgColor

  return (
    <div 
      className={`${styles.wrapper} ${className}`}
      style={wrapperBgColor ? { backgroundColor: wrapperBgColor } : undefined}
    >
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            <h2 className={styles.mainTitle}>{mainTitle}</h2>
            {mainSubtitle && <p className={styles.mainSubtitle}>{mainSubtitle}</p>}
            
            <nav className={styles.nav} aria-label="Section navigation">
              {sections.map((section) => {
                const isActive = activeSection === section.id

                return (
                  <button
                    key={section.id}
                    className={`${styles.navButton} ${isActive ? styles.navButtonActive : ''}`}
                    onClick={() => scrollToSection(section.id)}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {section.title}
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>
        
        <main className={styles.content}>
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el
              }}
              className={styles.section}
            >
              {section.content}
            </section>
          ))}
        </main>
      </div>
    </div>
  )
}

export default ScrollableSection

