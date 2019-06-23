import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {

  constructor() {
    super() 
    this.state = {
      users: [],
      loading: false,
    }
  }

  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
    this.setState({
      loading: true,
    })
    //promises
    // axios
    // .get('https://api.github.com/users')
    // .then(res => console.log(res.data))
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      users: res.data, 
      loading: false,
    })
  }
  
  foo = () => 'bar'
  // method that is part of the class so we add 'this'
  render() {
    const name = "John Doe"
    // const name = 'test'
    // const foo = () => 'bar'
    const loading = false;
    const showName = false;

    // if(loading) {
    //   return (
    //     <div>Loading...</div>
    //   )
    // }
  
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <p>
    //       hello {this.foo()}
    //       </p>
    //     </header>
    //   </div>
    // );

    return (
      <div className="App">
      { loading ? <h1>Loading...</h1> : <h1>hello {showName && name}</h1>}
       <Navbar title="GithubFinder"></Navbar>
       <div className='container'>
       <Users users = {this.state.users} loading = {this.state.loading}></Users>
       </div>
      </div>
    );
  } 
}

export default App;
