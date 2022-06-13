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

const Header = () => {
  return (
    <header
      css={css`
        background-color: rgba(44, 62, 80);
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
        <IndexLink to={"/"}>
          <h1>Hotel Gatsby</h1>
        </IndexLink>
        <Nav />
      </div>
    </header>
  )
}

export default Header
