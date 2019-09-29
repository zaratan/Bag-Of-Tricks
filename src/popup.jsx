// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './popup.css';

const reactDiv = document.getElementById('react-app');

if (reactDiv) ReactDOM.render(<App />, reactDiv);
