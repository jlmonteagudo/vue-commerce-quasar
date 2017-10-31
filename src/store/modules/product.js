import * as db from '../../db'

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

// initial state
const state = {
  products: []
}

// getters
const getters = {
  products: state => state.products
}

// actions
const actions = {
  findAll ({ commit }) {
    db.products.get()
      .then((snapshot) => {
        let products = []
        snapshot.forEach(doc => products.push(doc.data()))
        commit(RECEIVE_PRODUCTS, { products })
      })
  },

  insert ({ commit, dispatch }, product) {
    return db.products.add(product)
  },

  search ({ commit }, query) {
    console.log('searching from store... ', query)

    const algoliasearch = require('algoliasearch')
    const ALGOLIA_APP_ID = 'ANTNGYLLWY'
    const ALGOLIA_SEARCH_KEY = '22c22f0e7d6e7a527c308375a8269d99'
    var client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY)
    var index = client.initIndex('products')

    index.search({
      query
    }).then((responses) => {
      console.log('response from algolia...', responses.hits)
    })

    /*
    db.products.get()
      .then((snapshot) => {
        let products = []
        snapshot.forEach(doc => products.push(doc.data()))
        commit(RECEIVE_PRODUCTS, { products })
      })
    */
  }
}

// mutations
const mutations = {
  [RECEIVE_PRODUCTS] (state, { products }) {
    state.products = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
