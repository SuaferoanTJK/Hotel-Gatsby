import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

import Layout from "./layout"

export const query = graphql`
  query ($slug: String!) {
    allDatoCmsRoom(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          gatsbyImageData
        }
      }
    }
  }
`

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

const RoomTemplate = ({
  data: {
    allDatoCmsRoom: { nodes },
  },
}) => {
  const { titulo, contenido, imagen } = nodes[0]
  return (
    <Layout>
      <div
        css={css`
          min-height: 62.5vh;
        `}
      >
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
          <GatsbyImage image={imagen.gatsbyImageData} alt="Habitacion" />
        </IndexText>
      </div>
    </Layout>
  )
}

export default RoomTemplate
