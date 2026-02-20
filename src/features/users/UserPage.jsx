import { useState,useEffect } from "react";
import { getAllUser,addUser,getByIdUserAsync,updateUserAsync,deleteUserAsync } from "./userService"
import { UserTable } from "./UserTable"
import { UserModal } from "./UserModal";
import "./user.css"

export function UserPage(){
   const [users, setUsers] = useState([])
   const [page, setPage] = useState(1)
   const [size, setSize] = useState(10)
   const [showModal,setShowModal] = useState(false)
   const [selectedUser, setSelectedUser] = useState(null)

const fetchUsers = async () => {
  try {
    const response = await getAllUser(page, size);
    setUsers(response.data);
  } catch (error) {
    console.error("Users fetch error:", error);
  }
};

useEffect(() => {
  fetchUsers();
}, [page, size]);

const handleUpdateClick = async (user) => {
  const result = await getByIdUserAsync(user)
  setSelectedUser(result.data)
  setShowModal(true)
}

const handleSaveUser = async (formData)=>{
await addUser(formData);
await fetchUsers();
}
const handleUpdateUser = async(user)=>{
 await updateUserAsync(user);
  setShowModal(false);  
  setSelectedUser(null);
 await fetchUsers();
}
const hendleUserDelete = async(email)=>{
 await deleteUserAsync(email);
 setUsers(prev=> prev.filter(u=>u.email !== email))
}

    return (
  <div>
<div className="addBtn">
<button onClick={() => setShowModal(true)}>Add User</button>
</div>

      <UserTable users={users} onUpdate={handleUpdateClick}
      onDelete={hendleUserDelete}
      />
      
      {showModal && (
        <UserModal 
        onClose={()=>setShowModal(false)}
        onSave={handleSaveUser}
        user={selectedUser}
        onUpdate={handleUpdateUser}
        />
       
      )}

    </div>
    );
}








