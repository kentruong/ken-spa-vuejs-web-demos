import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import covid from "./modules/covid";
import home from "./modules/home";
// import { dashboard } from "./dashboard";

Vue.use(Vuex);
// Vue.config.devtools = true;

export default new Vuex.Store({
    modules: {
        auth,
        covid,
        home,
    },
});