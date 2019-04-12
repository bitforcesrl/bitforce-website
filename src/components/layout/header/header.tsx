import React, { Fragment, Component } from 'react';
import { withPrefix, graphql, Link } from 'gatsby';
import get from 'lodash/get';
import styles from './header.module.scss';

export type Props = {};
export type State = {
  isOpened: boolean;
};

export class Header extends Component<Props, State> {
  state = {
    isOpened: false,
  };

  render(): React.ReactNode {
    const menu = get(this, 'props.data.contentfulMenu');
    console.log(this.props);
    return (
      <div className={styles.container}>
        <img src={withPrefix('./media/icon.png')} width="50" />

        {menu.items.map(({ item }) => {
          return (
            <li>
              <Link to={`/${item.slug}`}>{item.label}</Link>
            </li>
          );
        })}
      </div>
    );
  }
}

export const query = graphql`
  query MenuQuery($language: String = "it-IT") {
    contentfulMenu(node_locale: { eq: $language }) {
      items {
        label
        link
      }
    }
  }
`;
