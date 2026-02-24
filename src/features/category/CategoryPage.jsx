import { useState, useEffect } from "react"
import { getAllCategoryAsync, deleteCategoryAsync} from "./categoryService.js"
import { CategoryTable } from "./CategoryTable.jsx";
import { CategoryModal } from "./CategoryModal.jsx"

export function CategoryPage(){
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("")


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

    const getByIdCategory = (id)=>{  
const category = categories.find(c => c.id === id);
setSelectedCategory(category);
setShowModal(true);
    }

return (
    <div>
        <CategoryTable categories={categories} onDelete={deleteCategory} onUpdate={getByIdCategory}/>
       {showModal &&
        <CategoryModal onClose={()=>(setShowModal(false))} category={selectedCategory} />
       }
    </div>
)
}