import React from 'react'
import shortid from 'shortid'
import { useResume } from '../../../components/hooks/use-resume'
import Icon from '../../../components/atoms/Icon'
import styles from './ResumeHeader.module.scss'
import Button from "../../../components/atoms/Button"

export default function Header() {
  const { basics, languages } = useResume()
  const { resumeName, resumeLabel, email, website, location, resumeDownload } = basics

  return (
    <>
      <header>
        <p>Résumé</p>
        <h1 className={styles.title}>{resumeName}</h1>
        <h2 className={styles.label}>{resumeLabel}</h2>
        <Button href={resumeDownload}>Get my full résumé</Button>
      </header>

      <div>
        <ul className={styles.contact}>
          <li>
            <a href={website}>
              <Icon name="Compass" />
              Portfolio
            </a>
          </li>
          <li>
            <Icon name="Mail" />
            <a href={`mailto:${email}`}>Email</a>
          </li>
          <li>
            <Icon name="MapPin" />
            {location.city}, {location.countryCode}
          </li>
          <li className={styles.languages}>
            <Icon name="Globe" />
            {languages.map((item: any) => (
              <p key={shortid.generate()}>
                {item.language}
                <span>{item.fluency}</span>
              </p>
            ))}
          </li>
        </ul>
      </div>
    </>
  )
}
