/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Board from 'react-trello';
import { updateDictionary, getBoardList } from '../actions/cards.actions';
import { useDispatch, useSelector } from 'react-redux';

export const BoardCard = () => {

    const [data, setData] = useState({ lanes: [] })
    const { boardList } = useSelector(state => state)
    const dispatch = useDispatch();

    function handleChange(data) {
        setData(data);
        dispatch(updateDictionary(data));
    }

    let { id } = useParams();

    useEffect(() => {
        dispatch(getBoardList())
    }, []);

    useEffect(() => {
        const dictionaryData = boardList.data[id];
        if (dictionaryData) { setData(dictionaryData) };
    }, [boardList.data]);

    return (
        <Board
            canAddLanes
            data={data}
            editable
            onDataChange={handleChange}
        />
    )
}

export default BoardCard;