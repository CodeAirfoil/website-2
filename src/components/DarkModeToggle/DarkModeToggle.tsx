'use client'

import React from 'react'
import { useDarkMode } from '@/contexts/DarkModeContext'
import { Sun, Moon } from '@phosphor-icons/react'
import styles from './DarkModeToggle.module.css'

const DarkModeToggle = () => {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <button
      className={styles.toggle}
      onClick={toggleDarkMode}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun size={18} weight="fill" />
      ) : (
        <Moon size={18} weight="fill" />
      )}
      <span className={styles.toggleLabel}>
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  )
}

export default DarkModeToggle

