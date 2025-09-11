import React from 'react'
import styles from './FileCard.module.css'

export interface FileCardProps {
  fileName: string
  fileExtension: string
  fileSize: string
  fileType: 'excel' | 'pdf' | 'doc' | 'image' | 'video' | 'audio'
  className?: string
  onClick?: () => void
}

const FileCard = ({ 
  fileName, 
  fileExtension, 
  fileSize, 
  fileType, 
  className = '',
  onClick 
}: FileCardProps) => {
  const getFileIcon = () => {
    switch (fileType) {
      case 'excel':
        return (
          <div className={`${styles.fileIcon} ${styles.excelIcon}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="20" height="24" rx="2" fill="#0F9D58"/>
              <path d="M4 4h12v2H4V4z" fill="white"/>
              <path d="M6 8h8v1H6V8z" fill="white" opacity="0.8"/>
              <path d="M6 10h8v1H6V10z" fill="white" opacity="0.8"/>
              <path d="M6 12h8v1H6V12z" fill="white" opacity="0.8"/>
              <path d="M6 14h8v1H6V14z" fill="white" opacity="0.8"/>
              <path d="M6 16h8v1H6V16z" fill="white" opacity="0.8"/>
              <path d="M6 18h8v1H6V18z" fill="white" opacity="0.8"/>
            </svg>
          </div>
        )
      case 'pdf':
        return (
          <div className={`${styles.fileIcon} ${styles.pdfIcon}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="20" height="24" rx="2" fill="#DC2626"/>
              <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">PDF</text>
            </svg>
          </div>
        )
      case 'doc':
        return (
          <div className={`${styles.fileIcon} ${styles.docIcon}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="20" height="24" rx="2" fill="#2563EB"/>
              <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">DOC</text>
            </svg>
          </div>
        )
      case 'image':
        return (
          <div className={`${styles.fileIcon} ${styles.imageIcon}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="20" height="24" rx="2" fill="#8B5CF6"/>
              <circle cx="12" cy="10" r="2" fill="white"/>
              <path d="M4 18l3-3 2 2 4-4 3 3" stroke="white" strokeWidth="1" fill="none"/>
            </svg>
          </div>
        )
      case 'video':
        return (
          <div className={`${styles.fileIcon} ${styles.videoIcon}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="20" height="24" rx="2" fill="#059669"/>
              <polygon points="8,8 16,12 8,16" fill="white"/>
            </svg>
          </div>
        )
      case 'audio':
        return (
          <div className={`${styles.fileIcon} ${styles.audioIcon}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="20" height="24" rx="2" fill="#D97706"/>
              <path d="M8 8h2v8H8V8z" fill="white"/>
              <path d="M12 6h2v12h-2V6z" fill="white"/>
              <path d="M16 10h2v4h-2V10z" fill="white"/>
            </svg>
          </div>
        )
      default:
        return (
          <div className={`${styles.fileIcon} ${styles.defaultIcon}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="20" height="24" rx="2" fill="#6B7280"/>
            </svg>
          </div>
        )
    }
  }

  return (
    <div 
      className={`${styles.fileCard} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={styles.cardHeader}>
        {getFileIcon()}
        <button className={styles.menuButton} aria-label="More options">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="6" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <circle cx="12" cy="18" r="2"/>
          </svg>
        </button>
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.fileName}>{fileName}</h3>
        <p className={styles.fileDetails}>
          {fileExtension} {fileSize}
        </p>
      </div>
    </div>
  )
}

export default FileCard 