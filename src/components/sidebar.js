import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default () => (
  <Container>
    <HeadingLink to="/">
      <Heading>Sam Abazly</Heading>
    </HeadingLink>
    <CopyLine>Copyright © 2020 Bassam Abazly II</CopyLine>
  </Container>
)

const Container = styled.div`
  background: #202020;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  padding: 2rem 1rem;
  @media (min-width: 48rem) {
    width: 18rem;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    text-align: left;
  }
`

const Heading = styled.h1`
  color: white;
  margin: 0;
`

const Icon = styled.a`
  text-decoration: none;
  color: inherit;
`

const HeadingLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const CopyLine = styled.div`
  text-align: center;
  height: 1rem;
  @media (max-width: 48rem) {
    margin-bottom: 0;
    right: 1rem;
    bottom: 1rem;
    left: 1rem;
  }
`
