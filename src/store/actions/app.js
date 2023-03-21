import { apiGetCategories } from '~/services/category';
import actiontypes from './actiontypes';

export const getCategories = (payload) => async (dispath) => {
    try {
        const response = await apiGetCategories(payload);

        if (response?.data.err === 0) {
            dispath({
                type: actiontypes.GET_CATEGORY,
                categories: response.data.response,
            });
        } else {
            dispath({
                type: actiontypes.GET_CATEGORY,
                msg: response.data.msg,
                categories: null,
            });
        }
    } catch (error) {
        dispath({
            type: actiontypes.GET_CATEGORY,
            categories: null,
        });
    }
};
