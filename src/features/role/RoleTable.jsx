
export function RoleTable({allRoles,getShowModal,onDelete,onUpdate}){

return(
    <div>
        <button onClick={getShowModal}>Add</button>
        <table>
            <thead><tr>
                <th>Id</th>
                <th>Name</th>
                <th>Update</th>
                <th>Delete</th>
            </tr></thead>
            <tbody>
                {
                    allRoles.map((role, index)=>(
                        <tr key={index}>
                            <td>{++index}</td>
                            <td>{role.name}</td>
                            <td><button onClick={()=>{onUpdate(role.id)}}>Update</button></td>
                            <td><button onClick={()=>{onDelete(role.id)}}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)

}