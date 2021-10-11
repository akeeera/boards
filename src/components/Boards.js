
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import '../styles/Boards.css';
import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import Board from './Board';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import { actionTest } from '../store/store';
import { useDispatch } from 'react-redux';

export const Boards = () => {

    // const { boards } = useSelector(state => state)
    const [name, setName] = useState('')
    const [boards, setBoards] = useState([])
    const dispatch = useDispatch();

    function handleClick() {
        const board = { name: name, id: uuidv4() }
        const boarder = boards.filter(board => board.id !== 1);
        console.log(board, boarder);
        setBoards([...boards, board])
        localStorage.setItem('boards', JSON.stringify([...boards, board]));
    }

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleRemove(id) {
        const filterBoards = boards.filter(board => board.id !== id)
        setBoards(filterBoards)
        localStorage.setItem('boards', JSON.stringify(filterBoards));
    }

    useEffect(() => {
        const boards = JSON.parse(localStorage.getItem('boards'));
        if (boards) { setBoards(boards) };
        dispatch(actionTest())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container" >

            <div>
                <Card />
            </div>

            <div className="center">
                <div className="boards">
                    {boards.map(board => (
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