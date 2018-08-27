const languages = require('./src/data/languages')

module.exports = {
  siteMetadata: {
    title: `Gatsby Tips Diana 4.0`,
    languages,
  },
  plugins: [
    // plugin modify header page html
    `gatsby-plugin-react-helmet`, 

    // plugin transform file markdown to hmtl
    `gatsby-transformer-remark`,

    // plugin scan files in project to find out all file markdown
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/post`,
        name: 'markdown-pages',
      },
    },

    // plugin netlify to commit new file markdown to repository, create new post, admin ui
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: `true`,
        publicPath: `admin`,
        htmlTitle: `Content Manager`,
      },
    },

    // plugin international localization
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        markdownRemark: {
          postPage: 'src/templates/post.js',
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
          `
        },
      },
    },
  ],
}
