import React, { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'


class Counter extends Component {
    //Define the initial state in a constructor
    constructor() {
        super(); //Error 1
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="count">{this.state.counter}</span>
                <div>
                    <button className="reset" onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }

    //increment = () => {
    increment(by) {
        //console.log(`Increment from child - ${by}`)
        this.setState(
            (previousState) => {
                return {counter: previousState.counter + by}
            }
        )
    }

    decrement(by) {        
        this.setState(
            (previousState) => {
                return {counter: previousState.counter - by}
            }
        )
    }

    reset() {
        this.setState({counter: 0})
    }
}


class CounterButton extends Component {

    //Define the initial state in a constructor
    constructor() {
        super();
    }

    //render = () => {
    render() {        
        return (            
            <div className="CounterButton">
                <button onClick={() => this.props.incrementMethod(this.props.by)} >+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)} >-{this.props.by}</button>                
            </div>
        )
    }

}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter