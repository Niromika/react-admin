import React from 'react';
import './Gallery.scss';

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(albums => this.setState({albums}));
    }



    render() {
        return (
            <div className="Gallery">
                <h2>Gallery</h2>
                <table>
                    <thead>
                        <tr>
                            <th>user id</th>
                            <th>album id</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.albums.map((album, key) => {
                            return (
                                <tr key={key}>
                                    <td>{album.userId}</td>
                                    <td>{album.id}</td>
                                    <td>{album.title}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
            )
        }
}

export default Gallery;