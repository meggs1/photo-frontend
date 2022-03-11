import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import axios from 'axios';
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
    posts: [],
    isLoggedIn: false,
    user: {}
  }

  componentDidMount() {
    this.loginStatus()
    this.props.fetchPosts()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})    
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  // handleLogin = (data) => {
  //   this.setState({
  //     isLoggedIn: true,
  //     user: data.user
  //   })
  // }

  // handleLogout = () => {
  //   this.setState({
  //     isLoggedIn: false,
  //     user: {}
  //   })
  // }

  render() {
    // console.log('state', this.state)
    // console.log('props', this.props)
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
    posts: state.posts,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
