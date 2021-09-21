/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import '../styles/Boards.css';
import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";


function Board(props) {
    const { name, id, onRemove } = props;

    function onCrossClick() {
        props.onRemove(props.id)
    }

    return (
        <BrowserRouter>
            <Link to="/">
                <div className={'board'}>
                    <div className={'cross'} onClick={onCrossClick}>   &#10006;   </div>
                    <div className={'board__name'}>
                        {props.name}
                    </div>
                </div>
            </Link>
        </BrowserRouter>
    );
}

export default Board;
