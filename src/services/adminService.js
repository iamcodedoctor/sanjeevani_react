import { makeRequest, makeRequestWithToken } from './makeRequest'

const listUsersService = ({ page, limit }) => {
    return new Promise(async (resolve, reject) => {
        try {
            page = page ? page : 0
            limit = limit ? limit : 10
            const response = await makeRequestWithToken.get(
                `/admin/users?page=${page}&limit=${limit}`
            )
            return resolve(response.data)
        } catch (error) {
            return reject(error)
        }
    })
}

export { listUsersService }
