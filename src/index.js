import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App/App';
import './Stylesheets/main.sass';

const title = 'React with webpackbabel';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();