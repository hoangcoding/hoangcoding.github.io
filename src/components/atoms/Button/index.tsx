import React from 'react'
import styles from './Button.module.scss'

const Button = (props: any) => (
  <a className={styles.button} {...props}>
    {props.children}
  </a>
)


export default Button
