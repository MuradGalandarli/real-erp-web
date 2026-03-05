export function DepartmentTable({ departments,getModal }) {
  return (
    <div>
      <button onClick={getModal}>Add</button>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={department.id}>
              <td>{++index}</td>
              <td>{department.name}</td>
              <td>{department.companyId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}