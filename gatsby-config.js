module.exports = {
  pathPrefix: "/sanchez-portfolio",
  siteMetadata: {
    title: "Jenny Hsiao Sanchez",
    description: "Jenny Hsiao Sanchez's portfolio of work as a maker, design thinker, and a professional multidisciplinary Designer.",
    keywords: "gatsby,theme,carbon",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Carbon Design Gatsby Theme",
        icon: "src/images/favicon.svg",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
    'gatsby-theme-carbon'
  ],
};
