import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
    name: 'counter',
    initialState: {
        isLoggedIn: false,
        user: {
            name: 'Tanishq'
        }
    },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = false
        }
    }
})

// Action creators are generated for each case reducer function
export const { login, logout } = AuthSlice.actions

export default AuthSlice.reducer