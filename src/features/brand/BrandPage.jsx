import { useEffect, useState } from "react"
import { getAllBrandAsync } from "./brandService"
import { BrandTable } from "./BrandTable"

export function BrandPage({ onData }) {

    const [brands, setBrands] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);

    const handlerGetAllBrand = async () => {
        const brands = await getAllBrandAsync(page, size);
        console.log(brands.data)
        setBrands(brands.data);
    }
    useEffect(
        () => {
         handlerGetAllBrand() } 
        ,
        [page, size]
        )

    return (
        <div>
<BrandTable onData={brands}/>
        </div>
    )
}