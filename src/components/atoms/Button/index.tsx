import React from 'react'

import Link from 'next/link'

// import styles from './style.module.scss'

type ButtonProps = {
  href?: string
  children: React.ReactNode
  onClick: () => void
}

export const Button = React.forwardRef(
  ({ href, children, onClick }: ButtonProps, ref?: React.Ref<HTMLButtonElement>): JSX.Element => {
    if (href) {
      return (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      )
    } else {
      return (
        <button type="button" ref={ref} onClick={onClick}>
          {children}
        </button>
      )
    }
  },
)

Button.displayName = 'Button'
