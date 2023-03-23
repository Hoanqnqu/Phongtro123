import actionTypes from '../actions/actiontypes';
const initState = {
    posts: [],
    msg: '',
    count: 0,
    newPosts: [],
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_LIMIT_POSTS:
        case actionTypes.GET_POSTS:
            return {
                ...state,
                posts: action.posts || [],
                msg: action.msg || '',
                count: action.count || 0,
            };
        case actionTypes.GET_NEW_POSTS:
            return {
                ...state,
                newPosts: action.newPosts || [],
                msg: action.msg || '',
            };

        default:
            return state;
    }
};

export default postReducer;
