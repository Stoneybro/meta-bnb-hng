import { useState } from 'react'
import './App.css'
import Places from './pages/Places'
import Home from './pages/Home'
import Layout from './pages/Layout'
import {Route,Routes} from 'react-router-dom'
function App() {
  const [openwallet, setopenwallet] = useState(false)
  const [sidebar,setsidebar]=useState(false)
  function menu(params) {
    setsidebar(!sidebar)
  }
  function modal(params) {
    setopenwallet(!openwallet)
  }
  return (
<Routes>
  <Route path='/' element={<Layout />} >
    <Route index element={<Home />} />
    <Route path='/places' element={<Places />} />
    <Route />
  </Route>
</Routes>
  )
}

export default App
