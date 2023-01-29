import { Navigate, Outlet } from 'react-router-dom'
import { activateLoder, deactivateLoader } from '../redux/loadingSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadUserService } from '../services/userService'
import { loadUser } from '../redux/authSlice'

const ProtectedRoute = () => {
    const dispatch = useDispatch()
    const loadUserInfo = async () => {
        try {
            dispatch(activateLoder())
            if (localStorage.getItem('token') !== null) {
                const response = await loadUserService()
                dispatch(loadUser({ ...response.data }))
                dispatch(deactivateLoader())
                console.log(response.data)
            }
        } catch (error) {
            dispatch(deactivateLoader())
            console.log(error)
        }
    }

    useEffect(() => {
        loadUserInfo()
    }, [])

    if (localStorage.getItem('token')) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
}

export default ProtectedRoute
