import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';

class App extends Component {

  constructor() {
    super() 
    this.state = {
      users: [],
      loading: false,
      alert: null,
    }
  }

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({
  //     loading: true,
  //   })
  //   //promises
  //   // axios
  //   // .get('https://api.github.com/users')
  //   // .then(res => console.log(res.data))
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({
  //     users: res.data, 
  //     loading: false,
  //   })
  // }
  
  foo = () => 'bar'
  // method that is part of the class so we add 'this'

  searchUsers = async (text) => {
    this.setState({
      loading:true,
    })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      users: res.data.items, 
      loading: false,
    })
  }

  clear = () => {
    this.setState({
      users: [],
      loading:false,
    })
  }

  setAlert = (msg, type ) => {
    this.setState({
      alert: {
        msg: msg,
        type: type,
      }
    })

    setTimeout(() => {
      this.setState({alert:null})
    }, 5000)
  }


  render() {
    console.log(this.state.users)
    const name = "John Doe"
    // const name = 'test'
    // const foo = () => 'bar'
    const loadingN = false;
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

    const { users, loading } = this.state

    return (
      <div className="App">
      { loadingN ? <h1>Loading...</h1> : <h1>hello {showName && name}</h1>}
       <Navbar title="GithubFinder"></Navbar>
       <div className='container'>
        <Alert alert={this.state.alert}/> 
        <Search 
        searchUsers = {this.searchUsers} 
        clear={this.clear} 
        showClear={ users.length !== 0 ? true : false}
        setAlert={this.setAlert}
        />
        <Users users = {users} loading = {loading}></Users>
       </div>
      </div>
    );
  } 
}

export default App;
