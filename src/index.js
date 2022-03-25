import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Article from './Component/Article'



ReactDOM.render(<Article />, document.getElementById('root'));

serviceWorker.unregister();