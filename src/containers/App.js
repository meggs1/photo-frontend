import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import '../App.css';

import { fetchPosts } from '../actions/posts.js'
import Form from '../components/posts/Form'
import Post from '../components/posts/Post'
import Login from '../components/users/Login'
import SignUp from '../components/users/SignUp'
import Profile from '../components/users/Profile'


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
        <div>
          <BrowserRouter>
            <Link to="form">Add new Photo</Link>
            <Link to="lastpost">View Last Upload</Link>
            <Link to="login">Login</Link>
            <Link to="signup">Sign Up</Link>
            <Link to="profile">Profile</Link>

            <Routes>
              <Route path="form" element={<Form />} />
              <Route path="lastpost" element={<Post post={lastPost}/>} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </div>


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
