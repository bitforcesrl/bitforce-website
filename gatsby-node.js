// const Promise = require('bluebird')
const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const blogPost = path.resolve('./src/templates/blog-post.jsx');

  languages = ['it-IT', 'en-US'];

  languages.forEach(language => {
    return new Promise((resolve, reject) => {
      resolve(
        graphql(
          `
            {
              allContentfulBlogPost {
                edges {
                  node {
                    title
                    slug
                  }
                }
              }
            }
          `,
        ).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          const posts = result.data.allContentfulBlogPost.edges;
          posts.forEach((post, index) => {
            createPage({
              path: `/${language}/blog/${post.node.slug}/`,
              component: blogPost,
              context: {
                slug: post.node.slug,
                language: language,
              },
            });
          });
        }),
      );
    });
  });
};
