// React;
import React from 'react';
import { Component } from 'react';
// Files;
import Counter from '../components/Counter.jsx';
import Button from '../components/Button.jsx';

export default class BoardContainer extends Component {
    state = {
        score: 0
    };
    increaseScore = () => {
        this.setState(() => ({ score: this.state.score + 1 }));
    };
    decreaseScore = () => {
        this.setState(() => ({ score: this.state.score - 1 }));
    };
    resetScore = () => {
        this.setState(() => ({ score: 0 }))
    }
    render() {
        const buttonHandelers = [this.increaseScore, this.decreaseScore, this.resetScore]
        const buttonTitles = ['add', 'subtract', 'reset']
        const buttons = buttonHandelers.map((ele, ind) => {
            return <Button id={ind} handeler={ele}
                buttonTitles={buttonTitles} />
        })
        return (
            <div>
                <Counter score={this.state.score} />
                {buttons}
            </div>
        )
    }
}
