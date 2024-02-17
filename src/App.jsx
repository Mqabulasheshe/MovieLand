import { useEffect, useState } from 'react'
import './App.css'
//6756c2d5

const API_URL = 'http://www.omdbapi.com/?apikey=6756c2d5';
const App = () => {

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovie('SpiderMan')
  })
  return (
    <>

    </>
  )

}

export default App
