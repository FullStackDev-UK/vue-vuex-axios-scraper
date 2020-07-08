import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: "Change to a dropdown of subreddits",
    channel: "r/history",
    responseData: []
  },
  mutations: {
    receiveData(state, payload) {
      state.responseData = payload;
    }
  },
  actions: {
    fetchData({ commit }) {
      return new Promise(resolve => {
        let url = "https://www.reddit.com/" + this.state.channel + ".json";
        axios
          .get(url)
          .then(response => {
            commit("receiveData", response.data.data.children);
            resolve();
          })
          .catch(error => {
            console.log(error.statusText);
          });
      });
    }
  }
});
