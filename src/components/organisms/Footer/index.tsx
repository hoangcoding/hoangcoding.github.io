import React, { memo } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styles from './Footer.module.scss'
import { useMeta } from '../../hooks/use-meta'
import LogoUnit from "../../molecules/LogoUnit"
import Networks from "../../molecules/Networks"
const query = graphql`
  query {
    # the package.json file
    hoangPortfolioJson {
      bugs
    }
  }
`

const FooterMarkup = ({ pkg, meta, year } : {pkg: any, meta: any, year: number}) => (
  <footer className={`h-card ${styles.footer} ${(meta.availability.status ? styles.extra : '')}`}>
    <LogoUnit minimal hideName />
    <Networks small />
    <p className={styles.actions}>
      <a href={pkg.bugs}>Found a bug?</a>
    </p>
    <p className={styles.love}>Made with <span className={styles.heart}>❤</span> using <a href="https://www.typescriptlang.org">TypeScript</a> and <a href="https://www.gatsbyjs.org/">Gatsby</a></p>
    <p className={styles.copyright}>
      <small>
        &copy; {year}{' '}
        <a className="u-url" href={meta.url}>
          {meta.title}
        </a>{' '}
        &mdash; All Rights Reserved
      </small>
    </p>
  </footer>
)

function Footer() {
  const metaYaml = useMeta()
  const { hoangPortfolioJson } = useStaticQuery(query)
  const year = new Date().getFullYear()

  return <FooterMarkup year={year} pkg={hoangPortfolioJson} meta={metaYaml} />
}

export default memo(Footer)
