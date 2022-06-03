import { defineStore } from 'pinia';

const useStore = defineStore('storeId', {
  // eslint-disable-next-line
  state: () => {
    return {
      counter: 0,
      teste: 'oi',
    };
  },
  getters: {
    counter: (state) => state.counter,
    doubleCount: (state) => state.counter * 2,
    doublePlusOne() {
      return this.doubleCount + 1;
    },
  },
  actions: {
    randomizeCounter() {
      this.counter = Math.random(100 * Math.random());
    },
  },
});

export default useStore;
