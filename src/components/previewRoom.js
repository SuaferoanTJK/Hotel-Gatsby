import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Btn = styled(Link)`
  margin-top: 2rem;
  padding: 1rem 0;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`

const PreviewRoom = ({ data }) => {
  const { contenido, imagen, titulo, slug, id } = data
  return (
    <div
      css={css`
        border: 0.1rem solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <GatsbyImage image={imagen.gatsbyImageData} alt={`Habitacion ${id}`} />
      <div
        css={css`
          padding: 2rem;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
          `}
        >
          {titulo}
        </h3>
        <p>{contenido}</p>
        <Btn to={slug}>Ver habitación</Btn>
      </div>
    </div>
  )
}

export default PreviewRoom
