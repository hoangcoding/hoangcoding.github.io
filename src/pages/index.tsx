import React, { memo } from "react"
import Repositories from "../components/organisms/Repositories"
import { SEO } from "../components/atoms/SEO"

function Home({ pageContext }: { data:any, pageContext: any}) {
  return (
    <>
      <SEO />
      <Repositories repos={pageContext.repos} />
    </>
  )
}

export default memo(Home)