import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {UserPage} from "./features/users/UserPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import {CategoryPage} from "./features/category/CategoryPage"
import {WarehousePage} from "./features/warehouse/WarehousePage"

function App() {
  
return(
   <BrowserRouter>
      <Routes>
  <Route path='/' element={<Layout />}>
    <Route path="/users" element={<UserPage />} />
<Route path="/category" element={<CategoryPage />}/>
<Route path="/warehouse" element={<WarehousePage/>}/>
  </Route>
</Routes>
    </BrowserRouter>

 
)
 

}

export default App
