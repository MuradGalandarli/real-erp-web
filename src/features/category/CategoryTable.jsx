
export function CategoryTable({categories}){

return (
    
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Company</th>
            </tr>
        </thead>
        <tbody>
            {categories.map((category,index)=>(
             <tr key={index}>
                <td>{++index}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>{category.companyId}</td>
            </tr>
            ))}
            
        </tbody>
    </table>
)

}