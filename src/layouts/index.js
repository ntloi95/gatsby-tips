import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';
import '../css/index.css'

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
    const url = location.pathname;
    const { langs, defaultLangKey } = data.site.siteMetadata.languages;
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);
    const homeLink = `/${langKey}/`;
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
    console.log(data.site.siteMetadata);
    return (
        <IntlProvider
            locale={langKey}
            messages={i18nMessages}
        >
            <div>
                <Helmet
                    title={data.site.siteMetadata.title}
                />
                <Header langs={langsMenu} title={i18nMessages.title} />
                <div
                    style={{
                        margin: '0 auto',
                        maxWidth: 960,
                        padding: '0px 1.0875rem 1.45rem',
                        paddingTop: 0,
                    }}
                >
                    {children()}
                </div>
            </div>
        </IntlProvider>
    );
};

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
        title
      }
    }
  }
`;