/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import '../styles/Boards.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Board from './Board'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid';



class Boards extends React.PureComponent {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.state = {
            boards: [],
            name: ''
        }
    }

    handleClick() {
        const { boards, name } = this.state
        const board = { name: name, id: uuidv4() }
        console.log(board);
        this.setState({ boards: [...boards, board] })
        localStorage.setItem('boards', JSON.stringify([...boards, board]));
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }

    componentDidMount() {
        const boards = JSON.parse(localStorage.getItem('boards'));
        if (boards) { this.setState({ boards: boards }) };
    }

    render() {
        const { boards } = this.state
        return (
            <BrowserRouter>
                <div className="container" >

                    <div>
                        <Card />
                    </div>

                    <div className="center">
                        <div className="boards">
                            {boards.map(board => (
                                <Board name={board.name} id={board.id} />
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
            </BrowserRouter>
        );
    }

}

export default Boards;
