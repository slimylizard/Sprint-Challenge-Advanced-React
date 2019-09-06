import React from 'react';
import './App.css';
import UserCard from './components/Card.js';
import On from './components/DarkMode.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(data => this.setState({user: data}));
  }

  componentDidUpdate() {
    console.log(this.state);
    console.log(this.state.user);
  }
  render() {
    return (
      <div className='App'>
        <On />
        <UserCard user={this.state.user} />   
      </div>
    );
  }
}
export default App;
