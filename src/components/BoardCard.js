/* eslint-disable no-unused-vars */
import React from "react";
// import { useParams } from "react-router-dom";
// let { id } = useParams();
import Board from 'react-trello';

class BoardCard extends React.Component {

    render() {
        return (
            <Board
                canAddLanes
                data={{
                    lanes: [
                        {
                            cards: [
                                {
                                    description: '2 Gallons of milk at the Deli store',
                                    id: 'Card1',
                                    label: '2017-12-01',
                                    laneId: 'SORTED_LANE',
                                    metadata: {
                                        completedAt: '2017-12-01T10:00:00Z',
                                        shortCode: 'abc'
                                    },
                                    title: 'Buy milk'
                                },
                                {
                                    description: 'Sort out recyclable and waste as needed',
                                    id: 'Card2',
                                    label: '2017-11-01',
                                    laneId: 'SORTED_LANE',
                                    metadata: {
                                        completedAt: '2017-11-01T10:00:00Z',
                                        shortCode: 'aaa'
                                    },
                                    title: 'Dispose Garbage'
                                },
                                {
                                    description: 'Can AI make memes?',
                                    id: 'Card3',
                                    label: '2017-10-01',
                                    laneId: 'SORTED_LANE',
                                    metadata: {
                                        completedAt: '2017-10-01T10:00:00Z',
                                        shortCode: 'fa1'
                                    },
                                    title: 'Write Blog'
                                },
                                {
                                    description: 'Transfer to bank account',
                                    id: 'Card4',
                                    label: '2017-09-01',
                                    laneId: 'SORTED_LANE',
                                    metadata: {
                                        completedAt: '2017-09-01T10:00:00Z',
                                        shortCode: 'ga2'
                                    },
                                    title: 'Pay Rent'
                                }
                            ],
                            currentPage: 1,
                            id: 'SORTED_LANE',
                            label: '20/70',
                            title: 'Sorted Lane'
                        }
                    ]
                }}
                editable
                onLaneAdd={function noRefCheck() { }} />
        )
    }
}

export default BoardCard;