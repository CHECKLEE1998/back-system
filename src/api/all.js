import request from "../utils/request"

/**
 * 登入
 */
export function SendEmail(data) {
    return request.request({
        method: "post",
        url: "/getSms/",
        data,
    })
}

/**
 * 注册
 */
export function Register(data) {
    return request.request({
        method: "post",
        url: "/register/",
        data,
    })
}

/**
 * 登录
 */
export function Login(data) {
    return request.request({
        method: "post",
        url: "/login/",
        data,
    })
}