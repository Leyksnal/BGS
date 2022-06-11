import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Login from './components/Login'
import Post from './components/Post'
import ProjectComp from './components/Project/ProjectComp'
import Register from './components/Register'
import Service from './components/Service/Service'
import About from './components/View/About'
import View from './components/View/View'

export default function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<View/>}/>
        <Route path='/project' element={<ProjectComp/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}
