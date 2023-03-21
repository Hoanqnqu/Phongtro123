import actionTypes from '../actions/actiontypes';
const initState = {
    posts: [],
    msg: '',
    count: 0,
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

        default:
            return state;
    }
};

export default postReducer;
