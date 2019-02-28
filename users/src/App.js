import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import UserCard from './components/UserCard';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/users')
      .then(res => {
        this.setState({users: res.data})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <div className="users">
          {this.state.users.map(user => (
            <UserCard 
              name={user.name}
              bio={user.bio}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
