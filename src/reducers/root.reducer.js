import {
    combineReducers
} from '@reduxjs/toolkit'

import { sliceBoards } from './boards.reducer'
import { sliceCards } from './cards.reducer'

export const reducer = combineReducers({
    boards: sliceBoards.reducer,
    cards: sliceCards.reducer,
})