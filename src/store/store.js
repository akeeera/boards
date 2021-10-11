import {
    configureStore
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import {
    createAsyncThunk,
    createSlice,
    combineReducers
} from '@reduxjs/toolkit'

export const preloadedState = {
    boards: {
        data: []
    }
}

export const getBoards = createAsyncThunk(
    'boards/getBoards',
    async () => {
        const boards = JSON.parse(localStorage.getItem('boards'));
        return boards;
    }
)

export const setBoards = createAsyncThunk(
    'boards/setBoards',
    async (boards) => {
        localStorage.setItem('boards', JSON.stringify(boards));
        return boards;
    }
)

export const sliceBoards = createSlice({
    name: 'boards',
    initialState: preloadedState.boards,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBoards.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(setBoards.fulfilled, (state, action) => {
            state.data = action.payload
        })
    },
})

export const reducer = combineReducers({
    boards: sliceBoards.reducer
})

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    preloadedState,
})