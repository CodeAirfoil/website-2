'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './coming-soon.module.css'
import { TaskCard, Timer, TimelogsChart, ProjectStats } from '../../components/demos'

export default function ComingSoonPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        // Set authentication cookie and redirect
        document.cookie = 'site-auth=authenticated; path=/; max-age=86400' // 24 hours
        router.push('/')
        router.refresh()
      } else {
        setError('Incorrect password. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <div className={styles.messageContainer}>
          <h2 className={styles.subtitle}>Airfoil is coming soon...</h2>
          <p className={styles.description}>
            We're putting the finishing touches on something amazing. 
            Enter your access code to get an early preview.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter access code"
              className={styles.input}
              disabled={isLoading}
              autoFocus
            />
            <button 
              type="submit" 
              className={styles.button}
              disabled={isLoading || !password.trim()}
            >
              {isLoading ? 'Verifying...' : 'Enter'}
            </button>
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </form>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Questions? Contact us at{' '}
            <a href="mailto:hello@airfoil.app" className={styles.link}>
              hello@airfoil.app
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
