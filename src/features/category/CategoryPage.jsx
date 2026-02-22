import { useState, useEffect } from "react"
import { getAllCategoryAsync } from "./categoryService.js"
import { CategoryTable } from "./CategoryTable.jsx";

export function CategoryPage(){
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);

const categoryFetch = async()=>{
   const response = await getAllCategoryAsync(page, size);
 setCategories(response.data);
}
    useEffect(()=>{
    categoryFetch();
    },[page,size])

return (
    <div>
        <CategoryTable categories={categories}/>
    </div>
)
}