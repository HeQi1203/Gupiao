import axios from 'axios';
const request = axios.create({
    // baseURL: 'https://api.example.com',
});
// 添加请求拦截器
request.interceptors.request.use(
    (config: any) => {
        // console.log(config.headers.Authorization);
        if (config.headers.Authorization) {
        } else {
            config.headers.Authorization = localStorage.getItem('token');
        }
        // 在发送请求之前做些什么
        return config;
    },
    (error: any) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
request.interceptors.response.use(
    (response: any) => {
        // 对响应数据做点什么
        return response;
    },
    (error: any) => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

let get = request.get;
let post = request.post;
let put = request.put;
let Delete = request.delete;
export { get, post, put, Delete };
