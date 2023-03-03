import { apiGetPosts } from '~/services/post';
import actiontypes from './actiontypes';

export const getPosts = (payload) => async (dispath) => {
    try {
        const response = await apiGetPosts(payload);
        console.log(response);
        if (response?.data.err === 0) {
            dispath({
                type: actiontypes.GET_POSTS,
                posts: response.data.response,
            });
        } else {
            dispath({
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispath({
            type: actiontypes.REGISTER_FAIL,
            posts: null,
        });
    }
};
