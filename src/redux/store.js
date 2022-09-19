import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './userSlice'

export default configureStore({
    reducer: {
        authSlice: AuthReducer
    },
})