import React from 'react';
import Row from './components/Row'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Footer from './components/Footer'

import './App.css';
import { MovieType } from './API/api';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Row
        title={MovieType.NETFLIXORIGINALS.title}
        url={MovieType.NETFLIXORIGINALS.url}
        isLargeRow={true}
      />
      <Row
        title={MovieType.TRENDING.title}
        url={MovieType.TRENDING.url}
      />
      <Row
        title={MovieType.TOP_RATED.title}
        url={MovieType.TOP_RATED.url}
      />
      <Row
        title={MovieType.UPCOMING.title}
        url={MovieType.UPCOMING.url}
      />
      <Row
        title={MovieType.ACTION.title}
        url={MovieType.ACTION.url}
      />
      <Row
        title={MovieType.COMEDY.title}
        url={MovieType.COMEDY.url}
      />
      <Row
        title={MovieType.HORROR.title}
        url={MovieType.HORROR.url}
      />
      <Row
        title={MovieType.ROMANCE.title}
        url={MovieType.ROMANCE.url}
      />
      <Row
        title={MovieType.TOP_RATED.title}
        url={MovieType.TOP_RATED.url}
      />
      <Row
        title={MovieType.FANTASY.title}
        url={MovieType.FANTASY.url}
      />
      <Row
        title={MovieType.THRILLER.title}
        url={MovieType.THRILLER.url}
      />
      <Footer />
    </div>
  );
}

export default App;
