import React, { memo } from 'react'
import styles from './Repositories.module.scss'
import Repository from "../../molecules/Repository"

function Repositories({ repos }: {repos: any}) {
  if (!repos) return null

  return (
    <section className={styles.section}>
      <h1 className={styles.sectionTitle}>Open Source Projects</h1>
      <div className={styles.repos}>
        {repos.map((repo: any) => (
          <Repository key={repo.name} repo={repo} />
        ))}
      </div>
    </section>
  )
}

export default memo(Repositories)
