import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminProtetedRoute = () => {
    const { user } = useSelector((state) => state.auth)

    if (user?.role === 'admin') {
        return <Outlet />
    } else {
        return <Navigate to="/unauthorised" />
    }
}

export default AdminProtetedRoute
