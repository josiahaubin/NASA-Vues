import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/'
})

let apiKey = 'apod?api_key=GFAcaZscnDs3vp3KXwgzQHtxi34mfuly2g8yPLWe'

let date = apiKey + '&date='

export default new Vuex.Store({
  state: {
    apod: {}
  },
  mutations: {
    setApod(state, apod) {
      state.apod = apod
    },
    setReqApod(state, apod) {
      state.apod = apod
    }
  },
  actions: {
    async getApod({ commit, dispatch }) {
      try {

        let res = await api.get(apiKey)
        commit('setApod', res.data)

      } catch (error) {
        console.error(error)
      }
    },
    async requestApod({ commit, dispatch }, query) {
      try {
        let res = await api.get(date + query)
        commit('setReqApod', res.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
