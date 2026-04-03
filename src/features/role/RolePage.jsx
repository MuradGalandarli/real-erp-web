import { useEffect, useState } from "react"
import { getAllRoleAsync, addRoleAsync } from "./roleService"
import { RoleTable } from "./RoleTable"
import { RoleModal } from "./RoleModal"

export function RolePage() {

    const [roles, setRoles] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [show, setShow] = useState(false);

    const handleGetAllRole = async () => {
        const roles = await getAllRoleAsync(page, size);
        setRoles(roles.data);
    }

    useEffect(
        () => {
            handleGetAllRole();
        },
        [page, size, roles]
    )

    const handleAddRoel = async (role) => {
        await addRoleAsync(role);
        setRoles(prev=>[...prev, role]);
        setShow(false);
    }

    return (
        <div>
            <RoleTable
                allRoles={roles}
                getShowModal={()=>{setShow(true)}}
            />

            {show &&
                <RoleModal
                    onRole={handleAddRoel}
                    onClose={() => { setShow(false) }}
                />
            }

        </div>
    )



}


