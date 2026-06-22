
export function EmployeeTable({onEmployees, getModal,employeeId,department,company}){

    return(
        <div>
            <button onClick={getModal}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th>User</th>
                        <th>Company</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {onEmployees.map((employee, index)=>(
                        <tr key={index}>
                            <td>{++index}</td>
                            <td>{employee.fullName}</td>
                            <td>{employee.position}</td>
                            {/* <td>{employee.departmentId}</td> */}
                            <td> {department.find(x=>x.id == employee.departmentId).name
                              }</td> 
                            <td>{employee.userId}</td>
                            {/* <td>{employee.companyId}</td> */}
                            <td>{company.find(x=>x.id == employee.companyId)?.name
                            }</td>
                          
                            <td><button onClick={()=>{employeeId(employee.id)}}>Update</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> 
    )

}