// React;
import React from 'react';
import { Component } from 'react';
// Files;
import Counter from '../components/Counter.jsx';
import Button from '../components/Button.jsx';

export default class BoardContainer extends Component {
    state = {
        score: this.props.startValue
    };
    // increase score by 1
    increaseScore = () => {
        this.setState(() => ({
            score: this.state.score + 1
        }));
    };
    // decrease score by 1
    decreaseScore = () => {
        this.setState(() => ({
            score: this.state.score - 1
        }));
    };
    // resets score to 0
    resetScore = () => {
        this.setState(() => ({ score: 0 }))
    };
    render() {
        const buttonAssests =
            [{ title: 'ADD (+)', method: this.increaseScore },
            { title: 'SUBTRACT (-)', method: this.decreaseScore },
            { title: 'RESET', method: this.resetScore }]
        // creates 3 button components, each with their 
        // title and click handelers
        const buttons = buttonAssests.map((ele, ind) => {
            return <Button
                id={ind}
                key={'button' + ind}
                handeler={ele.method}
                buttonTitles={ele.title} />
        });
        return (
            <div>
                <Counter score={this.state.score} />
                <div className="button-container">
                    {buttons}
                </div>
            </div>
        );
    };
};
