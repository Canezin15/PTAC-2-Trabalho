import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes, Route, BrowserRouter } from "react-router-dom";

import ToDo from './Todo/ToDo.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ToDo/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
