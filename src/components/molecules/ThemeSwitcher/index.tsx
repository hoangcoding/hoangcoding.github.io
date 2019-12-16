import React, { memo, useEffect, useState } from "react"
import Helmet from "react-helmet"
import useDarkMode from "use-dark-mode"
import styles from "./ThemeSwitcher.module.scss"
import Icon from "../../atoms/Icon"

const ThemeToggle = memo(() => (
  <span id="toggle" className={styles.checkboxContainer} aria-live="assertive">
    <Icon name="Sun" />
    <span className={styles.checkboxFake}/>
    <Icon name="Moon" />
  </span>
))

ThemeToggle.displayName = "ThemeToggle"

const ThemeToggleInput = memo(({ dark, toggleDark }: { dark: boolean, toggleDark: () => void }) => (
  <input
    onChange={() => toggleDark()}
    type="checkbox"
    name="toggle"
    value="toggle"
    aria-describedby="toggle"
    checked={dark}
  />
))

ThemeToggleInput.displayName = "ThemeToggleInput"

const HeadItems = ({ bodyClass, themeColor }: { bodyClass: string, themeColor: string }) => (
  <Helmet>
    <body className={bodyClass}/>
    <meta name="theme-color" content={themeColor}/>
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
  </Helmet>
)

function ThemeSwitch() {
  const { value, toggle }: { value: boolean, toggle: () => void } = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
  })
  const [themeColor, setThemeColor] = useState()
  const [bodyClass, setBodyClass] = useState()

  useEffect(() => {
    setBodyClass(value ? "dark" : null)
    setThemeColor(value ? "#1d2224" : "#e7eef4")
  }, [value])

  return (
    <>
      <HeadItems themeColor={themeColor} bodyClass={bodyClass}/>
      <aside className={styles.themeSwitch}>
        <label className={styles.checkbox}>
          <span className={styles.label}>Toggle Night Mode</span>
          <ThemeToggleInput dark={value} toggleDark={toggle}/>
          <ThemeToggle/>
        </label>
      </aside>
    </>
  )
}

export default memo(ThemeSwitch)