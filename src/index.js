import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt event has fired')
  e.prompt()
});