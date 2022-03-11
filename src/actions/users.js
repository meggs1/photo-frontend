import axios from 'axios'
const baseURL = 'http://localhost:3001/users'


export const signUp = (user) => {
    return (dispatch) => {
      fetch(baseURL, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: user.username,
            email: user.email,
            password: user.password
          }
        })
      })
      .then(resp =>
            resp.json()
            .then(data => 
                ({ data, resp })
            )
        )
        .then(({ data, resp }) =>  {
        if (resp.ok) {
          dispatch({ type: "AUTHENTICATED", payload: data })
        } else {
          dispatch({ type: "NOT_AUTHENTICATED" })
          return Promise.reject(resp)
        }
      }).catch(err => console.log(err))
    }
}

export const login = (user) => {
    return (dispatch) => {
    axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
    .then(response => {
        if (response.data.logged_in) {
          dispatch({ type: "AUTHENTICATED", payload: response.data })
        } else {
          dispatch({ type: "NOT_AUTHENTICATED" })
          return Promise.reject(response)
        }
      })
      .catch(error => console.log('api errors:', error))
    }
}
