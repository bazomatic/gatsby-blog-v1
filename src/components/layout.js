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
  display: flex;
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Wrapper = styled.div`
  flex: 2 100%;
  overflow-y: scroll;
  padding: 1rem;
  @media (max-width: 768px) {
    overflow-y: inherit;
  }
`
