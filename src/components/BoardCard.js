/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Board from 'react-trello';

export const BoardCard = () => {

    const [data, setData] = useState({ lanes: [] })

    function handleChange(data) {
        setData(data);
        const dictionary = JSON.parse(localStorage.getItem('boardList')) || {};
        dictionary[id] = data;
        localStorage.setItem('boardList', JSON.stringify(dictionary));
    }

    let { id } = useParams();

    useEffect(() => {
        const dictionary = JSON.parse(localStorage.getItem('boardList')) || {};
        const dictionaryData = dictionary[id];
        if (dictionaryData) { setData(dictionaryData) };
    }, []);

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