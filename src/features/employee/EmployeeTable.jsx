
export function EmployeeTable({onEmployees}){

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th>User</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {onEmployees.map((employee, index)=>(
                        <tr key={index}>
                            <td>{++index}</td>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.departmentId}</td>
                            <td>{employee.userId}</td>
                            <td>{employee.companyId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> 
    )

}