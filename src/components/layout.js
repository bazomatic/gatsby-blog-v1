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
  max-width: 48rem;
  margin-left: 2rem;
  margin-right: 2rem;
  @media (min-width: 48rem) {
    margin-left: 20rem;
  }
`
