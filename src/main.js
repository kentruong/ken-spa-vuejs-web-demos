import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import EventBus from "./EventBus";
import axios from "axios";
// import VueAxios from "vue-axios";
Vue.config.productionTip = false;
import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
Vue.use(PerfectScrollbar);

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    vuetify,
    EventBus,
    // VueAxios,
    axios,
    PerfectScrollbar,
    render: (h) => h(App),
}).$mount("#app");