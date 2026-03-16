export function DepartmentTable({ departments, getModal, onUpdate, onDelete }) {
  return (
    <div>
      <button onClick={getModal}>Add</button>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Company</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={department.id}>
              <td>{++index}</td>
              <td>{department.name}</td>
              <td>{department.companyId}</td>
              <td>{<button onClick={() => { onUpdate(department.id) }}>Update</button>}</td>
              <td>{<button onClick={() => { onDelete(department.id) }}>Delete</button>}</td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}