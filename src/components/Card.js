/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/Boards.css';
import React from 'react';


function Card(props) {
    return (
        <div>
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
        </div>
    );
}

export default Card;