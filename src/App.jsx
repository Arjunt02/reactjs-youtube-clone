import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'


const App = () => {


  const [sidebar,setSidebar]=useState(true)




  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      {/* pass setSidebar in props */}
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        {/* sidebar state is pass in props in home component */}
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App