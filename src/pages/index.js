import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <Posts>
        {posts.map(({ node: post }) => (
          <PostExcerpt key={post.id}>
            <Link to={post.fields.slug}>
              <Title>{post.frontmatter.title}</Title>
            </Link>
            <Date>{post.frontmatter.date}</Date>
            <div>{post.excerpt}</div>
          </PostExcerpt>
        ))}
      </Posts>
    </Layout>
  )
}

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2``
const Date = styled.h4``

const PostExcerpt = styled.div`
  margin: 0.5rem;
  padding-bottom: 1rem;
  border-style: none none dashed none;
`

export const postQuery = graphql`
  query postIndex {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
