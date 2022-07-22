import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ fullName, email, password }) => {
        try {
            const { data } = await axios.post('/auth/registration', {
                fullName,
                email,
                password,
            })
            if(data.token){
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }) => {
        try {
            const { data } = await axios.post('/auth/login', {
                email,
                password,
            })
            if(data.token){
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        // Register
        [registerUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.user_id
            state.token = action.payload.token
        },
        [registerUser.rejected]: (state, action) => {
            state.status = action.payload.user_id
            state.isLoading = false
        },
        // Login
        [loginUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.user_id
            state.token = action.payload.token
        },
        [loginUser.rejected]: (state, action) => {
            state.status = action.payload.user_id
            state.isLoading = false
        },
    }
})

export default authSlice.reduser