
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BuyModal from '@/components/Shared/BuyModal'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModal)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyAJjJZiM_3rTyTKg9sIhrU_EKNcPaufVn0',
      authDomain: 'its-ads-11d03.firebaseapp.com',
      databaseURL: 'https://its-ads-11d03.firebaseio.com',
      projectId: 'its-ads-11d03',
      storageBucket: 'its-ads-11d03.appspot.com',
      messagingSenderId: '584360410879'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})
