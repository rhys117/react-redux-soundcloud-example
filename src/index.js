import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

ReactDOM.render(
  <Stream tracks={tracks} />,
  document.getElementById('app')
);

module.hot.accept();