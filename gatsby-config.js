module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `pages`,
          path: `${_dirname}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `posts`,
          path: `${_dirname}/src/posts`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `images`,
          path: `${_dirname}/src/images`
      },
    },
  ],
}
