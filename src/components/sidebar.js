import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"

export default () => (
  <Container>
    <HeadingLink to="/">
      <Headshot src="/headshot.jpg" />
      <Heading>Sam Abazly</Heading>
    </HeadingLink>
    <Title>Software Engineer</Title>
    <Title>Decent Human</Title>
    <Title>Total Nerd</Title>
    <Spacer />
    <ExternalSites>
      <Icon href="https://www.linkedin.com/in/bassam-abazly-ii/">
        <FaLinkedin size="2rem" />
      </Icon>
      <Icon href="https://twitter.com/bassamabazlyii">
        <FaTwitter size="2rem" />
      </Icon>
      <Icon href="https://github.com/bazomatic">
        <FaGithub size="2rem" />
      </Icon>
    </ExternalSites>
    <CopyLine>Copyright © 2020 Bassam Abazly II</CopyLine>
  </Container>
)

const Container = styled.div`
  background: #202020;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 48rem) {
    width: 18rem;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
  }
`

const Spacer = styled.div`
  flex: 1;
`

const Title = styled.div``

const ExternalSites = styled.div`
  display: flex;
  justify-content: center;
`

const Headshot = styled.img`
  width: 12rem;
  border-radius: 50%;
`

const Heading = styled.h1`
  color: white;
  margin: 0;
`

const Icon = styled.a`
  text-decoration: none;
  color: inherit;
  margin: 1rem;
`

const HeadingLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const CopyLine = styled.div`
  height: 1rem;
`
