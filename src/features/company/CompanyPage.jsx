import { useEffect, useState } from "react"
import { getAllCompanyAsync } from "./companyService"
import { CompanyTable } from "./CompanyTable"

export function CompanyPage() {
    const [companies, setCompanies] = useState([])
    const [size, setSize] = useState(10)
    const [page, setPage] = useState(1)

    const getAllCompany = async () => {
    try {
        const response = await getAllCompanyAsync(page,size);
        setCompanies(response.data.companyDto || []);
    } catch (err) {
        console.error(err);
    }
}

    useEffect(() => {
        getAllCompany();
    }, [size, page])

    return (
        <CompanyTable onCompany={companies} />
        
    )
}