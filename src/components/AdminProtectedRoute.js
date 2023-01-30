import { RiH1 } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminProtetedRoute = () => {
    const { user } = useSelector((state) => state.auth)

    return (
        <>
            {user?.role === 'admin' ? (
                <Outlet />
            ) : (
                <Navigate to="unauthorised" />
            )}
        </>
    )
}

export default AdminProtetedRoute
