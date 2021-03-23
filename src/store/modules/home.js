import axios from "axios";
const state = {
    datas: [],
};

const getters = {
    getData: (state) => state.datas,
};

const mutations = {
    SET_DATA(state, val) {
        state.datas = val;
    },
};

const actions = {
    async setInfo({ commit }) {
        const res = await axios
            .get("https://corona.lmao.ninja/v2/countries")
            .then((response) => {
                return response;
            });
        // console.log('res', res);
        commit("SET_DATA", res.data);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};