import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './styled'
import { apiKey } from '../../config/key'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function MovieDetail() {
   const {id} = useParams()

   const [ movie, setMovie] = useState({})
   const imgPath = `https://image.tmdb.org/t/p/w500/`

   useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => response)
    .then(data => {
      const { title, poster_path, overview, release_date } = data.data
      const movie = {
        id,
        title,
        sinopse: overview,
        image: `${imgPath}${poster_path}`,
        releaseDate: release_date,
      }
      setMovie(movie)
    })
    .catch(error => console.error(error))
   }, [id])
   console.log(movie);
  return (
    
      <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.title} />
      <div className="details">
        <h1 className="title">{movie.title}</h1>
        <span className="sinopse">{movie.sinopse}</span>
        <span className="release-date">{movie.releaseDate}</span>
        <Link to="/">
        <button>Go Back</button>
        </Link>
       
      </div>
      </div>
      </Container>
  )
}
