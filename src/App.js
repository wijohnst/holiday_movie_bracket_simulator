import React, { useEffect, useState } from 'react'

// import getMovies from './Utilities/getMovies'
import mockData from './Utilities/mockData'

export default function App() {

  const [ movieData, setMovieData ] = useState(mockData())
  
  useEffect(() =>{
    if(movieData){
      console.log(movieData)
    }
  },[movieData])

  return (
    <div>
      App
    </div>
  )
}
