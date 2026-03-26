import { useEffect, useState } from "react"
import { getAllBrandAsync, addProductAsync,updateBrandAsync } from "./brandService"
import { BrandTable } from "./BrandTable"
import { BrandModal } from "./BrandModal";
import { apiClient } from "../../core/api";

export function BrandPage({ onData }) {

    const [brands, setBrands] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [show, setShow] = useState(false);
    const [selectBrand, setSelectBrand] = useState(null)

    const handlerGetAllBrand = async () => {
        const brands = await getAllBrandAsync(page, size);
        setBrands(brands.data);
    }
    useEffect(
        () => {
            handlerGetAllBrand()
        }
        ,
        [page, size]
    )

    const handleAddBrand = async (brand) => {
        await addProductAsync(brand);
        setBrands(prev => [...prev, brand])
        setShow(false);
    }

    const hnadleGetByIdBrand = (id) => {
        const brand = brands.find(x => x.id === id);
        setSelectBrand(brand);
        setShow(true);
    }
    const handleUpdateBrand = async (brand)=>{
       await updateBrandAsync(brand);
       setBrands(prev=> prev.map(b=>b.id === brand.id ? brand : b))
        setShow(false);

    }

    return (
        <div>
            <BrandTable onData={brands} getModal={() => { setShow(true) }} onBrand={hnadleGetByIdBrand} />
            {show &&
                <BrandModal 
                onAdd={handleAddBrand} 
                onClose={() => { setShow(false);setSelectBrand(null) }}
                 onBrand={selectBrand} 
                 onUpdate={handleUpdateBrand}/>
            }
        </div>
    )
}