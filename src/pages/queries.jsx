import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
// import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const posts = get(this.props, 'data.posts.edges');
    const post = get(this.props, 'data.post');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div>
          <Img alt={post.title} sizes={post.heroImage.sizes} />
        </div>
        <div className="wrapper">
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <Link to={`/blog/${node.slug}`}>{node.title}</Link>
                </li>
              );
            })}
          </ul>
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query {
    posts: allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        next {
          title
        }
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    post: contentfulBlogPost(contentful_id: { eq: "3K9b0esdy0q0yGqgW2g6Ke" }) {
      title
      slug
      publishDate(formatString: "MMMM Do, YYYY")
      tags
      heroImage {
        resize(width: 450, quality: 100) {
          src
        }
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    menu: allContentfulMenu(
      filter: { position: { eq: "main-menu" }, node_locale: { eq: "it-IT" } }
    ) {
      edges {
        node {
          items {
            id
            label
            link
          }
        }
      }
    }
  }
`;
