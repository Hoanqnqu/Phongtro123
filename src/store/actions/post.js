import { apiGetPosts, apiGetLimitPosts } from '~/services/post';
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

export const getLimitPosts = (page) => async (dispath) => {
    try {
        const response = await apiGetLimitPosts(page);
        //console.log(response);
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
