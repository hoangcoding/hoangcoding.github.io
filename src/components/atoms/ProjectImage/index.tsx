import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './ProjectImage.module.scss'
interface ProjectImageType {
  fluid: any,
  alt: string
}
const ProjectImage: FunctionComponent<ProjectImageType> = ({fluid, alt})  => (
  <Img
    className={styles.projectImage}
    backgroundColor="transparent"
    fluid={fluid}
    alt={alt}
  />
)
export const projectImage = graphql`
  fragment ProjectImageFluid on ImageSharp {
    fluid(maxWidth: 1200, quality: 85) {
      ...GatsbyImageSharpFluid_withWebp_noBase64
    }
  }
`
export default ProjectImage;