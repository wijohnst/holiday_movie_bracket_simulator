import React, { useEffect, useState } from 'react'
import { ViewProvider } from './Store/ViewContext'

// import getMovies from './Utilities/getMovies'
import mockData from './Utilities/mockData'

import Layout from './Components/Layout'

export default function App() {

  // const [ movieData, setMovieData ] = useState(mockData())
  
  

  return (
    <ViewProvider>
      <Layout />
    </ViewProvider>
  )
}
