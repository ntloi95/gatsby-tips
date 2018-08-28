import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './selectLanguage';

const Header = (props) => (
    <div
        style={{
            background: 'rebeccapurple',
            marginBottom: '1.45rem',
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                   {props.title}
                </Link>
            </h1>
            <SelectLanguage langs={props.langs} />
        </div>
    </div>
)

export default Header;