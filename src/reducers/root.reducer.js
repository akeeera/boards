import {
    combineReducers
} from '@reduxjs/toolkit'

import { sliceBoards } from './boards.reducer'
import { sliceBoardList } from './boardList.reducer'

export const reducer = combineReducers({
    boards: sliceBoards.reducer,
    boardList: sliceBoardList.reducer,
})