import { configureStore } from '@reduxjs/toolkit'

import loadingSlice from './loadingSlice'
import authSlice from './authSlice'

const store = configureStore({
    reducer: {
        loader: loadingSlice,
        auth: authSlice
    },
})

export { store }
