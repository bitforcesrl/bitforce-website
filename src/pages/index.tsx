import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import '@src/assets/styles/styles.scss';

class HomeIndex extends PureComponent {
  componentDidMount() {
    const langCode = navigator.language.split('-')[0];
    document.location.replace('/' + langCode);
  }

  render() {
    return (
      <div style={{ background: '#fff' }}>
        <Helmet title="Bitforce" />
      </div>
    );
  }
}

export default HomeIndex;
