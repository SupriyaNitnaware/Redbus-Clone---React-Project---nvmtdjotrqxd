import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Foooter from './Foooter';
const App = () => {


  return (
    <div id="main">
      <h1>supriya</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/footer' element={<Foooter />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
