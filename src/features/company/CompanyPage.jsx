import { useEffect, useState } from "react"
import { getAllCompanyAsync } from "./companyService"
import { CompanyTable } from "./CompanyTable"
import { CompanyModal } from "./CompanyModal"

export function CompanyPage() {
    const [companies, setCompanies] = useState([])
    const [size, setSize] = useState(10)
    const [page, setPage] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const [selectCompany, setSelectCompany] = useState(null)

    const getAllCompany = async () => {
        try {
            const response = await getAllCompanyAsync(page, size);
            setCompanies(response.data.companyDto || []);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getAllCompany();
    }, [size, page])

const handleGetByIdCompany = (id)=>{
    debugger
const company = companies.find(c=>c.id === id)
setSelectCompany(company)
setShowModal(true)
}


    return (
        <div>
            <CompanyTable onCompany={companies} getShowModal={ handleGetByIdCompany } />

            {showModal && (
                <CompanyModal onClose={() => setShowModal(false)} company={selectCompany} />
            )}


        </div>

    )
}