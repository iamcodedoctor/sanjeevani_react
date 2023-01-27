import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
}

export const loadingSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        activateLoder: (state) => {
            state.loading = true
        },
        deactivateLoader: (state) => {
            state.loading = false
        },
    },
})

export const {
    activateLoder,
    deactivateLoader
} = loadingSlice.actions

export default loadingSlice.reducer
