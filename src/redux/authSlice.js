import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loadUser: (state, action) => {
            state.user = action.payload
        },
        logoutUser: (state) => {
            state.user = null
        },
    },
})

export const {
    loadUser,
    logoutUser
} = authSlice.actions

export default authSlice.reducer
