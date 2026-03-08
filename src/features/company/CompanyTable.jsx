export function CompanyTable({ onCompany = [] }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Country</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {onCompany.map((company, index) => (
                    <tr key={company.id}>
                        <td>{index + 1}</td>
                        <td>{company.name}</td>
                        <td>{company.email}</td>
                        <td>{company.phone}</td>
                        <td>{company.address}</td>
                        <td>{company.country}</td>
                        <td>{company.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}