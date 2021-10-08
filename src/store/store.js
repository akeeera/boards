import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { createAsyncThunk, createSlice, combineReducers } from '@reduxjs/toolkit'

const preloadedState = {
    test: ''
}

export const actionTest = createAsyncThunk(
    'test/actionTest',
    async () => {
        return 'test'
    }
)

export const sliceTest = createSlice({
    name: 'test',
    initialState: preloadedState.test,
    extraReducers: {
    }
})

export const reducer = combineReducers({
})

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    preloadedState,
})