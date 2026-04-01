
export function RoleTable({allRoles}){

return(
    <div>
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