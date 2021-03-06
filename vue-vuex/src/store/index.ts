import { createStore } from "vuex";

export const store = createStore({
  state: {
    count: 100,
  },
  getters: {
    count: (state) => state.count,
  },
  mutations: {
    decrements: (state) => (state.count === 0 ? null : state.count--),
    increments: (state) => state.count++,
  },
  actions: {
    increments({ commit }) {
      commit("increments");
    },
    decrements({ commit }) {
      commit("decrements");
    },
  },
  modules: {},
});

export function useStore() {
  return store;
}
