module.exports = {
  siteMetadata: {
    siteTitle: `Gatsby Drupal Benchmark`,
  },
  plugins: [
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
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://dev-willitbuild01.pantheonsite.io//`,
        // Auth needed for POST
      },
    },
  ],
}
