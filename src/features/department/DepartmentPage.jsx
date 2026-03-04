import { useEffect, useState } from "react"
import { getAllDepartmentAsync } from "./departmentService"
import {DepartmentTable} from "./DepartmentTable"

export function DepartmentPage(){
const [departments,setDepartments] = useState([]);
const [page,setPage] = useState(1)
const [size, setSize] = useState(10)


const handleDepartmentGetAll = async()=>{
   const datas = await getAllDepartmentAsync(page,size);
   setDepartments(datas.data);
}
useEffect(()=>{
handleDepartmentGetAll();
},[page,size])

    return (
<DepartmentTable departments={departments}/>

    )
}


