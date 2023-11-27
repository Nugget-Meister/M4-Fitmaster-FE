import { useState } from 'react'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/common/NavBar'
import Index from './components/Index/Index'
import NewItem from './components/ItemForm/NewItem'
import EditItem from './components/ItemForm/EditItem'
import 

import './index.css'
import splashBG from './assets/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg'


function App() {

  const [bg, setBg] = useState(splashBG)

  return (
    <>
      <Router>
        <main style={{
          'backgroundImage': `url(${splashBG})`,
        }}>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/clothes/edit' element={''}/>
            <Route path='/clothes/new' element={<NewItem/>}/>
            <Route path='/clothes/:id' element={''}/>
            <Route path='/clothes/:id/edit' element={''}/>
            <Route path='/outfits/' element={''}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
