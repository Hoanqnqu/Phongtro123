import axiosConfig from '~/axiosConfig';

export const apiGetCurrentUser = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: 'api/v1/user/get-current',
            });
            resolve(response);
        } catch (error) {
            reject(reject);
        }
    });

export const apiUpdateUser = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: 'api/v1/user',
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(reject);
        }
    });
