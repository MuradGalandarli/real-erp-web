import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {UserPage} from "./features/users/UserPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  
return(
   <BrowserRouter>
      <Routes>
  <Route path='/' element={<Layout />}>
  {/* <Route path='/' element={<Layout/>}>
  </Route> */}
    <Route path="/users" element={<UserPage />} />
  </Route>
</Routes>
    </BrowserRouter>

 
)
 

}

export default App
