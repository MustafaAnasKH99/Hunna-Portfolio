import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "main-image.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
        <SEO title="Page one" />
        <Img fluid={data.placeholderImage.childImageSharp.fluid} className="main-image"/>
        <p>Hunna - Mothers of the Revolution</p>
    </Layout>
  )
  }

export default SecondPage
