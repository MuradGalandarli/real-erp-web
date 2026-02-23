import { useState, useEffect } from "react"
import { getAllCategoryAsync, deleteCategoryAsync} from "./categoryService.js"
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

    const deleteCategory = async (id)=>{
 await deleteCategoryAsync(id);
 setCategories( categories.filter(c=>c.id !== id))
    }

return (
    <div>
        <CategoryTable categories={categories} onDelete={deleteCategory}/>
    </div>
)
}