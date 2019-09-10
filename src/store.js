import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/'
})

let apiKey = 'apod?api_key=GFAcaZscnDs3vp3KXwgzQHtxi34mfuly2g8yPLWe'

export default new Vuex.Store({
  state: {
    apod: {}
  },
  mutations: {
    setApod(state, apod) {
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
    }
  }
})
