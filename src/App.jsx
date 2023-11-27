import { useState } from 'react'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/common/NavBar'
import Index from './components/Index/Index'

function App() {


  return (
    <>
      <Router>
        <main>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Index/>}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
