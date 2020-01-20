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
  text-align: left;
  flex: 1 25%;
  padding: 2rem 1rem;
  @media (max-width: 768px) {
    padding: 0.25rem 1rem;
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
