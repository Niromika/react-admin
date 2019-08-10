import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        );
    }

}
export default Counter;