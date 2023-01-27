import axios from 'axios'
import baseConfig from '../configs/baseConfig.js'

const serverUrl = baseConfig.serverUrl

export const makeRequest = axios.create({
    baseURL: serverUrl,
})
