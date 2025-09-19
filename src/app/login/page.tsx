'use client'

import { useState } from 'react'
import styles from './login.module.css'
import shared from '../../styles/shared.module.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Redirect to dashboard for now
    window.location.href = 'https://dashboard.airfoil.app'
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <img 
            src="/images/logos/airfoil-logo-dark.svg" 
            alt="Airfoil" 
            className={styles.logo}
            width={40}
            height={27}
          />
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Sign in to your Airfoil account</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className={styles.formOptions}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkbox} />
              <span className={styles.checkboxText}>Remember me</span>
            </label>
            <a href="#" className={styles.forgotLink}>Forgot password?</a>
          </div>

          <button 
            type="submit" 
            className={`${shared.btn} ${shared.btnPrimary} ${styles.submitBtn}`}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className={styles.loginFooter}>
          <p className={styles.signupText}>
            Don't have an account?{' '}
            <a href="https://dashboard.airfoil.app" className={styles.signupLink}>
              Sign up for free
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
