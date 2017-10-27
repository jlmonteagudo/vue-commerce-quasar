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
