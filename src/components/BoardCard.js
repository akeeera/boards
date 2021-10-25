/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Board from 'react-trello';
import { updateDictionary, getBoardList } from '../actions/boardList.actions';
import { useDispatch, useSelector } from 'react-redux';

export const BoardCard = () => {

    const [data, setData] = useState({ lanes: [] })
    const { boardList } = useSelector(state => state)
    const dispatch = useDispatch();

    let { id } = useParams();

    function handleChange(data) {
        dispatch(updateDictionary({ data, id }))
    }

    useEffect(() => {
        dispatch(getBoardList())
    }, []);

    useEffect(() => {
        if (boardList.data) {
            const dictionaryData = boardList.data[id];
            if (dictionaryData) {
                setData(JSON.parse(JSON.stringify(dictionaryData)))
            };
        }
    }, [boardList.data]);

    return (
        <Board
            style={{ backgroundColor: 'inherit' }}
            canAddLanes
            data={data}
            editable
            onDataChange={handleChange}
        />
    )
}

export default BoardCard;