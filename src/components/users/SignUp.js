import React, { Component } from 'react';
import { connect } from "react-redux";
import { signUp } from "../../actions/users"

class SignUp extends Component {

    
    state = { 
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        errors: ''
    };

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
        [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {username, email, password, password_confirmation} = this.state
        let user = {
            username: username,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }
        this.props.signUp(user)
    }

    redirect = () => {
        this.props.history.push('/')
    }

    handleErrors = () => {
        return (
        <div>
            <ul>
                {this.state.errors.map((error) => {
                    return (<li key={error}> {error}</li>) 
                })}
            </ul> 
        </div>
        )
    };


    render() {
        console.log('signup props', this.props)
        console.log('signup state', this.state)
        const {username, email, password, password_confirmation} = this.state
        return (
            <div>
                <h1>Sign Up</h1>        
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
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
                    <input
                        placeholder="password confirmation"
                        type="password"
                        name="password_confirmation"
                        value={password_confirmation}
                        onChange={this.handleChange}
                    />
                
                    <button placeholder="submit" type="submit">
                        Sign Up
                    </button>
            
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
      signUp: (user) => dispatch(signUp(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)