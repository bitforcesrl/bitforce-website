import React, { Fragment, Component } from 'react';

import styles from './header.module.scss';

export type Props = {};
export type State = {
  isOpened: boolean;
};

export default class Header extends Component<Props, State> {
  state = {
    isOpened: false,
  };

  render(): React.ReactNode {
    return <div className={styles.container}>Header</div>;
  }
}
