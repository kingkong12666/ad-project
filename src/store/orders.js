import * as fb from 'firebase'
class Order {
  constructor (name, phone, adId, done = false, id = null) {
    this.name = name
    this.phone = phone
    this.adId = adId
    this.done = done
    this.id = id
  }
}
export default {
  store: {
    orders: []
  },
  mutations: {
    loadOrders (state, payload) {
      state.orders = payload
    }
  },
  actions: {
    async createOrder ({commit}, {name, phone, adId}) {
      const order = new Order(name, phone, adId)
      commit('clearError')
      commit('setLoading', true)
      try {
        await fb.database().ref('orders').push(order)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async fetchOrders ({commit}) {
      commit('clearError')
      commit('setLoading', true)
      const resultOrders = []

      try {
        const fbVal = await fb.database().ref('orders').once('value')
        const orders = fbVal.val()

        Object.keys(orders).forEach(key => {
          const order = orders[key]
          resultOrders.push(
            new Order(order.name, order.phone, order.adId, order.done, key)
          )
        })

        commit('loadOrders', resultOrders)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
      }
    },
    async markOrderDone ({commit}, payload) {
      commit('clearError')

      try {
        await fb.database().ref('orders').child(payload).update({
          done: true
        })
      } catch (error) {
        commit('setError', error.message)
        throw error
      }
    }
  },
  getters: {
    doneOrders (state) {
      return state.orders.filter(o => o.done)
    },
    undoneOrders (state) {
      return state.orders.filter(o => !o.done)
    },
    orders (state, getters) {
      return getters.undoneOrders.concat(getters.doneOrders)
    }
  }
}
