const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

const mdxFile = /mdx*/i

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    if (node.frontmatter.title === "") return
    const baseSlug = createFilePath({ node, getNode, basePath: "posts" })
    let nameArray = baseSlug.replace(/\//g, "").split("-")
    const slug = "/" + nameArray.slice(3)
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
    createNodeField({
      node,
      name: "postType",
      value: "mdx",
    })
    createNodeField({
      node,
      name: "sortDate",
      value: node.frontmatter.date,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { published: { eq: true } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  const posts = result.data.allMdx.edges
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/posts-page-layout.js`),
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    })
  })
}
