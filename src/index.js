import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';

const sampleRotation = [
  { name: "S.S.S", songs: []},
  { name: "Jix", songs: []},
  { name: "Larz", songs: []},
];

ReactDOM.render(
  <App singers={sampleRotation} />,
  document.getElementById('root')
);
