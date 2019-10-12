import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';

const title = 'React with webpack and babel';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();