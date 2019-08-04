// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from '@pages/app';

// Service Worker
import * as serviceWorker from './serviceWorker';

// Stylesheet
import '@assets/scss/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
