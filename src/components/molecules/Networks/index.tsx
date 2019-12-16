import React, { memo } from "react"
import posed from "react-pose"
import {Link} from "gatsby";
import { moveInTop } from "../../atoms/Transitions"
import Icon from "../../atoms/Icon"
import { useResume } from "../../hooks/use-resume"
import styles from "./Networks.module.scss"

const linkClasses = (key: string) =>
  key === "Mail" ? `u-email ${styles.link}` : `u-url ${styles.link}`

const LocalLink = ({ name, url }: { name: string, url: string }) => (
  <Link
    className={linkClasses(name)}
    to={url}
    data-testid={`network-${name.toLowerCase()}`}
  >
    <Icon name={name}/>
    <span className={styles.title}>{name}</span>
  </Link>
)
const NetworkLink = ({ name, url }: { name: string, url: string }) => (
  <a
    className={linkClasses(name)}
    href={url}
    data-testid={`network-${name.toLowerCase()}`}
  >
    <Icon name={name}/>
    <span className={styles.title}>{name}</span>
  </a>
)

function Networks({ small, hide }: { small?: boolean, hide?: boolean }) {
  const { basics } = useResume()
  if (hide) return null

  const Animation = posed.aside(moveInTop)

  return (
    <Animation className={small ? styles.small : styles.networks}>
      <NetworkLink name="Mail" url={`mailto:${basics.email}`}/>

      {basics.profiles.map((profile: { network: string, url: string }) => (
        <NetworkLink
          key={profile.network}
          name={profile.network}
          url={profile.url}
        />
      ))}
      <LocalLink name="Resume" url="/resume" />
    </Animation>
  )
}

export default memo(Networks)