module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
  	{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
    `gatsby-transformer-remark`,
  	`gatsby-plugin-netlify-cms`,
  	'gatsby-plugin-react-helmet',
  ],
};
