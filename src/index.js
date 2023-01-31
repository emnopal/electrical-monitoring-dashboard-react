import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './Style/DarkMode.css';
import './Style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
