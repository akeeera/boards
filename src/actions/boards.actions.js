import { createAsyncThunk } from '@reduxjs/toolkit'

// First, create the thunk
export const getBoards = createAsyncThunk(
    'boards/getBoards',
    async () => {
        const boards = JSON.parse(localStorage.getItem('boards'));
        return boards;
    }
);

export const setBoards = createAsyncThunk(
    'boards/setBoards',
    async (boards) => {
        localStorage.setItem('boards', JSON.stringify(boards));
        return boards;
    }
);

// dispatch(fetchUserById(123))