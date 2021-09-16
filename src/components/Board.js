/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import '../styles/Boards.css';
import React from 'react';


function Board(props) {
    return (
        <div className={'board'}>
            <div className={'board__name'}>
                {props.name}
            </div>
        </div>
    );
}

export default Board;
