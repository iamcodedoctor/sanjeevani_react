import { makeRequest } from './makeRequest'

const registerUserService = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await makeRequest.post('/auth/register', data)
            return resolve(response.data)
        } catch (error) {
            return reject(error)
        }
    })
}

const loginUserService = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await makeRequest.post('/auth/login', data)
            return resolve(response.data)
        } catch (error) {
            return reject(error)
        }
    })
}

export { registerUserService, loginUserService }
