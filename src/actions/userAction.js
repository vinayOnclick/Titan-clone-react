import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const registerUser = createAsyncThunk(
    'user/register', 
    async ({ number }, { rejectWithValue }) => {
        try {
        const config = {
        headers: {
        'Content-Type': 'application/json',
        },
    }
    await axios.post(
        '/api/user/register',
        { number},
        config
        )
        } catch (error) {
    
            
        if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
        } else {
        return rejectWithValue(error.message)
        }
        }
        
        }
)
