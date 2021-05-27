module.exports = {
  siteMetadata: {
    title: "Steven Portfolio Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "portfolio",
        dataset: "",
      },
    },
    "gatsby-plugin-gatsby-cloud",
  ],
};
