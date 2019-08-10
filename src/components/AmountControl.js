import React from 'react';

class AmountControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

decreaseByOne() {
    // this.setState(({counter}) => ({counter: counter - 1}))
     this.setState(prevState => ({
        counter: prevState.counter - 1
     }))
 }

increaseByOne() {
    // this.setState(({counter}) => ({counter: counter + 1}))
     this.setState(prevState => ({
         counter: prevState.counter + 1
     }))
 }

render() {
    return (
        <div>
             <div className="number">{this.state.counter}</div>
             <button onClick={this.decreaseByOne.bind(this)}>-</button>
             <button onClick={this.increaseByOne.bind(this)}>+</button>
        </div>
        )
    }
}

export default AmountControl;