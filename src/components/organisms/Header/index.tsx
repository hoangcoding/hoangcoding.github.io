import React, { FunctionComponent } from "react"
import ThemeSwitch from "../../molecules/ThemeSwitcher"
import styles from "./Header.module.scss"
import LogoUnit from "../../molecules/LogoUnit"
import Networks from "../../molecules/Networks"
import Availability from "../../molecules/Availability"
import { useMeta } from '../../hooks/use-meta'

type HeaderProps = {
  hide: boolean,
  minimal: boolean,
  hideName?: boolean,
}

export const Header: FunctionComponent<HeaderProps> = ({ hide, minimal, hideName = false }) => {
  const { availability } = useMeta()
  return (
    <>
      <ThemeSwitch/>
      <header className={minimal ? styles.minimal : styles.header}>
        {!hide && (
          <>
            <LogoUnit minimal={minimal} hideName={hideName} />
            <Networks hide={minimal} />
            <Availability hide={minimal && !availability.status} />
          </>
        )}
      </header>
    </>
  )
}