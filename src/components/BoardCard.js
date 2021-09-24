/* eslint-disable no-unused-vars */
import React from "react";
import { withRouter } from "react-router-dom";
import Board from 'react-trello';

class BoardCard extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            data: {
                lanes: []
            }
        }
    }

    handleChange(data) {
        const id = this.props.match.params.id;
        this.setState({ data: data })
        const dictionary = JSON.parse(localStorage.getItem('boardList')) || {};
        dictionary[id] = data;
        localStorage.setItem('boardList', JSON.stringify(dictionary));
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const dictionary = JSON.parse(localStorage.getItem('boardList')) || {};
        const data = dictionary[id];
        if (data) { this.setState({ data }) };
    }


    render() {
        return (
            <Board
                canAddLanes
                data={this.state.data}
                editable
                onDataChange={this.handleChange}
            />
        )
    }
}

export default withRouter(BoardCard)