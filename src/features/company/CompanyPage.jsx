import { useEffect, useState } from "react"
import { getAllCompanyAsync, updateCompanyAsync, addCompanyAsync } from "./companyService"
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

    const handleGetByIdCompany = (id) => {
        const company = companies.find(c => c.id === id)
        setSelectCompany(company)
        setShowModal(true)
    }

    const handleUpdateCompany = async (company) => {
        const newCompany = {
            "company": {
                "id": company.id,
                "name": company.name,
                "email": company.email,
                "phone": company.phone,
                "address": company.address,
                "country": company.company,
                "city": company.city
            }
        }

        await updateCompanyAsync(newCompany)
        console.log(company)
        setShowModal(false)
        setCompanies(prev => prev.map(c => c.id === company.id ? company : c))
        setSelectCompany(null);
    }

    const addCompay = async(data)=>{
  const company ={ "companyDto": {
   
    "name": data.name,
    "email": data.email,
    "phone": data.phone,
    "address": data.address,
    "country": data.country,
    "city": data.city
  }
    }
            await addCompanyAsync(company);
            setShowModal(false);
             setCompanies(prev=>[...prev,data]);

}


return (
    <div>
        <CompanyTable onCompany={companies} getShowModal={handleGetByIdCompany} 
         getModal={()=>{setShowModal(true)}}
        />

        {showModal && (
            <CompanyModal
                onClose={() => setShowModal(false)}
                company={selectCompany}
                onUpdate={handleUpdateCompany}
                onAdd={addCompay}
            />
        )}


    </div>

)
}