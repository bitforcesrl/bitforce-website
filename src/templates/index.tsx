import React, { Component } from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Header } from '@src/components';

class HomeIndex extends Component<any> {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const page = this.props.data.contentfulPage;
    console.log(this.props['data']);
    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Header />
        <div
          dangerouslySetInnerHTML={{
            __html: page.body.childMarkdownRemark.html,
          }}
        />
      </div>
    );
  }
}

export default HomeIndex;

export const query = graphql`
  query HomePageIndex($language: String) {
    contentfulPage(slug: { eq: "home-page" }, node_locale: { eq: $language }) {
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
