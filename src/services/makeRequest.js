import axios from 'axios'
import baseConfig from '../configs/baseConfig.js'

const serverUrl = baseConfig.serverUrl

export const makeRequestWithToken = axios.create({
    baseURL: serverUrl,
    
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
})

export const makeRequest = axios.create({
    baseURL: serverUrl
})
