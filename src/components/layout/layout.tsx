import React, { PureComponent } from 'react';

import { Header } from './header/header';

export class Layout extends PureComponent<any> {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
