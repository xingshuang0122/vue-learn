import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import community from './modules/community'
import myself from './modules/myself'
import shopCart from './modules/shopCart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    community,
    shopCart,
    myself
  }
})
