import React, { Component } from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { login } from "../../actions/users";

class Login extends Component {
    constructor(props) {
        super(props)
    }

    state = { 
        username: '',
        email: '',
        password: '',
        errors: ''
    }
    
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
        [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {username, email, password} = this.state 
        // debugger
        let user = {
          username: username,
          email: email,
          password: password
        }

        this.props.login(user)
    }

    redirect = () => {
        this.props.history.push('/')
    }

    handleErrors = () => {
        return (
          <div>
            <ul>
                {this.state.errors.map(error => {
                    return <li key={error}> {error} </li> 
                })}
            </ul>
          </div>
        )
    };

    render() {
        console.log('login props', this.props)
        console.log('login state', this.state)
        const {username, email, password} = this.state
        return (
            <div>
                <h1>Log In</h1>        
                <form onSubmit={this.handleSubmit}>
                    {/* <input
                        placeholder="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    /> */}
                    <input
                        placeholder="email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />         
                    <button placeholder="submit" type="submit">
                        Log In
                    </button>          
                    <div>
                        or <Link to='/signup'>sign up</Link>
                    </div>
          
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)