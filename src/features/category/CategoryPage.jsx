import { useState, useEffect } from "react"
import { getAllCategoryAsync, deleteCategoryAsync,updateCategoryAsync,addCategoryAsync} from "./categoryService.js"
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
setSelectedCategory(null)
    }
    const handleCategoryUpdate = async (data)=>{

const status =  await updateCategoryAsync(data);

if(status){ 
    setShowModal(false);
setCategories(prev =>
  prev.map(c => c.id === data.id ? data : c)
);
}
    }

    const addCategory = async (category)=>{
        
       const status = await addCategoryAsync(category);
if(status.data){ 
    setShowModal(false);
    setCategories(prev=> [...prev, category])
}
    }

return (
    <div>
        <CategoryTable categories={categories} onDelete={deleteCategory} onUpdate={getByIdCategory} onAdd={() => setShowModal(true)}/>
       {showModal &&
        <CategoryModal onClose={()=>(setShowModal(false))} category={selectedCategory} onUpdate={handleCategoryUpdate} onAdd={addCategory} />
       }
    </div>
)
}