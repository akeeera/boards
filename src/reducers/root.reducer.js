import {
    combineReducers
} from '@reduxjs/toolkit'

import { sliceBoards } from './boards.reducer'

export const reducer = combineReducers({
    boards: sliceBoards.reducer
})