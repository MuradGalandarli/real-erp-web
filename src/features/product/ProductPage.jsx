import { useState, useEffect } from "react"
import { getAllProductAsync, addProductAsync, deleteProductAsync } from "./productService"
import { ProductTable } from "./ProductTable"
import { ProductModal } from "./PrductModal";
import { getAllCategoryAsync } from "../category/categoryService"
import { getAllCompanyAsync } from "../company/companyService"

export function ProductPage() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState([]);
    const [company, setCompany] = useState([])

    const getAllCategory = async () => {
        const category = await getAllCategoryAsync(page, size);
        setCategory(category.data);
    }

    const getAllCompany = async () => {
        const company = await getAllCompanyAsync(page, size);
        setCompany(company.data.companyDto);
    }

    const getAllProduct = async () => {
        const productList = await getAllProductAsync(page, size);
        setProducts(productList.data);
    }

    useEffect(
        () => {
            getAllProduct();
            getAllCompany();
            getAllCategory();
        },
        [page, size]
    )

    useEffect(() => {
    }, [page, size, products]);

    const addProduct = async (product) => {
        await addProductAsync(product);
        setShow(false);
        await getAllProduct()
    }

    const deleteProduct = async (id) => {
        await deleteProductAsync(id);
        setProducts(prev => prev.filter(p => p.id !== id))
    }

    return (
        <div>
            <ProductTable
                onProducts={products}
                getModal={() => { setShow(true) }}
                onDelete={deleteProduct}
                company={company}
                category={category}
            />
            {show &&
                <ProductModal onNewProduct={addProduct}
                    company={company}
                    category={category}
                />

            }
        </div>
    )
}






