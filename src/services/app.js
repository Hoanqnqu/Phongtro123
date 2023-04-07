import axiosConfig from '~/axiosConfig';
import AxiosDefault from 'axios';
export const apiGetPrices = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: 'api/v1/price/all',
            });
            resolve(response);
        } catch (error) {
            reject(reject);
        }
    });
export const apiGetAreas = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: 'api/v1/area/all',
            });
            resolve(response);
        } catch (error) {
            reject(reject);
        }
    });
export const apiGetProvinces = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: 'api/v1/province/all',
            });
            resolve(response);
        } catch (error) {
            reject(reject);
        }
    });
export const apiGetPublicProvinces = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await AxiosDefault({
                method: 'get',
                url: 'https://vapi.vnappmob.com/api/province/',
            });
            resolve(response);
        } catch (error) {
            reject(reject);
        }
    });
export const apiGetPublicDistricts = (province_id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await AxiosDefault({
                method: 'get',
                url: `https://vapi.vnappmob.com/api/province/district/${province_id}`,
            });
            resolve(response);
        } catch (error) {
            reject(reject);
        }
    });
