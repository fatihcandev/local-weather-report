module.exports = {
  siteMetadata: {
    title: "Local Weather Report",
    description: "Get the weather in your location, quickly!",
    image: "/images/meta-image.jpg",
    url: "https://fatihcandev-local-weather-report.netlify.app",
    twitterUsername: "@fatihcandev",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
  ],
}
