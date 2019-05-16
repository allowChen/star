import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios'

Vue.use (Vuex)


export default new Vuex.Store ({
  state: {
    today: null,
    tomorrow: null,
    week: null,
    nextWeek: null,
    month: null,
    year: null,
    constell: null,
    count: 0
  },
  mutations: {
    increment (state, val) {
      state.today = val.today
      state.tomorrow = val.tomorrow
      state.week = val.week
      state.nextWeek = val.nextWeek
      state.month = val.month
      state.year = val.year
    },
    getConstell (state, val) {
      state.constell = val.constellation
    },
    getCount (state) {
      state.count ++
    }
  },
  actions: axios
})
