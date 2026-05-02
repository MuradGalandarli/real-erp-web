
export function BrandTable({ onData,getModal,onBrand,onDelete }) {

    return (
        <div>
<button onClick={getModal}>Add</button>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {onData.map((brand,index)=>(
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{brand.brandName}</td>
                        <td>{brand.companyId}</td>
                        <th><button onClick={()=>{onBrand(brand.id)}}>Update</button></th>
                        <th><button onClick={()=>{onDelete(brand.id)}}>Delete</button></th>
                    </tr>
                ))}
            </tbody>
        </table>
 </div>
    )
         


}