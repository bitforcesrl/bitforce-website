import React, { Component } from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

class HomeIndex extends Component {
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

export const query = graphql`
  query ServicesPageIndex($language: String) {
    contentfulPage(slug: { eq: "services" }, node_locale: { eq: $language }) {
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
