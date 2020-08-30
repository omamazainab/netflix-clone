import React from 'react';
import Row from './components/Row'

import './App.css';
import { MovieType } from './API/api';

function App() {

  return (
    <div className="App">
      netflix clone
      <Row title={MovieType.TRENDING.title} url={MovieType.TRENDING.url} />
    </div>
  );
}

export default App;
