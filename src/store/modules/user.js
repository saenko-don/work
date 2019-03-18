import Vue from "vue";

const localVue = new Vue();

const state = {
  token: '',
};

const getters = {
  ITEM: localState => localState.item,
};

const actions = {
  REGISTER_NOW:(context, params) => {
    localVue.$Axios.post('https://reqres.in/api/register', params).then((r) => {
      context.commat('SET_TOKEN', r.data.token);
    });
  },

  LOGIN_NOW:(context, params) => {
    localVue.$Axios.post('https://reqres.in/api/login', params).then((r) => {
      console.log(r);
    });
  }
};

const mutations = {
  SET_TOKEN: (localState, data) => {
    localState.token = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
