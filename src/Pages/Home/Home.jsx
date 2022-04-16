import React,{useEffect, useState} from 'react'
import { Container, MovieList, Movie } from './styled'
import { apiKey } from '../../keys/key'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Home() {

  const [ movies, setMovies] = useState([])
  const imgPath = `https://image.tmdb.org/t/p/w500`
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => response)
    .then(data => setMovies(data.data.results))
    .catch(error => console.error(error))
  }, [])
  console.log(movies);
  return (
    <Container>
      <div>
        <h1>MOVIES</h1>
      </div>
      <div>
        <MovieList>
            {movies.map(movie => {
            return (
          <Movie key={movie.id}>
             <Link to={`/movie/${movie.id}`}>
            <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} />
            </Link>               
           
              <span>{movie.title}</span>
          </Movie>
            )
          })}  
          
        </MovieList>
      </div>
    </Container>
  )
}
