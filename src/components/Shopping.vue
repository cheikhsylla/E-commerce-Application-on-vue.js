<template>
<v-container>
  <div v-for="(product,index) in $store.state.cart" :key="index">
    <span>{{product.price}}</span>
    
  </div>
</v-container>

</template>

<script>


export default {
  name: 'Shopping',
  data(){
    return{
    }
  },
  
  
}
</script>
