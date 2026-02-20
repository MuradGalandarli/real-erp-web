import "./user.css"


export function UserTable({users,onUpdate,onDelete}){
   
    return(
       <table>
        
<thead>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>SurName</th>
        <th>Email</th>
        <th>Company</th>
        <th>Update</th>
        <th>Delete</th>
    </tr>
</thead>
<tbody>
   
   { users.map((user,index)=>(
<tr  key={user.email}>
    <td>{++index}</td>
    <td>{user.name}</td>
    <td>{user.surname}</td>
    <td>{user.email}</td>
    <td>{user.companyId}</td>
    <td><button onClick={()=>onUpdate(user.email)}>Update</button></td>
    <td><button onClick={()=>onDelete(user.email)}>Delete</button></td>
</tr>
    ))}
</tbody>
       </table>
    )
}



