import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
        currentUser: {},
        stateRequest: false
    },
    mutations: {
        SET_USERS(state, list) {
            state.users = list;
        },
        SET_CURRENT_USER(state, user) {
            state.currentUser = user;
        },
        SET_STATE_REQUEST(state, stateRequest) {
            state.stateRequest = stateRequest;
        },
    },
});