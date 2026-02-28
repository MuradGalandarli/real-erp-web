import { useEffect, useState } from "react" 


export function CategoryModal({onClose, category, onUpdate, onAdd}){

    const [data, setData] = useState({
        id :"",
        name : "",
        description : "",
        companyId : ""
    })


    useEffect(
        ()=>{
             if(category)
                
                setData({
                    "id" : category.id,
                    "name" : category.name,
                    "description" : category.description,
                    "companyId" : category.companyId
                })
                console.log(data)

    },[category]
    )

    const handleSubmit = ()=>{
onUpdate(data);
}

const handleAdd = ()=>{
    onAdd(data)
    }

  return(  <div className="modal-overlay">
        <div className="modal">
            <h2>{category ? "Update" : "Add"} </h2>
            <input name="name" placeholder="name" value={data.name} onChange={(e)=>{setData({...data, name: e.target.value})}}/>
            <input name="description" placeholder="description" value={data.description} onChange={(e)=>{setData({...data, description : e.target.value})}}/>
            <input name="companyId" placeholder="company" value={data.companyId} onChange={(e)=>{setData({...data,companyId: e.target.value})}}/>
<div className="modal-buttons">

<button onClick={category ? handleSubmit : handleAdd}>Save</button>
<button onClick={onClose}>Cancel</button>

</div>
        </div>
    </div>
  )
}