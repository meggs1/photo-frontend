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
        const image = document.getElementById('image')
        
        if (image.files[0]) {
            console.log(image.files[0])
            const formData = new FormData()
            const upload_file = image.files[0]
            formData.append('post[image_file]', upload_file)
            formData.append('post[caption]', this.state.caption)
            formData.append('post[user_id]', post.userId)
            this.props.addPost(formData)
        }
        // add else
    }
    
    render() {
        console.log('form props', this.props)
        return(
            <form onSubmit={this.handleOnSubmit}>
                <input 
                    type="file"
                    id="image" 
                    name="image"
                    accept="image/png, image/jpeg"
                />

                <p>Caption:</p>
                <textarea
                    type="text"
                    name="caption"
                    value={this.state.caption}
                    onChange={(e) => this.handleOnChange(e)} 
                />
                <br />
                <p>user id: {this.state.userId} </p>
            <input type='submit' />
          </form>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return { 
        addPost: (formData) => dispatch(addPost(formData))
    }
}

export default connect(null, mapDispatchToProps)(Form)