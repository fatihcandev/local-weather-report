import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MainBg = () => {
  const data = useStaticQuery(graphql`
    query {
      mainBg: file(relativePath: { eq: "main-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.mainBg.childImageSharp.fluid} alt="rain drops on a car window" />
}

export default MainBg