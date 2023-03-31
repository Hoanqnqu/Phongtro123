import { apiGetCurrentUser } from '~/services/user';
import actiontypes from './actiontypes';

export const getCurrent = (payload) => async (dispath) => {
    try {
        const response = await apiGetCurrentUser(payload);
        //console.log(response);
        if (response?.data.err === 0) {
            dispath({
                type: actiontypes.GET_CURRENT,
                currentData: response.data.response,
            });
        } else {
            dispath({
                type: actiontypes.GET_CURRENT,
                msg: response.data.msg,
                currentData: null,
            });
        }
    } catch (error) {
        dispath({
            type: actiontypes.GET_CURRENT,
            currentData: null,
            msg: error,
        });
    }
};
