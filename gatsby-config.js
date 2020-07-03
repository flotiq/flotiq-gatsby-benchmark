require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteTitle: `Gatsby Flotiq Benchmark`,
  },
  plugins: [
    {
      resolve: `gatsby-source-flotiq`,
      options: {
        baseUrl: process.env.GATSBY_FLOTIQ_API_URL,
        authToken: process.env.GATSBY_FLOTIQ_API_TOKEN,
        forceReload: false, //(optional)
        includeTypes: [`article`,`_media`],
      },
    },
    `gatsby-plugin-benchmark-reporting`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: `Article`,
        imagePath: `test`,
        prepareUrl: function (url) {
          console.log('test',  url)
          return url
        },
      },
    },

  ],
}
