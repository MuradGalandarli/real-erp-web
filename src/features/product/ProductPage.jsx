import { useState, useEffect } from "react"
import { getAllProductAsync, addProductAsync } from "./productService"
import { ProductTable } from "./ProductTable"
import { ProductModal } from "./PrductModal";

export function ProductPage() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [show, setShow] = useState(false);

    const getAllProduct = async () => {

        const productList = await getAllProductAsync(page, size);
        setProducts(productList.data);
    }

    useEffect(
        () => {
            getAllProduct();
        },
        [page, size]
    )

    useEffect(() => {
        console.log(products);
    }, [products]);

    const addProduct = async (product) => {
        
        debugger;
        await addProductAsync(product);
        // setShow(false);
    }

    return (
        <div>
            <ProductTable onProducts={products} getModal={()=>{setShow(true)}} />
            {show &&
                <ProductModal onNewProduct={addProduct} />
            }
        </div>
    )
}






