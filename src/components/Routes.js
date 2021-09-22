/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import '../styles/Boards.css';
import React from "react";
import Boards from './Boards'
import BoardCard from './BoardCard'
import Board from './Board'
import '../styles/Boards.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";



class Routes extends React.PureComponent {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/boards">
                        <Boards>
                            <Board />
                        </Boards >
                    </Route>
                    <Route path="board/:id" children={<BoardCard />} />
                    <Route path="*">
                        <Redirect to="/boards" />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Routes;
