import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';

import './index.scss';

@observer
class App extends React.Component {
  render() {
    const {
      title,
    } = this.props;

    return (
      <div className="nr-app">
        <div className="nr-app__controls">
          <h1 className="nr-app__controls--center">{title}</h1>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropType.string.isRequired,
};

export default App;
