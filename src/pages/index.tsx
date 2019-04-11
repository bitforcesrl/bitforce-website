import React, { Component } from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

// import 'assets/styles/styles.scss';

import '@src/assets/styles/styles.scss';

import { Header } from '@components/layout';

class HomeIndex extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');

    return (
      <div style={{ background: '#fff' }}>
        <Header />
        <Helmet title={siteTitle} />
        <div>Blog</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <Link to={`/blog/${node.slug}`}>{node.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default HomeIndex;

export const pageQuery = graphql`
  query HomeIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
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
  }
`;
