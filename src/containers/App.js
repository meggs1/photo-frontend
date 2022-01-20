import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from '../actions/posts.js'
import Form from '../components/posts/Form'
import Post from '../components/posts/Post'

class App extends Component {

  state = {
    users: [],
    posts: []
  }

  componentDidMount() {
    this.props.fetchPosts()
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
    .catch(err => console.log(err))
  }

  render() {
    console.log('state', this.state)
    console.log('props', this.props)
    const lastPost = this.props.posts.slice(-1)[0]
    console.log(lastPost)
    return(
      <div>
        <h1>Hello world</h1>
        <Form />
        <Post post={lastPost}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
