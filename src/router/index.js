import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/layout/index";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: "/control",
    hidden: true,
    meta: {
      name: "主页"
    }
  },
  {
    path: "/login",
    hidden: true,
    meta: {
      name: "登录"
    },
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/control",
    redirect: "/control-i",
    meta: {
      name: "控制台",
      icon: "el-icon-cpu"
    },
    component: layout,
    children: [{
      path: "/control-i",
      meta: {
        name: "首页"
      },
      component: () => import("@/components/Control/index")
    }]
  },
  {
    path: "/info",
    meta: {
      name: "信息管理",
      icon: "el-icon-s-order"
    },
    component: layout,
    children: [{
      path: "/info-list",
      meta: {
        name: "信息列表"
      },
      component: () => import("@/components/Message/MessageList")
    }, {
      path: "/info-classify",
      meta: {
        name: "信息分类"
      },
      component: () => import("@/components/Message/MessageClassify")
    }]
  }, {
    path: "/about",
    meta: {
      name: "关于我们",
      icon: "el-icon-info"
    },
    component: layout,
    children: [{
      path: "/about-main",
      meta: {
        name: "关于我们"
      },
      component: () => import("@/components/About/About")
    }]
  }
];

const asyncRouter = [{

}]

const router = new VueRouter({
  routes,
});

export default router;