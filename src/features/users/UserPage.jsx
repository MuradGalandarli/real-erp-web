import { useState,useEffect } from "react";
import { getAllProduct } from "./userService"
import { UserTable } from "./UserTable"

export function UserPage(){
   const [users, setUsers] = useState([])
   const [page, setPage] = useState(1)
   const [size, setSize] = useState(10)

useEffect(()=>{
     const fetchUsers = async()=>{ setUsers((await getAllProduct(page,size)).data)
    }
fetchUsers()},[]
)

    return (
  <div>
      <UserTable users={users} />
    </div>
    );
}








