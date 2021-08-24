export const alert = {
    namespaced: true,
    state: {
        type: null,
		visible: false,
        message: null
    },
    actions: {
        success({ commit }, message) {
            commit('success', message);
        },
        error({ commit }, message) {
            commit('error', message);
        },
        clear({ commit }) {
            commit('clear');
        }
    },
    mutations: {
        success(state, message) {
            state.type = 'alert-success';
            state.message = message;
			state.visible = true;
        },
        error(state, message) {
            state.type = 'alert-danger';
            state.message = message;
			state.visible = true;
        },
        clear(state) {
            state.type = null;
            state.message = null;
			state.visible = false;
        }
    }
}
