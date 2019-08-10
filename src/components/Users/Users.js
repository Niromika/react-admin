import React, { Component } from 'react';
import './Users.scss';


export class Users extends Component {
    constructor(props){
        super(props);
        this.state={
            users: []
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=>{
                this.setState({users});
            });
    }

    render() {
        return (
            <div className="Users">
                <h2>Users</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((user, key) => {
                        return (
                            <tr key={key}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                            </tr>)
                    })}
                    </tbody>
                </table>
             </div>
        );
    }
}

export default Users