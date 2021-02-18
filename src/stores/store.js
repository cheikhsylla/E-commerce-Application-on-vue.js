import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[],
    shopping:[],
    totalPrice:0
  },
  mutations: {
    // add an article in the cart
    increment (state,payload) {
      this.state.cart.push(payload);
    },
    incrementbis (state,payload) {
      this.state.shopping.push(payload);

      this.state.totalPrice+=payload.price;
      // console.log(this.state.totalPrice)
    },
    // Remove an article in the cart
    Deincrement (state,payload) {
      this.state.cart=this.state.cart.filter(item => item !== payload);
    },
    Deincrementbis (state,payload) {
      this.state.shopping=this.state.shopping.filter(item => item !== payload);
      this.state.totalPrice-=payload.price;
    }
  },
  actions:{
    increment(context,payload){

      setTimeout(function(){
          context.commit('increment',payload)
      },1500)
    },
    incrementbis(context,payload){

      setTimeout(function(){
          context.commit('incrementbis',payload)
      },1500)
    },
    Deincrement(context,payload){

      setTimeout(function(){
          context.commit('Deincrement',payload)
      },1500)
    },
    Deincrementbis(context,payload){

      setTimeout(function(){
          context.commit('Deincrementbis',payload)
      },1500)
    }
  }
})