import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default () => (
  <Container>
    <HeadingLink to="/">
      <Heading>Sam Abazly</Heading>
    </HeadingLink>
  </Container>
)

const Container = styled.div`
  background: #202020;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  padding: 2rem 1rem;
  @media (min-width: 48em) {
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

const Lead = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  @media (max-width: 768px) {
    display: none;
  }
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

const CopyLine = styled.p`
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`
