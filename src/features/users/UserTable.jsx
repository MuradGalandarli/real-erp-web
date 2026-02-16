import "./user.css"


export function UserTable({users}){
   {console.log(users)}
    return(
       <table>
        
<thead>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>SurName</th>
        <th>Email</th>
        <th>Company</th>
    </tr>
</thead>
<tbody>
   
   { users.map((user,index)=>(
<tr key={user.id}>
    
    <td>{++index}</td>
    <td>{user.name}</td>
    <td>{user.surname}</td>
    <td>{user.email}</td>
    <td>{user.companyId}</td>
</tr>
    ))}
</tbody>
       </table>
    )
}



