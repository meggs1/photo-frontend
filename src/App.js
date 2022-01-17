import React, { Component } from "react";

class App extends Component {

  state = {
    users: [],
    posts: []
  }

  componentDidMount() {
    this.fetchUsers()
    this.fetchPosts()
  }

  fetchUsers() {
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        users: json
      })
    })
  }

  fetchPosts() {
    fetch("http://localhost:3000/posts")
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
      this.setState({
        posts: json
      })
    })
  }
  
  render() {
    console.log(this.state)
    return(
      <h1>Hello world</h1>
    )
  }
}

export default App;
