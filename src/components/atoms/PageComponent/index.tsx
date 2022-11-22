import React from 'react'

import styles from './style.module.scss'

type Props = {
  children?: React.ReactNode;
};

export const PageComponent: React.FC<Props> = (
  {children} :Props
) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}

PageComponent.displayName = 'PageComponent'