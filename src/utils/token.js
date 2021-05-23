import cookie from "cookie_js"

export function getToken() {
    return cookie.get('admin_token');
}

export function setToken(token) {
    return cookie.set('admin_token', token);
}

export function removeToken() {
    return cookie.remove('admin_token');
}

export function getUsername() {
    return cookie.get('admin_username');
}

export function setUsername(value) {
    return cookie.set('admin_username', value);
}

export function removeUsername() {
    return cookie.remove('admin_username');
}

export function localGet(data) {
    return window.localStorage.getItem(data);
}

export function localSet(data, value) {
    return window.localStorage.setItem(data, value)
}

export function localRemove(data) {
    return window.localStorage.removeItem(data);
}

export function loaclClear() {
    return window.localStorage.clear();
}