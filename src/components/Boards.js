/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import 'C:/Users/herey/Trello/trello/src/styles/Boards.css';
import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import Board from './Board'


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
        const board = { name: name }
        this.setState({ boards: [...boards, board] })
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }

    render() {
        const { boards } = this.state
        return (
            <BrowserRouter>
                <div className="boards" >
                    <header className="boards-header">
                        <div className="center">
                            <div className="property-card">
                                <a href="#okno">
                                    <div className="property-image">
                                        <label for="openclose" id="button">
                                            <div className="property-image-title">
                                                <h5>CREATE</h5>
                                            </div>
                                        </label>
                                    </div></a>
                                <div className="property-description">
                                    <h5> CREATE NEW BOARD</h5>
                                    <p></p>
                                </div>
                                <a href="#">
                                </a>
                            </div>
                            <Link to="/">
                                <div id="container">
                                    {boards.map(board => (
                                        <Board name={board.name} />
                                    ))}
                                </div>
                            </Link>
                        </div>

                    </header>

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
