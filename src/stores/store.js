import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[],
  },
  mutations: {
    // add an article in the cart
    increment (state,payload) {
      this.state.cart.push(payload)
    },
    // Remove an article in the cart
    Deincrement (state,payload) {
      this.state.cart=this.state.cart.filter(item => item !== payload)
    }
  },
  actions:{
    increment(context,payload){

      setTimeout(function(){
          context.commit('increment',payload)
      },1500)
    },
    Deincrement(context,payload){

      setTimeout(function(){
          context.commit('Deincrement',payload)
      },1500)
    }
  }
})