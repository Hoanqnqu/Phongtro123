import { apiRegister } from '~/services/auth';
import actiontypes from './actiontypes';

export const register = (payload) => async (dispath) => {
    try {
        const response = await apiRegister(payload);
        console.log(response);
        if (response?.data.err === 0) {
            dispath({
                type: actiontypes.REGISTER_SUCCESS,
                data: response.data.token,
            });
        } else {
            dispath({
                type: actiontypes.REGISTER_FAIL,
                data: response.data.msg,
            });
        }
    } catch (error) {
        dispath({
            type: actiontypes.REGISTER_FAIL,
            data: null,
        });
    }
};
