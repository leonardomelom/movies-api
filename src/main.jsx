import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home'
import MovieDetail from './Pages/Details/MovieDetails'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/movie/:id' element={<MovieDetail/>}/>
  </Routes>
  </BrowserRouter>
)
