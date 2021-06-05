import Vue from 'vue'
import Vuex from 'vuex'
import axios, { errorHandler } from './config/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCards: [],
    searchQuery: '',
    searchResult: [],
    myCards: [],
    page: 1
  },
  mutations: {
    setSearchResult (state, payload) {
      state.searchResult = payload
    },
    setSearchQuery (state, payload) {
      state.searchQuery = payload
    },
    addToAllCards (state, payload) {
      state.allCards = state.allCards.concat(payload)
      state.page++
    },
    addToMyCards (state, payload) {
      let newId = payload.id + new Date().getTime().toString() // make it unique
      let newObject = { ...payload, id: newId }
      state.myCards.push(newObject)
    },
    deleteFromMyCards (state, id) {
      state.myCards = state.myCards.filter(card => card.id !== id)
    }
  },
  actions: {
    getCards ({ state, commit }) {
      // console.log(test.axios)
      return axios({
        method: 'get',
        url: `/cards?pageSize=25&page=${state.page}`
      })
        .then(({ data }) => {
          commit('addToAllCards', data.cards)
        })
        .catch(errorHandler)
    },
    getSearchResult ({ commit }, searchQuery) {
      commit('setSearchResult', [])
      commit('setSearchQuery', searchQuery)
      return axios({
        method: 'get',
        url: `/cards?name=${searchQuery}`
      })
        .then(({ data }) => {
          commit('setSearchResult', data.cards)
        })
        .catch(errorHandler)
    }
  }
})
