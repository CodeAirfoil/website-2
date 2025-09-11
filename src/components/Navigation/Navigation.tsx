'use client'

import { useState } from 'react'
import styles from './Navigation.module.css'
import shared from '../../styles/shared.module.css'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDownloadOpen, setIsDownloadOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div>
        <div className={styles.navContent}>
          {/* Logo */}
          <div className={styles.navLogo}>
            <a href="/" className={styles.logoLink}>
              <img 
                src="/images/airfoil-logo-3.svg" 
                alt="Airfoil" 
                className={styles.logo}
                width={23}
                height={23}
              />
            </a>
          </div>

          {/* Desktop Navigation - Grouped on the right */}
          <div className={styles.navRight}>
            <div className={styles.navLinks}>
              <a href="/" className={styles.navLink}>Features</a>
              <a href="/pricing" className={styles.navLink}>Pricing</a>
            </div>
            <div className={styles.navActions}>
              <a href="/login" className={styles.loginLink}>Login</a>
              
              {/* Download Dropdown */}
              <div className={styles.downloadDropdown}>
                <button 
                  className={`${shared.btn} ${shared.btnSecondary} ${styles.downloadBtn}`}
                  onClick={() => setIsDownloadOpen(!isDownloadOpen)}
                  onBlur={() => setTimeout(() => setIsDownloadOpen(false), 150)}
                >
                  Download
                </button>
                {isDownloadOpen && (
                  <div className={styles.downloadMenu}>
                    <a href="/download/mac" className={styles.downloadOption}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="20" height="14" x="2" y="3" rx="2"/>
                        <line x1="8" x2="16" y1="21" y2="21"/>
                        <line x1="12" x2="12" y1="17" y2="21"/>
                      </svg>
                      Download for Mac
                    </a>
                    <a href="/download/ios" className={styles.downloadOption}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                        <line x1="12" x2="12.01" y1="18" y2="18"/>
                      </svg>
                      Download for iPhone
                    </a>
                  </div>
                )}
              </div>
              
              <a href="https://dashboard.airfoil.app" className={`${shared.btn} ${shared.btnPrimary}`}>
                Sign Up
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <div className={styles.mobileNavLinks}>
              <a href="/" className={styles.mobileNavLink}>Features</a>
              <a href="/pricing" className={styles.mobileNavLink}>Pricing</a>
              <a href="#" className={`${styles.mobileNavLink} ${styles.comingSoon}`}>
                Download on iOS (coming soon)
              </a>
            </div>
            <div className={styles.mobileNavActions}>
              <a href="/login" className={styles.mobileLoginLink}>Login</a>
              <a href="https://dashboard.airfoil.app" className={`${shared.btn} ${shared.btnPrimary}`}>Get Started</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation