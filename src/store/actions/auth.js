import { apiRegister, apiLogin } from '~/services/auth';
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
export const login = (payload) => async (dispath) => {
    try {
        const response = await apiLogin(payload);
        console.log(response);
        if (response?.data.err === 0) {
            dispath({
                type: actiontypes.LOGIN_SUCCESS,
                data: response.data.token,
            });
        } else {
            dispath({
                type: actiontypes.LOGIN_FAIL,
                data: response.data.msg,
            });
        }
    } catch (error) {
        dispath({
            type: actiontypes.LOGIN_FAIL,
            data: null,
        });
    }
};

export const logout = () => ({
    type: actiontypes.LOGOUT,
});
