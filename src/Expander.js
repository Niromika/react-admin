import React from 'react';

class Expander extends React.Component {
    constructor(props) {
        super(props); 
            this.state = {
                status: false
            }
        }
    changeStatus(){
        this.setState({
            status: !this.state.status
        });
    }

    render(){
        return (
        <div className="Expander">
            <div onClick={this.changeStatus.bind(this)}>{this.props.title}</div>
            {this.state.status ? <div>{this.props.children}</div> : null}
        </div>
        );
    }
}


export default Expander;