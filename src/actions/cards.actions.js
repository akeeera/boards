import { createAsyncThunk } from '@reduxjs/toolkit'

export const updateDictionary = createAsyncThunk(
    'cards/updateDictionary',
    async (data, id) => {
        const dictionary = JSON.parse(localStorage.getItem('boardList')) || {};
        dictionary[id] = data;
        localStorage.setItem('boardList', JSON.stringify(dictionary));
    }
);

export const getBoardList = createAsyncThunk(
    'cards/getBoardList',
    async () => {
        const dictionary = JSON.parse(localStorage.getItem('boardList')) || {};
        return dictionary
    }
);