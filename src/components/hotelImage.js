import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBG = styled(BackgroundImage)`
  height: 70rem;
`
const ImageText = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.8),
    rgba(34, 49, 63, 0.8)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
    margin: 0;
    text-align: center;
    @media (min-width: 1024px) {
      font-size: 5rem;
    }
  }
  p {
    font-size: 2rem;
  }
`

const HotelImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ImageBG tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <ImageText>
        <h1>Bienvenido a Hotel Gatsby</h1>
        <p>El mejor hotel para tus vacaciones</p>
      </ImageText>
    </ImageBG>
  )
}

export default HotelImage
