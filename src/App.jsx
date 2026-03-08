import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {UserPage} from "./features/users/UserPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import {CategoryPage} from "./features/category/CategoryPage"
import {WarehousePage} from "./features/warehouse/WarehousePage"
import { DepartmentPage } from './features/department/DepartmentPage'
import { CompanyPage } from './features/company/CompanyPage'


function App() {
  
return(
   <BrowserRouter>
      <Routes>
  <Route path='/' element={<Layout />}>
    <Route path="/users" element={<UserPage />} />
<Route path="/category" element={<CategoryPage />}/>
<Route path="/warehouse" element={<WarehousePage/>}/>
<Route path='/department'element={<DepartmentPage/>}/>
<Route path="/company" element={<CompanyPage/>}/>
  </Route>
</Routes>
    </BrowserRouter>

 
)
 

}

export default App
