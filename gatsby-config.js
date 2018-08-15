const languages = require('./src/data/languages');

module.exports = {
    siteMetadata: {
        title: `Gatsby Tips Diana 4.0`,
        languages
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                enableIdentityWidget: `true`,
                publicPath: `admin`,
                htmlTitle: `Content Manager`,
            }
        },
        {
            resolve: 'gatsby-plugin-i18n',
            options: {
                langKeyForNull: 'any',
                langKeyDefault: languages.defaultLangKey,
                useLangKeyLayout: true
            }
        }],
}