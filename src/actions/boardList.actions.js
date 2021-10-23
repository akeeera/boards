import { createAsyncThunk } from '@reduxjs/toolkit'

export const updateDictionary = createAsyncThunk(
    'boardList/updateDictionary',
    async ({ data, id }) => {
        const dictionary = JSON.parse(localStorage.getItem('boardList')) || {};
        dictionary[id] = data;
        localStorage.setItem('boardList', JSON.stringify(dictionary));
        return dictionary
    }
);

export const getBoardList = createAsyncThunk(
    'boardList/getBoardList',
    async () => {
        const dictionary = JSON.parse(localStorage.getItem('boardList')) || {};
        return dictionary
    }
);