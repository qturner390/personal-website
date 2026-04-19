import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import './App.css'

import Resume from './pages/Resume'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import { projects } from './data/projectData'
const projectsData = projects;
import ProjectDetail from './pages/ProjectDetail'
function App() {
  return (
    <>
    <BrowserRouter>
    <div className='app-container'>
    <Navbar />
      <main className="main-content-wrapper">
        <Routes >
          <Route path="/" element = {<Home/>}/>
          <Route path="/home" element = {<Home/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contact" element={<Resume/>}/>
          <Route path="/projects" element={<Projects projects={projectsData}/>}/>
          <Route path="/projects/:id" element={<ProjectDetail/>}/>
        </Routes>
      </main>
    <Footer />
    </div>
    
    </BrowserRouter>
    </>
  )
}

export default App
