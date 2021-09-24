/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import '../styles/Boards.css';
import React from 'react';
import Board from './Board'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid';



export default class Boards extends React.PureComponent {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.state = {
            boards: [],
            name: ''
        }
    }

    handleClick() {
        const { boards, name } = this.state
        const board = { name: name, id: uuidv4() }
        const boarder = this.state.boards.filter(board => board.id !== 1);
        console.log(board, boarder);
        this.setState({ boards: [...boards, board] })
        localStorage.setItem('boards', JSON.stringify([...boards, board]));
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }

    handleRemove(id) {
        const { boards } = this.state;
        const filterBoards = boards.filter(board => board.id !== id)
        this.setState({ boards: filterBoards })
        localStorage.setItem('boards', JSON.stringify(filterBoards));
    }

    componentDidMount() {
        const boards = JSON.parse(localStorage.getItem('boards'));
        if (boards) { this.setState({ boards: boards }) };
    }

    render() {
        const { boards } = this.state
        return (
            <div className="container" >

                <div>
                    <Card />
                </div>

                <div className="center">
                    <div className="boards">
                        {boards.map(board => (
                            <Board name={board.name} id={board.id} onRemove={this.handleRemove} />
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
                                    <input className="boardname" type="text" id="text1" name="name" onChange={this.handleNameChange} />
                                    <input className="sendname" type="button" value="CREATE" onClick={this.handleClick} />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
