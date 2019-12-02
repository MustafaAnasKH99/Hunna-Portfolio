module.exports = {
  siteMetadata: {
    title: "Hunna - Mothers of The Revolution",
    author: "Mustafa Anas",
    description: "Hunna is a documentary filmed in Lebanon that shows the story of the Syrian revolution told by four Syrian women, an activist - Ghalia Rahhal, an educationist - Ola Aljunde, a feminist - Sabah Hallaq, and a journalist - Fadwa Burhan."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
