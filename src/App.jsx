import { useState } from 'react'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/common/NavBar'
import Index from './components/Index/Index'
import NewItem from './components/ItemForm/NewItem'
import EditItem from './components/ItemForm/EditItem'
import Show from './components/Show/Show'
import Outfits from './components/Outfits/Outfits'

import './index.css'
import './index_mobile.css'
import splashBG from './assets/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg'
// import Outfits from './components/Outfits/Outfits'


function App() {

  const [bg, setBg] = useState(splashBG)

  return (
    <>
      <Router>
        <main>
          <div id='bgimage' style= {{
            'backgroundImage': `url(${splashBG})`,
          }}
          >
            s
          </div>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/clothes/new' element={<NewItem/>}/>
            <Route path='/clothes/:id' element={<Show/>}/>
            <Route path='/clothes/:id/edit' element={<EditItem/>}/>
            <Route path='/outfits/' element={<Outfits/>}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
