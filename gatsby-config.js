const contentful = require('contentful');
const manifestConfig = require('./manifest-config');
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID } = process.env;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

module.exports = client.getEntries().then(entries => {
  // const aboutEntry = entries.items.find(
  //   entry => entry.sys.contentType.sys.id === 'about',
  // );
  // const about = aboutEntry.fields;

  return {
    plugins: [
      'gatsby-plugin-sharp',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-typescript',
      {
        resolve: 'gatsby-plugin-manifest',
        options: manifestConfig,
      },
      'gatsby-plugin-styled-components',
      {
        resolve: `gatsby-plugin-sass`,
        options: {
          cssLoaderOptions: {
            camelCase: false,
          },
        },
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [`cabin`, `Open Sans`],
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: SPACE_ID,
          accessToken: ACCESS_TOKEN,
        },
      },
      // {
      //   resolve: `gatsby-source-medium`,
      //   options: {
      //     username: about.mediumUser,
      //   },
      // },
      'gatsby-transformer-remark',
      'gatsby-plugin-offline',
    ],
  };
});
