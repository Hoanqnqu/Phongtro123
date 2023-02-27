import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
    function (config) {
        // Làm gì đó trước khi request dược gửi đi
        const token = localStorage.getItem('persist:auth');
        console.log(token);
        return config;
    },
    function (error) {
        // Làm gì đó với lỗi request
        console.log(error);
        return Promise.reject(error);
    },
);

export default instance;
