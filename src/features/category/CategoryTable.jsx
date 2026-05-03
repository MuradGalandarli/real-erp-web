
export function CategoryTable({ categories, onDelete, onUpdateGet, onAdd, onCompany }) {
    return (
        <div>
            <button type="button" onClick={onAdd}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Company</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr key={index}>
                            <td>{++index}</td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            {/* <td>{category.companyId}</td> */}
                            <td> {onCompany.find(x => x.id === Number(category.companyId))?.name}</td>
                            <td><button onClick={() => onUpdateGet(category.id)}>Update</button></td>
                            <td><button onClick={() => onDelete(category.id)}>Delete</button></td>

                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )

}