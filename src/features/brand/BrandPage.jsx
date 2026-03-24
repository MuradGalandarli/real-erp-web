import { useEffect, useState } from "react"
import { getAllBrandAsync, addProductAsync } from "./brandService"
import { BrandTable } from "./BrandTable"
import { BrandModal } from "./BrandModal";

export function BrandPage({ onData }) {

    const [brands, setBrands] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [show, setShow] = useState(false);

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

    return (
        <div>
            <BrandTable onData={brands} getModal={() => { setShow(true) }} />
            {show &&
                <BrandModal onAdd={handleAddBrand} onClose={() => { setShow(false) }} />
            }
        </div>
    )
}