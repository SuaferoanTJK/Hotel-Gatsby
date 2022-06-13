import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Nav from "./nav"

const IndexLink = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

const Footer = ({ title }) => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer
        css={css`
          background-color: rgba(44, 62, 80);
          margin-top: 5rem;
          padding: 0.1rem;
        `}
      >
        <div
          css={css`
            max-width: 120rem;
            width: 90%;
            margin: 0 auto;
            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Nav />
          <IndexLink to={"/"}>
            <h1>Hotel Gatsby</h1>
          </IndexLink>
        </div>
      </footer>
      <p
        css={css`
          text-align: center;
          color: #fff;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >
        {title}. Todos los derechos reservados &copy; {year}
      </p>
    </>
  )
}

export default Footer
