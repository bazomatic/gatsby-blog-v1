import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import styled from "styled-components"

export default ({ data: { mdx } }) => {
  return (
    <Layout>
      <Container>
        <h1>{mdx.frontmatter.title}</h1>
        <h4>{mdx.frontmatter.date}</h4>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  margin: 0.5rem;
`

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
