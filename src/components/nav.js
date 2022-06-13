import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavList = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`
const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
  &.actualPage {
    border-bottom: 0.2rem solid #fff;
  }
`

const Nav = () => {
  return (
    <NavList>
      <NavLink to={"/"} activeClassName="actualPage">
        Inicio
      </NavLink>
      <NavLink to={"/aboutUs"} activeClassName="actualPage">
        Nosotros
      </NavLink>
    </NavList>
  )
}

export default Nav
