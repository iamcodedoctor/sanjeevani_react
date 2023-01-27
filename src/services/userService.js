import axios from 'axios'
import baseConfig from '../configs/baseConfig'
import { makeRequest, makeRequestWithToken } from './makeRequest'

const registerUserService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await makeRequest.post('/auth/register', data)
            return resolve(response.data)
        } catch (error) {
            return reject(error)
        }
    })
}

const loginUserService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await makeRequest.post('/auth/login', data)
            return resolve(response.data)
        } catch (error) {
            return reject(error)
        }
    })
}

const loadUserService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`${baseConfig.serverUrl}/user/me`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            return resolve(response.data);
        } catch (error) {
            return reject(error);
        }
    })
}

export { registerUserService, loginUserService, loadUserService }
