import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<ProjectDetail />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
