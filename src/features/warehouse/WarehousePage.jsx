import { useState, useEffect } from "react"
import { getAllWarehouseAsync } from "./warehouseService"
import { WarehouseTable } from "./WarehouseTable"


export function WarehousePage(){

    const [warehouses,setWarehouse] = useState([]);
    const [size,setSize] = useState(1)
    const [page, setPage] = useState(10)


const handleGetAllWarehouse = async()=>{
const getWarehouses = await getAllWarehouseAsync(size,page)

setWarehouse(getWarehouses.data)


}
 
useEffect(()=>{
    handleGetAllWarehouse(); 
},[page,size])

    return(
<WarehouseTable data={warehouses} />
    )
}
