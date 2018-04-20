import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import './index.css';

const HelmetHead = () => (
  <Helmet>
    <meta name="author" content="David Hartsough" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@David_Hartsough" />
    <meta name="twitter:creator" content="@David_Hartsough" />
    <meta
      name="twitter:image"
      content="http://davidhartsough.com/icon-512x512.png"
    />
    <meta name="twitter:image:alt" content="David Hartsough's logo" />
    <meta property="og:site_name" content="David Hartsough" />
    <meta
      property="og:image"
      itemprop="image"
      content="http://blog.davidhartsough.com/logo.png"
    />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_US" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#198BED" />
    <meta name="apple-mobile-web-app-title" content="David Hartsough" />
    <meta name="application-name" content="David Hartsough" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#198BED" />
    <meta name="msapplication-TileColor" content="#198BED" />
    <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
    <meta name="msapplication-navbutton-color" content="#198BED" />
  </Helmet>
);

export default ({ location, children }) => (
  <div>
    <HelmetHead />
    {children()}
  </div>
);
