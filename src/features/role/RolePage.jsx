import { useEffect, useState } from "react"
import { getAllRoleAsync, addRoleAsync,deleteRoleAsync } from "./roleService"
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

const handleDeleteAsync = async(id)=>{
 await deleteRoleAsync(id);
 setRoles(prev=>prev.filter(r=>r.id !== id));
}

    return (
        <div>
            <RoleTable
                allRoles={roles}
                getShowModal={()=>{setShow(true)}}
                onDelete={handleDeleteAsync}
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


