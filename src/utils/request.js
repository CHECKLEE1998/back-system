/**
 * 拦截器
 */
import axios from "axios";
import {
    Message
} from 'element-ui'

// 生成环境和开发环境URL不同 需要适配
const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/api'

// 创建axios，赋给变量service
const service = axios.create({
    baseURL: BASEURL,
    timeout: 3000,
});

// 添加请求拦截器
service.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        // 在请求头添加数据
        // config.headers['token'] = "ttookkeenn";
        // config.headers['test'] = "test";
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
service.interceptors.response.use(
    function (respones) {
        // 对响应数据做点什么
        let data = respones.data;
        if (data.resCode !== 0) {
            // 错误触发
            Message.error(data.message);
            return Promise.reject(data);
        } else {
            // 成功
            Message.success(data.message);
            return respones;
        }
    },
    function (error) {
        // 对响应失败做点什么
        return Promise.reject(error);
    }
);
export default service;