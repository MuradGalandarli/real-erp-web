import { useEffect, useState } from "react" 


export function CategoryModal({onClose, category}){

    const [data, setData] = useState({
        id :"id",
        name : "",
        description : "",
        company : ""
    })


    useEffect(
        ()=>{
             if(category)
                
                setData({
                    "id" : category.id,
                    "name" : category.name,
                    "description" : category.description,
                    "company" : category.companyId
                })
                console.log(data)

    },[category]
    )

  return(  <div className="modal-overlay">
        <div className="modal">
            <h2>Update</h2>
            <input name="name" placeholder="name" value={data.name}/>
            <input name="description" placeholder="description" value={data.description}/>
            <input name="company" placeholder="company" value={data.company}/>
<div className="modal-buttons">

<button>Save</button>
<button onClick={onClose}>Cancel</button>

</div>
        </div>
    </div>
  )
}