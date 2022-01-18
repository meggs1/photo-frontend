import React, { Component } from "react";

class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    this.fetchUsers()
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

  render() {
    console.log(this.state)
    return(
      <h1>Hello world</h1>
    )
  }
}

export default App;
