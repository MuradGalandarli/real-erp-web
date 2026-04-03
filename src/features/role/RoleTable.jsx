
export function RoleTable({allRoles,getShowModal}){

return(
    <div>
        <button onClick={getShowModal}>Add</button>
        <table>
            <thead><tr>
                <th>Id</th>
                <th>Name</th>
            </tr></thead>
            <tbody>
                {
                    allRoles.map((role, index)=>(
                        <tr key={index}>
                            <td>{++index}</td>
                            <td>{role.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)

}