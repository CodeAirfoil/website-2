import React from 'react'
import styles from './Card.module.css'

export interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  interactive?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    children, 
    variant = 'default', 
    size = 'md', 
    className = '',
    onClick,
    interactive = false,
    ...props 
  }, ref) => {
    const cardClasses = [
      styles.card,
      styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
      styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
      interactive && styles.interactive,
      className
    ].filter(Boolean).join(' ')

    return (
      <div 
        ref={ref}
        className={cardClasses}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card 