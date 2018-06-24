// React;
import React from 'react';
import ReactDOM from 'react-dom';
// Files;
import App from './App.jsx';
// Normalize => makes browers render elements consistantly- css reset;
import 'normalize.css/normalize.css';
// Import scss for styles;
// import './styles/styles.scss';

const jsx = (
    <App />
);
// fist permater is starting poing
// second peramter is where to append to HTML
ReactDOM.render(jsx, document.getElementById('app'));