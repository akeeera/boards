/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import '../styles/Boards.css';
import React from 'react';
import BoardCard from './BoardCard'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Board(props) {
    const { name, id, onRemove } = props;

    const history = useHistory();

    function onCrossClick(event) {
        event.stopPropagation();
        props.onRemove(props.id)
    }

    const onBoardClick = () => {
        history.push(`/board/${id}`)
    }

    return (
        <div className={'board'} onClick={onBoardClick}>
            <div className={'cross'} onClick={onCrossClick}>   &#10006;   </div>
            <div className={'board__name'}>
                {props.name}
            </div>
        </div>
    );
}

export default Board;
