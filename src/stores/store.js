import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:2,
    cart:[],
  },
  mutations: {
    increment (state,payload) {
      this.state.cart.push(payload)
    }
  },
  actions:{
    increment(context,payload){

      setTimeout(function(){
          context.commit('increment',payload)
      },2000)
    }
  }
})