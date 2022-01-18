const baseURL = 'http://localhost:3000/posts'

export function fetchPosts() {
    return (dispatch) => {
        fetch(baseURL)
        .then(resp => resp.json())
        .then(json => {
            dispatch({type: 'GET_POSTS', payload: json})
        })
        .catch(err => console.log(err))
    }
}

export const addPost = (post) => {
    return (dispatch) => {
      fetch(baseURL, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          post: {
            caption: post.caption,
            user_id: post.userId
          }
        })
      })
      .then(resp =>
        resp.json()
        .then(data => ({ data, resp })))
        .then(({ data, resp }) =>  {
        if (resp.ok) {
          dispatch({ type: "ADD_POST", payload: data })
        } else {
        //   dispatch({ type: "NOT_AUTHENTICATED" })
        //   return Promise.reject(resp)
        console.log(resp)
        }
      })
      .catch(err => console.log(err))
    }
  }
