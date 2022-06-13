import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const IndexText = styled.div`
  padding-top: 4rem;
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
  p {
    line-height: 2;
  }
`

const IndexContent = () => {
  const info = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            gatsbyImageData
          }
        }
      }
    }
  `)
  const { titulo, contenido, imagen } = info.allDatoCmsPage.nodes[0]
  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>
      <IndexText>
        <p>{contenido}</p>
        <GatsbyImage image={imagen.gatsbyImageData} alt="inicio" />
      </IndexText>
    </>
  )
}

export default IndexContent
