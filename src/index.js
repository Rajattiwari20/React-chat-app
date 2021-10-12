import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { HashRouter} from 'react-router-dom';


ReactDOM.render(
  //HashRouter is used for doing client side routing 
  <HashRouter>
        <App />
    </HashRouter>,
  document.getElementById('root')
);
