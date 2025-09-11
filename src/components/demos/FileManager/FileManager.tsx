import React from 'react'
import FileCard from '../FileCard'
import styles from './FileManager.module.css'

export interface FileManagerProps {
  className?: string
}

const FileManager = ({ className = '' }: FileManagerProps) => {
  const files = [
    {
      fileName: "Featured Products Assets",
      fileExtension: ".xlsx",
      fileSize: "832KB",
      fileType: 'excel' as const
    },
    {
      fileName: "Navigation Menu Wireframes",
      fileExtension: ".pdf", 
      fileSize: "4.1MB",
      fileType: 'pdf' as const
    }
  ]

  return (
    <div className={`${styles.fileManager} ${className}`}>
      {files.map((file, index) => (
        <FileCard
          key={index}
          fileName={file.fileName}
          fileExtension={file.fileExtension}
          fileSize={file.fileSize}
          fileType={file.fileType}
          className={styles.fileCard}
        />
      ))}
    </div>
  )
}

export default FileManager 