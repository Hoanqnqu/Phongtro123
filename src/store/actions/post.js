import { apiGetPosts, apiGetLimitPosts, apiGetNewPosts, apiGetLimitAdminPosts } from '~/services/post';
import actiontypes from './actiontypes';

export const getPosts = (payload) => async (dispath) => {
    try {
        const response = await apiGetPosts(payload);
        //console.log(response);
        if (response?.data.err === 0) {
            dispath({
                type: actiontypes.GET_POSTS,
                posts: response.data.response,
            });
        } else {
            dispath({
                type: actiontypes.GET_POSTS,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispath({
            type: actiontypes.GET_POSTS,
            posts: null,
        });
    }
};

export const getLimitPosts = (query) => async (dispath) => {
    try {
        const response = await apiGetLimitPosts(query);

        if (response?.data.err === 0) {
            dispath({
                type: actiontypes.GET_LIMIT_POSTS,
                posts: response.data.response?.rows,
                count: response.data.response?.count,
            });
        } else {
            dispath({
                type: actiontypes.GET_LIMIT_POSTS,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispath({
            type: actiontypes.GET_LIMIT_POSTS,
            posts: null,
        });
    }
};

export const getNewPosts = (query) => async (dispath) => {
    try {
        const response = await apiGetNewPosts(query);

        if (response?.data.err === 0) {
            dispath({
                type: actiontypes.GET_NEW_POSTS,
                newPosts: response.data.response,
            });
        } else {
            dispath({
                type: actiontypes.GET_NEW_POSTS,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispath({
            type: actiontypes.GET_NEW_POSTS,
            newPosts: null,
        });
    }
};
export const getLimitPostsAdmin = (query) => async (dispath) => {
    try {
        const response = await apiGetLimitAdminPosts(query);

        if (response?.data.err === 0) {
            dispath({
                type: actiontypes.GET_POSTS_ADMIN,
                posts: response.data.response?.rows,
                count: response.data.response?.count,
            });
        } else {
            dispath({
                type: actiontypes.GET_POSTS_ADMIN,
                msg: response.data.msg,
                post:null
            });
        }
    } catch (error) {
        dispath({
            type: actiontypes.GET_POSTS_ADMIN,
            posts: null,
        });
    }
};
