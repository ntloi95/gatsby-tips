const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const languages = require(`./src/data/languages`);

// Implement API onCreateNode of Gatsby, call when init nodes in graphQL
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode }).replace('.','/');
    fileName = getNode(node.parent).name;
    langKey = fileName.split(/\.(.+)/)[0];
    
    if (!languages.langs.includes(langKey)) {
      langKey = languages.defaultLangKey
    }

    createNodeField({
      node,
      name: `slug`,
      value: slug
    });

    createNodeField({
        node,
        name: `langKey`,
        value: langKey
      });
  }
};

// Implement API createPages of Gatsby, call when any plugin adds a page
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug,
                langKey
              }
            }
          }
        }
      }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/blogTemplate.js`),
              context: {
                langKey: node.fields.langKey,
                slug: node.fields.slug,
              },
            })
          })
      resolve();
    });
  });
};