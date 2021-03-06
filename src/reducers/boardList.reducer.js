import {
    createSlice,
} from '@reduxjs/toolkit'
import { getBoardList, updateDictionary } from '../actions/boardList.actions'
import { preloadedState } from '../store/preloadedState'

export const sliceBoardList = createSlice({
    name: 'boardList',
    initialState: preloadedState.boardList,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateDictionary.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getBoardList.fulfilled, (state, action) => {
            state.data = action.payload
        })
    },
})