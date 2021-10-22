import {
    configureStore
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { reducer } from '../reducers/root.reducer'
import { preloadedState } from './preloadedState'
import { cardState } from './cardState'

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    preloadedState,
    cardState,
})
