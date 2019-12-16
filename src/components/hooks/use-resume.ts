import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query Resume {
    contentJson {
      basics {
        name
        label
        resumeName
        resumeLabel
        resumeDownload
        email
        website
        summary
        profiles {
          network
          url
          username
        }
        location {
          city
          countryCode
        }
      }
      education {
        institution
        area
        studyType
        startDate
        endDate
      }
      languages {
        language
        fluency
      }
      skills {
        name
        level
        keywords
      }
      work {
        company
        position
        website
        startDate
        endDate
        summary
      }
    }
  }
`

export const useResume = () => {
  const { contentJson } = useStaticQuery(query)
  return contentJson
}
