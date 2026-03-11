export function CompanyTable({ onCompany = [], getShowModal, getModal}) {
    return (
        <div>
         <button onClick={getModal}>Add</button>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {onCompany.map((company, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{company.name}</td>
                        <td>{company.email}</td>
                        <td>{company.phone}</td>
                        <td>{company.address}</td>
                        <td>{company.country}</td>
                        <td>{company.city}</td>
                        <td><button onClick={()=>{getShowModal(company.id)}}>Update</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}