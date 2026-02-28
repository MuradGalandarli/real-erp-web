import { useState, useEffect } from "react"
import { getAllWarehouseAsync, addWarehouseAsync } from "./warehouseService"
import { WarehouseTable } from "./WarehouseTable"
import { WarehouseModal } from "./WarehouseModal"

export function WarehousePage() {

    const [warehouses, setWarehouse] = useState([]);
    const [size, setSize] = useState(1)
    const [page, setPage] = useState(10)
    const[showModal, setShowModal] = useState(false)


    const handleGetAllWarehouse = async () => {
        const getWarehouses = await getAllWarehouseAsync(size, page)
        setWarehouse(getWarehouses.data)
    }

    useEffect(() => {
        handleGetAllWarehouse();
    }, [page, size])

   
    const handleWarehouseAdd = async (data) => {
        debugger
    const response = await addWarehouseAsync(data);
   
        setWarehouse(prev => [...prev, data]);
        setShowModal(false);
}


    return (
        <div>
            <WarehouseTable data={warehouses} onAddModal={()=>{{console.log(showModal)} setShowModal(true)}} />

            {showModal &&
                <WarehouseModal onAdd={handleWarehouseAdd } onClose={() => { setShowModal(false) }} />
            }
        </div>
    )
}
