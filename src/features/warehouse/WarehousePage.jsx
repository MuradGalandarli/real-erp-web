import { useState, useEffect } from "react"
import { getAllWarehouseAsync, addWarehouseAsync } from "./warehouseService"
import { WarehouseTable } from "./WarehouseTable"
import { WarehouseModal } from "./WarehouseModal"
import { data } from "react-router-dom";

export function WarehousePage() {

    const [warehouses, setWarehouse] = useState([]);
    const [size, setSize] = useState(1)
    const [page, setPage] = useState(10)
    const [showModal, setShowModal] = useState(false)
    const [selectWarehouse, setSelecetWarehouse] = useState(null)

    const handleGetAllWarehouse = async () => {
        const getWarehouses = await getAllWarehouseAsync(size, page)
        setWarehouse(getWarehouses.data)
    }

    useEffect(() => {
        handleGetAllWarehouse();
    }, [page, size])

   
    const handleWarehouseAdd = async (data) => {
     await addWarehouseAsync(data);
   
        setWarehouse(prev => [...prev, data]);
        setShowModal(false);
}

const handleWarehouseUpdate = async(id)=>{
setShowModal(true);
setSelecetWarehouse(warehouses.find(w=>w.id === id));
}

    return (
        <div>
            <WarehouseTable
             data={warehouses} 
             onAddModal={()=>{{setShowModal(true)}} }
             onUpdateModal={handleWarehouseUpdate}
             />

            {showModal &&
                <WarehouseModal
                 onAdd={handleWarehouseAdd } onClose={() => { setShowModal(false) }}
                 data={selectWarehouse}
                 />
            }
        </div>
    )
}
