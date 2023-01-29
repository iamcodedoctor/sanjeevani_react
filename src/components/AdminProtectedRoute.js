import { Navigate, Outlet } from 'react-router-dom'
import { activateLoder, deactivateLoader } from '../redux/loadingSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUserService } from '../services/userService'
import { loadUser } from '../redux/authSlice'

const AdminProtetedRoute = () => {
    const {user} = useSelector((state) => state.auth);
    
    if (user?.role === 'admin') {
        return <Outlet />
    } else {
        return <Navigate to="/" />
    }
}

export default AdminProtetedRoute