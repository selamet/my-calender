import Vue from "vue";
import Vuex from "vuex"
import * as mutations from "./mutations";
import * as getters from "./getters";
import * as actions from "./actions";


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    calenderData: {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      date: {
        day: '',
        month: '',
        year: ''
      },
      today: {
        day: '',
        month: '',
        year: ''
      },
      selectedDate: {
        day: '',
        month: '',
        year: '',
        format: ''
      },
      addDiv: {
        start: '',
        end: ''
      },
      detailStatus: false,
      formatDate: '',
      yearDaysCount: '',
    },
    events: [],
    auths: {
      token: "",
      fbAPIKey: "AIzaSyAu8AYeTxHa1m66DfyMneVvL9aI5wKMZtE",

    }
  },
  getters,
  mutations,
  actions,
  modules: {},

})
