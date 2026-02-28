
export function WarehouseTable({ data,onAddModal }) {

    return(
        <div>
            <button onClick={onAddModal}>Add</button>
        
    <table>
        
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Company</th>
        </tr>

        { data.map((warehouse, index) => (
            <tr key={index}>
                <td>{++index}</td>
                <td>{warehouse.name}</td>
                <td>{warehouse.description}</td>
                <td>{warehouse.location}</td>
                <td>{warehouse.companyId}</td>
            </tr>
        ))}

    </table>
    </div>
    )
}