
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import '../styles/Boards.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Board from './Board';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import { getBoards } from '../store/store';
import { setBoards } from '../store/store';
import { useDispatch } from 'react-redux';

export const Boards = () => {

    const { boards } = useSelector(state => state)
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    function handleClick() {
        const board = { name: name, id: uuidv4() }
        const boarder = boards.filter(board => board.id !== 1);
        console.log(board, boarder);
        dispatch(setBoards(boards.data))
    }

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleRemove(id) {
        const filterBoards = boards.filter(board => board.id !== id)
        dispatch(setBoards(filterBoards))
    }

    useEffect(() => {
        dispatch(getBoards())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container" >

            <div>
                <Card />
            </div>

            <div className="center">
                <div className="boards">
                    {boards.data.map(board => (
                        <Board name={board.name} id={board.id} onRemove={handleRemove} />
                    ))}
                </div>
            </div>

            <input type="checkbox" id="openclose"></input>
            <div className="modal-wrapper">
                <div className="modal">
                    <label for="openclose" className="close">&times;</label>
                    <div className="formsent">
                        <form>
                            <label className="name">
                                Board name:  &nbsp;
                                <input className="boardname" type="text" id="text1" name="name" onChange={handleNameChange} />
                                <input className="sendname" type="button" value="CREATE" onClick={handleClick} />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Boards;