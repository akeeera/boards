/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './Boards.css';
import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";


class Boards extends React.PureComponent {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        var container = document.getElementById("container");
        var text1 = document.getElementById("text1");

        var div1 = document.createElement("div");
        div1.className = "div1";
        div1.innerHTML = text1.value;


        var div = document.createElement("div");
        div.className = "divA";
        div.appendChild(div1);

        container.appendChild(div);
    }

    render() {
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
                            <Link to="/"><div id="container"></div></Link>
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
                                        <input className="boardname" type="text" id="text1" name="name" placeholder="Enter name here" />
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
