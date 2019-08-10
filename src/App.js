import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Users from './components/Users/Users';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header className="container">
            <nav className="header">
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/users">users</Link>
                </li>
                <li>
                  <Link to="/gallery">gallery</Link>
                </li>
              </ul>
            </nav>
          </header>  
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/users/" component={Users} />
            <Route path="/gallery/" component={Gallery} />
          </main>
        </div>
      </Router>  
    );
  }
}

export default App;
