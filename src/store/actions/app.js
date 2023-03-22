import actiontypes from './actiontypes';
import * as apis from '~/services';

export const getCategories = (payload) => async (dispath) => {
    try {
        const response = await apis.apiGetCategories(payload);

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
export const getPrices = (payload) => async (dispath) => {
    try {
        const response = await apis.apiGetPrices(payload);

        if (response?.data.err === 0) {
            dispath({
                type: actiontypes.GET_PRICES,
                prices: response.data.response.sort((a, b) => {
                    return +a.order - +b.order;
                }),
            });
        } else {
            dispath({
                type: actiontypes.GET_PRICES,
                msg: response.data.msg,
                prices: null,
            });
        }
    } catch (error) {
        dispath({
            type: actiontypes.GET_PRICES,
            prices: null,
        });
    }
};
export const getAreas = (payload) => async (dispath) => {
    try {
        const response = await apis.apiGetAreas(payload);

        if (response?.data.err === 0) {
            dispath({
                type: actiontypes.GET_AREAS,
                areas: response.data.response.sort((a, b) => {
                    return +a.order - +b.order;
                }),
            });
        } else {
            dispath({
                type: actiontypes.GET_AREAS,
                msg: response.data.msg,
                areas: null,
            });
        }
    } catch (error) {
        dispath({
            type: actiontypes.GET_AREAS,
            prices: null,
        });
    }
};
