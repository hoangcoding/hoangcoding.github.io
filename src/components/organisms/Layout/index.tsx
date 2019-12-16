/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react"
import posed, { PoseGroup } from "react-pose"
import shortid from "shortid"
import { fadeIn } from "../../atoms/Transitions"
import { Header } from "../Header"
import Footer from "../Footer"
import styles from "./withLayout.module.scss"

type LayoutProps = {
  children: any,
  location: any
}

export const Layout: FunctionComponent<LayoutProps> = ({ children, location }) => {
  const timeout = 200
  const isHomepage =
    location.pathname === "/" ||
    location.pathname === "/offline-plugin-app-shell-fallback/"
  const isResume = location.pathname === '/resume' || location.pathname === '/resume/'
  const RoutesContainer = posed.div(fadeIn)
  return (
    <>
      <PoseGroup animateOnMount={process.env.NODE_ENV !== "test" && true}>
        <RoutesContainer
          key={shortid.generate()}
          delay={timeout}
          delayChildren={timeout}
        >
          <Header hide={isResume} minimal={!isHomepage} hideName={!isHomepage}/>
          <main className={styles.screen}>{children}</main>
        </RoutesContainer>
      </PoseGroup>
      <Footer/>
    </>
  )
}
