import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  //BrowserRouter is used for doing client side routing 
  <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById('root')
);
