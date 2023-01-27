import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import LayoutContainer from '../components/LayoutContainer';
import { loadUser } from '../redux/authSlice';
import { activateLoder, deactivateLoader } from '../redux/loadingSlice';

import { loadUserService } from '../services/userService'

const Home = () => {
    const dispatch = useDispatch();
    const loadUserInfo = async () => {
        try {
            dispatch(activateLoder());
            const response = await loadUserService()
            dispatch(loadUser({...response.data}))
            dispatch(deactivateLoader());
            const user = response.data
            console.log(response.data)
        } catch (error) {
            dispatch(deactivateLoader());
            console.log(error)
        }
    }

    useEffect(() => {
        loadUserInfo()
    }, [])
    return (
        <LayoutContainer>
            <h1>
                Homepage
            </h1>
        </LayoutContainer>
    )
}

export default Home
