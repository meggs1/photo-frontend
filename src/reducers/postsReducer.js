const postsReducer = (state = {posts: []}, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return {
                ...state,
                posts: action.payload
            }
        case "ADD_POST":
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ]
            }
        default:
            return state
    }
}

export default postsReducer