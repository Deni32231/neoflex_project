import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    posts: [],
    loading: false,
}

export const createClaim = createAsyncThunk(
    'add_claim/create_claim',
    async (params) => {
        try {
            const { data } = await axios.post('/claim', params)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const claimSlice = createSlice({
    name: 'claim',
    initialState,
    reducers: {},
    extraReducers: {
        [createClaim.pending]: (state) => {
            state.loading = true
        },
        [createClaim.fulfilled]: (state) => {
            state.loading = false
        },
        [createClaim.rejected]: (state) => {
            state.loading = false
        },
    },
})



export default claimSlice.reducer