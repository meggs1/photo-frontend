import { Component } from "react";
import { connect } from "react-redux"
import { addPost } from "../../actions/posts";

class Form extends Component {
    state = {
        caption: '',
        userId: 1
    }
    
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    
    handleOnSubmit = (e) => {
        e.preventDefault()
        const post = this.state
        this.props.addPost(post)
    }
    
    render() {
        console.log('form props', this.props)
        return(
            <form onSubmit={this.handleOnSubmit}>
            <p>Caption:</p>
            <textarea
              type="text"
              name="caption"
              value={this.state.caption}
              onChange={(e) => this.handleOnChange(e)} 
            />
          <br />
          <input type='submit' />
          </form>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return { 
        addPost: (post) => dispatch(addPost(post))
    }
}

export default connect(null, mapDispatchToProps)(Form)