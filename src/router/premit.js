import router from "./index"
import {
    getToken,
    removeToken,
    removeUsername
} from "@/utils/token"


// 路由守卫
router.beforeEach((to, from, next) => {
    // 是否有token
    if (getToken()) {
        next();
    } else {
        if (to.path === '/login') {
            removeToken();
            removeUsername();
            next();
        } else {
            next('/login');
        }
    }
})