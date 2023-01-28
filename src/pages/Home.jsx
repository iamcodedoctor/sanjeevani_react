import { activateLoder, deactivateLoader } from '../redux/loadingSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadUserService } from '../services/userService'
import { loadUser } from '../redux/authSlice'
const Home = () => {
    const dispatch = useDispatch()
    const loadUserInfo = async () => {
        try {
            dispatch(activateLoder())
            if(localStorage.getItem('token') !== null) {
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
    return <h1>Homepage</h1>
}

export default Home
