import * as React from 'react';

import styles from './style.module.scss'

type Props = {
  color: 'black' | 'white',
};

const colors = {
  black: styles.colorblack,
  white: styles.colorwhite,
}

export const Logo: React.FC<Props> = (
  {color = 'black'} :Props
): JSX.Element => {
  return (
    <p className={`${styles.logo} ${colors[`${color}`]}`}>
      <strong className={styles.main}>Ryo Kawasaki</strong>
      <small className={styles.sub}>portfolio site</small>
    </p>
  );
}
