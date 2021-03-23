const state = {
    user: {
        username: "",
        password: "",
    },
    active: false,
};

const getters = {
    user: (state) => state.user,
    active: (state) => state.active,
};

const mutations = {
    SET_INFO_USER(state, val) {
        state.user = val;
    },
};

const actions = {
    login({ commit }, data) {
        localStorage.setItem("username", data.username);
        console.log("data", data);
        commit("SET_INFO_USER", data);
    },
    logout({ commit }) {
        commit("SET_INFO_USER", {});
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};