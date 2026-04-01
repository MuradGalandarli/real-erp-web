import { useEffect, useState } from "react"
import { getAllRoleAsync } from "./roleService"
import { RoleTable } from "./RoleTable"

export function RolePage() {

    const [roles, setRoles] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);

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

    return (
        <div>
            <RoleTable allRoles={roles} />
        </div>
    )



}


