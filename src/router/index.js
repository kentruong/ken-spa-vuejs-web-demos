import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: () =>
            import ("../views/Home/index.vue"),
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/deatail-service/:id&:title",
        name: "DetailService",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/DetailService/index.vue"
            ),
    },
    {
        path: "/covid-19",
        name: "Covid",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Covid/index.vue"
            ),
    },
    {
        path: "/profile",
        name: "Profile",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Auth/Profile/index.vue"
            ),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;