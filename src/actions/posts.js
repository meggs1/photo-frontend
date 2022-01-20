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

export const addPost = (formData) => {
    return (dispatch) => {
        const configurableObj = {
            method: "POST",
            // don't have to use JSON.stringify
            body: formData
        }
      fetch(baseURL, configurableObj)
      .then(resp =>
        resp.json()
        .then(data => ({ data, resp })))
        .then(({ data, resp }) =>  {
        if (resp.ok) {
            dispatch({ type: "ADD_POST", payload: data })
        } else {
            console.log(resp.body)
        }
      })
      .catch(err => console.log(err))
    }
}
