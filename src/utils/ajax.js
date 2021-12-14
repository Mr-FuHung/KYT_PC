/* 
*axios二次封装
*/

import axios from 'axios';
import config from '@/config';
import { Message } from 'element-ui';
import storage from '@/utils/storage';
import store from '@/store';

const NETWORK_ERROR = '网络请求异常';
const instance = axios.create({
    // baseURL: config.mock ? config.mockApi : config.baseApi,
    timeout: 8000,
    headers: {
        "Content-Type": "application/json"
    }
})

// 添加请求拦截器
instance.interceptors.request.use(request => {
    // 在发送请求之前做些什么
    const headers = request.headers;
    const { token } = storage.getItem('userInfo') || {};
    headers.Authorization || (headers.Authorization = `Bearer ${token}`)
    return request;
}, error => {
    // 对请求错误做些什么
    Message.error(error || NETWORK_ERROR);
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
    const { code, data, msg } = response.data;
    // 对响应数据做点什么
    if (code === 200) {
        return { data, msg };
    } else if (code === 40001) {
        Message.error(msg);
        store.commit('saveUserInfo', {})
        return Promise.reject(msg);
    } else {
        Message.error(msg || NETWORK_ERROR);
        return Promise.reject(msg || NETWORK_ERROR);
    }
}, error => {
    // 对响应错误做点什么
    Message.error(error);
    return Promise.reject(error);
});
/* 
*@param {*} options 请求配置
* */
function ajax(options) {
    options.method = options.method || 'get';//默认get
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data;//get请求传参改为统一的data
    }
    if (typeof options.mock !== 'undefined') {
        config.mock = options.mock;
    }
    if (config.env === 'prod') {
        instance.defaults.baseURL = config.baseApi;//为生产环境时，强制切换为baseApi，以防万一
    } else {
        instance.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;//判断是否开启mockApi
    }
    return instance(options);
}
['get', 'post', 'put', 'delete', 'patch'].forEach(item => {
    ajax[item] = (url, data, options) => {//兼容多种请求方式，将多种请求写法转为同一种
        return ajax({
            method: item,
            url, data, ...options
        })
    }
})
export default ajax;