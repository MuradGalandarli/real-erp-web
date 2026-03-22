
export function BrandTable({ onData }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {onData.map((brand,index)=>(
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{brand.brandName}</td>
                        <td>{brand.companyId}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )


}