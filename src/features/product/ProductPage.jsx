import { useState, useEffect } from "react"
import { getAllProductAsync, addProductAsync, deleteProductAsync } from "./productService"
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
    }, [page, size,products]);

    const addProduct = async (product) => {
        await addProductAsync(product);
        setShow(false);
       await getAllProduct()
    }

    const deleteProduct = async(id)=>{
        await deleteProductAsync(id);
        setProducts(prev=>prev.filter(p=>p.id !== id))
    }

    return (
        <div>
            <ProductTable 
            onProducts={products} getModal={() => { setShow(true) }}
            onDelete={deleteProduct}
            />
            {show &&
                <ProductModal onNewProduct={addProduct} />
            }
        </div>
    )
}






