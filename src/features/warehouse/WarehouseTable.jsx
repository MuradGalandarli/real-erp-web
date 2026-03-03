
export function WarehouseTable({ data, onAddModal, onUpdateModal,onDelete }) {

    return (
        <div>
            <button onClick={onAddModal}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Company</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((warehouse, index) => (
                        <tr key={index}>
                            <td>{++index}</td>
                            <td>{warehouse.name}</td>
                            <td>{warehouse.description}</td>
                            <td>{warehouse.location}</td>
                            <td>{warehouse.companyId}</td>
                            <td><button onClick={() => { onUpdateModal(warehouse.id) }}>Update</button></td>
                            <td><button onClick={()=>{onDelete(warehouse.id)}}>Delete</button></td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}