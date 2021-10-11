import {
    configureStore
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { reducer } from '../reducers/root.reducer'
import { preloadedState } from './preloadedState'

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    preloadedState,
})