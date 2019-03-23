import React from 'react';
import ReactDOM from 'react-dom';

import { createApp } from './App';

const App = createApp;

const rootElement = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootElement
);