module.exports = {
  siteMetadata: {
    title: "My MDX Blog",
    description: "a blog built with Gatsby and MDX",
    image: "/nature.jpg",
    author: "Marcus Karlsson",
  },

  plugins: [
    {
      //defines source filesystem plugin for pages
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `pages`,
          path: `${__dirname}/src/pages`
      },
    },
    {
      //defines source filesystem plugin for posts
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `posts`,
          path: `${__dirname}/src/posts`
      },
    },
    {
      //defines source filesystem plugin for images
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `images`,
          path: `${__dirname}/src/images`
      },
    },
    //defines transformer sharp plugin
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    //defines mdx plugin
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              madWidth: 1200,
            },
          },
        ],
      },
    },
    {
      //defines google fonts plugin and defines what fonts to use
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `muli\:400,400i,700,700i`
        ],
        display: "swap",
      },
    },
  ],
}
