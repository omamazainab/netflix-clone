import React,{useEffect} from 'react';
import './App.css';

function App() {

  useEffect(() => {
    async function fetchAPI() {
      await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3a43e32d072f5f5d520f67541e836179&language=en-US')
        .then(response => response.json())
        .then(data => console.log(data));
    }
    fetchAPI();
  }, [])

  return (
    <div className="App">
      netflix clone
    </div>
  );
}

export default App;
