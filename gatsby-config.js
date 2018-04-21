module.exports = {
  siteMetadata: {
    siteUrl: `http://davidhartsough.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-51999116-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'David Hartsough',
        short_name: 'David Hartsough',
        description:
          'David Hartsough is a happy human who loves discussing the philosophy and psychology of flourishing, connectedness, and identity.',
        start_url: '/',
        background_color: '#f9fafa',
        theme_color: '#198BED',
        display: 'minimal-ui',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
  ],
};
