import React, { memo } from 'react'
import { Link } from 'gatsby'
import posed from 'react-pose'
import { moveInBottom } from '../../atoms/Transitions'
import Logo from '../../../images/svg/logo.inline.svg'
import styles from './LogoUnit.module.scss'
import { useResume } from '../../hooks/use-resume'

function LogoUnit({ minimal, hideName } : {minimal: boolean, hideName?: boolean}) {
  const { basics } = useResume()
  const Animation = posed.div(moveInBottom)

  return (
    <Animation>
      <Link className={minimal ? styles.minimal : styles.logounit} to={'/'}>
        <Logo className={styles.logo}/>
        {hideName === false && <>
          <h1 className={`p-name ${styles.title}`}>
            {basics.name.toLowerCase()}
          </h1>
          <p className={`p-job-title ${styles.description}`}>
            {basics.label.toLowerCase()}
          </p>
        </>}
      </Link>
    </Animation>
  )
}

export default memo(LogoUnit)