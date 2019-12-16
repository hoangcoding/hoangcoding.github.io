import React from "react"
import shortid from "shortid"
import Icon from "../../components/atoms/Icon"
import { useResume } from "../../components/hooks/use-resume"
import styles from "./ResumeIndex.module.scss"
import Header from "./ResumeHeader"
import ResumeItem from "./ResumeItem"
import { SEO } from "../../components/atoms/SEO"

export default function Resume() {
  const { education, work, awards } = useResume()

  return (
    <>
      <SEO title="Hoang's Résumé"/>

      <div className={styles.resume}>
        <Header/>

        <div>
          <h3 className={styles.subTitle}>
            <Icon name="Briefcase"/>
            Work
          </h3>
        </div>
        <div>
          {work.map((workPlace: any) => (
            <ResumeItem key={shortid.generate()} workPlace={workPlace}/>
          ))}
        </div>
        {awards && <>
          <div>
            <h3 className={styles.subTitle}>
              <Icon name="Award"/>
              Awards
            </h3>
          </div>
          <div>
            {awards.map((award: any) => (
              <ResumeItem key={shortid.generate()} award={award}/>
            ))}
          </div>
        </>}

        <div>
          <h3 className={styles.subTitle}>
            <Icon name="BookOpen"/>
            Education
          </h3>
        </div>
        <div>
          {education.map((eduPlace: any) => (
            <ResumeItem key={shortid.generate()} eduPlace={eduPlace}/>
          ))}
        </div>
      </div>
    </>
  )
}
