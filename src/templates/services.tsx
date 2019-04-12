import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

export type Props = {
  data: {
    contentfulPage: {
      title: string;
    };
  };
};
export type State = {};
class HomeIndex extends Component<Props, State> {
  render() {
    const data = this.props.data.contentfulPage;
    console.log(this.props);

    return (
      <div className="container-fluid">
        <Helmet title="TODO" />
        <h1>{data.title}</h1>
      </div>
    );
  }
}

export default HomeIndex;

export const query = graphql`
  query ServicesPageIndex {
    contentfulPage(slug: { eq: "services" }) {
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
      sections {
        title {
          childMarkdownRemark {
            html
          }
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
