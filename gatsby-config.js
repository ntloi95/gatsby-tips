const languages = require('./src/data/languages')

module.exports = {
  siteMetadata: {
    title: `Gatsby Tips Diana 4.0`,
    languages,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: `true`,
        publicPath: `admin`,
        htmlTitle: `Content Manager`,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        markdownRemark: {
          postPage: 'src/templates/blogTemplate.js',
          query: `
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
          `,
        },
      },
    },
  ],
}
