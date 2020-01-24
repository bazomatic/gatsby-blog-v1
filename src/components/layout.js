import React from "react"
import styled from "styled-components"
import Sidebar from "./sidebar"
import "./layout.css"

export default ({ children }) => (
  <Container>
    <Sidebar />
    <Wrapper>{children}</Wrapper>
  </Container>
)

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const Wrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
  max-width: 38rem;
  @media (min-width: 64em) {
    margin-left: 22rem;
    margin-right: 4rem;
  }
  @media (min-width: 48em) {
    margin-left: 18rem;
    max-width: 38rem;
  }
`
