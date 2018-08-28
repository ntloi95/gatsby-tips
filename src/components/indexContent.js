import React from 'react'
import g from 'glamorous'
import { rhythm } from '../utils/typography'
import Link from 'gatsby-link'

const IndexContent = props => {
  const { data } = props
  return (
    <div>
      <g.H1 display={'inline-block'}>#TBD</g.H1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.frontmatter.title}{' '}
              <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
            </g.H3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export default IndexContent
