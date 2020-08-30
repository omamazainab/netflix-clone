import React,{useEffect, useState} from 'react'
import {fetchMovies} from '../API/api'

const Row = ({title,url}) => {

    const [movies,setMovies] = useState([])

    useEffect(() => {
        async function api () {
          const result = await fetchMovies(url)
          setMovies(result.results)
          
        };
        api();
    
      }, [url])
     

      console.log(movies)
    return (
        <div>
           { title}
        </div>
    )
}

export default Row
