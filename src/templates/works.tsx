import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

class HomeIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const page = get(this, 'props.data.contentfulPage');

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div>{page.title}</div>
      </div>
    );
  }
}

export default HomeIndex;

export const pageQuery = graphql`
  query WorksPageIndex($language: String) {
    contentfulPage(slug: { eq: "works" }, node_locale: { eq: $language }) {
      title
      metaDescription {
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
  }
`;
