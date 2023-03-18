import { useState } from 'react'
import Header from './components/header'
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'




import './App.css'

function App() {

  return (
    <div className="App">
      
      <BrowserRouter basename=''>
      <Header />
      <Routes>
      </Routes>
    
    <h1>Front page</h1>
      </BrowserRouter>

    </div>
  )
}

export default App
