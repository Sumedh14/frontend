import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'bootstrap/dist/css/bootstrap.css';


//import '/bootstrap/dist/css/bootstrap.min.css';
import HeaderAll from './components/SharedComponent/HeaderAll';



const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <HeaderAll />

    <App history={history} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
