import React from 'react'
import Link from 'gatsby-link'

const IndexContent = props => {
  const { data } = props
  return (
    <div>
      <h1>#TBD</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{' '}
              <span>— {node.frontmatter.date}</span>
            </h3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export default IndexContent
