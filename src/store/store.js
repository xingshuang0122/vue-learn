import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import home from './modules/home'
import community from './modules/community'
import myself from './modules/myself'
import shopCart from './modules/shopCart'

export default new Vuex.Store({
  modules: {
    home,
    community,
    shopCart,
    myself
  }
})
