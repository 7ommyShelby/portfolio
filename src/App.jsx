import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './comp/Home'
import Contact from './comp/Contact'
import Skills from './comp/Skills'
import Projects from './comp/Projects'
import About from './comp/About'
import Screen from './comp/Screen'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='' element={<Screen />} />
            <Route path='about' element={<About />} />
            <Route path='skill' element={<Skills />} />
            <Route path='contact' element={<Contact />} />
            <Route path='project' element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
