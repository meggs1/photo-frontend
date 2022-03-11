import { Component } from "react";
import { connect } from "react-redux"

class Post extends Component {
    
    render() {
        console.log(this.props)
        const lastPost = this.props.post
        if (lastPost) {
            return(
                <div>
                    Post
                    <img src={`http://localhost:3000${lastPost.image_url}`} />
                    <p>{lastPost.user}</p>
                    <p>{lastPost.caption}</p>
                </div>
            )
        } else {
            // need to add loading to reducer
            return (
                <div>
                    No Post
                </div>
            )
        }
    }
}


export default connect()(Post)