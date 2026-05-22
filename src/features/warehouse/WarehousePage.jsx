import { useState, useEffect } from "react"
import { getAllWarehouseAsync, addWarehouseAsync, updateWarehouseAsync, deleteWarehouseAsync } from "./warehouseService"
import { WarehouseTable } from "./WarehouseTable"
import { WarehouseModal } from "./WarehouseModal"
import { data } from "react-router-dom";
import { getAllCompanyAsync } from "../company/companyService"

export function WarehousePage() {

    const [warehouses, setWarehouse] = useState([]);
    const [size, setSize] = useState(1)
    const [page, setPage] = useState(10)
    const [showModal, setShowModal] = useState(false)
    const [selectWarehouse, setSelecetWarehouse] = useState(null)
    const [company, setCompany] = useState([])

const handlegetAllCompany = async ()=>{

    const companies = await getAllCompanyAsync(size,page)
    setCompany(companies.data.companyDto)
}

    const handleGetAllWarehouse = async () => {
        const getWarehouses = await getAllWarehouseAsync(size, page)
        setWarehouse(getWarehouses.data)
    }

    useEffect(() => {
        handleGetAllWarehouse();
        handlegetAllCompany();
    }, [page, size])


    const handleWarehouseAdd = async (data) => {
        await addWarehouseAsync(data);

        setWarehouse(prev => [...prev, data]);
        setShowModal(false);
    }

    const handleUpdateWarehouse = async (data) => {
        updateWarehouseAsync(data)
        setWarehouse(prew => prew.map(w => w.id === data.id ? data : w))
        setShowModal(false);
        setSelecetWarehouse("")
    }

    const handleWarehouseUpdate = async (id) => {
        setShowModal(true);
        setSelecetWarehouse(warehouses.find(w => w.id === id));
    }

    const handleDeleteWarehouse = async(id)=>{
        await deleteWarehouseAsync(id);
        setWarehouse(warehouses.filter(w=>w.id !== id))
    }

    return (
        <div>
            <WarehouseTable
                data={warehouses}
                onAddModal={() => { { setShowModal(true) } }}
                onUpdateModal={handleWarehouseUpdate}
                onDelete={handleDeleteWarehouse}
                companyData={company}
            />

            {showModal &&
                <WarehouseModal
                    onAdd={handleWarehouseAdd} onClose={() => { setShowModal(false), setSelecetWarehouse(null) }}
                    data={selectWarehouse}
                    onUpdate={handleUpdateWarehouse}
                    companyData={company}

                />
            }
        </div>
    )
}
