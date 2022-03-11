const usersReducer = (state = { currentUser: {}, authChecked: false, loggedIn: false }, action) => {
    switch (action.type) {  
      case "AUTHENTICATED":
        return {
          currentUser: action.payload,
          authChecked: true,
          loggedIn: true,
        }
      case "NOT_AUTHENTICATED":
        return {
          currentUser: {},
          authChecked: false,
          loggedIn: false,
        }
      default:
        return state
    }
  }
  
export default usersReducer