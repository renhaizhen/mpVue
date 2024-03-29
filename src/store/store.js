import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import state from './state'
import mutations from './mutations'
import actions from './actions'

//声明使用vuex
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    mutations
})
