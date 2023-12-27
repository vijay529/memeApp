import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Content from './components/Content/Content.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path={`/memeApp/`} element={<Home />} />
          <Route path={`/`} element={<Home />} />
          <Route path='/meme/:memeId' element={<Content />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
