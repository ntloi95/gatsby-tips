import React from "react";
import IndexContent from '../components/indexContent'

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <IndexContent data={data}></IndexContent>
  );
};

export default IndexPage

export const query = graphql`
  query IndexQueryVi {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC} , filter: {fields: {langKey: {eq: "vi"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
