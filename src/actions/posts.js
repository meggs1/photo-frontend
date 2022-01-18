export function fetchPosts() {
    return (dispatch) => {
        fetch("http://localhost:3000/posts")
        .then(resp => resp.json())
        .then(json => {
            dispatch({type: 'GET_POSTS', payload: json})
        })
        .catch(err => console.log(err))
    }
}

