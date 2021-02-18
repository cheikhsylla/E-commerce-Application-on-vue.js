<template>
<v-container>
<div id="bloctext">

</div>
  <div class="home">
    <v-row dense>
      
      <v-col
        v-for="(product,index) in $store.state.shopping" :key="index"
      >
            <v-card
              
              class="mx-auto my-12"
              max-width="200"     
            >
                <v-img
                  height="100"
                  :src="product.img"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                > 
              
                  <v-card-title v-text="product.description"> </v-card-title>

                  
                </v-img>
                <v-card-actions>
                    <v-btn id="buttonprice" color="blue" disabled>
                    <span class="subheading mr-2" id="price">{{product.price}}€</span>
                    </v-btn>
                    <v-spacer></v-spacer>
                  <v-btn icon color="blue" @click="removetocart(product)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
                
            </v-card>
            <v-divider/>
      </v-col>
        
      <span id="totalPrice"> Total Price: {{$store.state.totalPrice}}€</span>

      
    </v-row>
    
  </div>
</v-container>
  
</template>


<script>
export default {
    name:'ListOfShopping',
    data() {
        return {
           
        }
    },
    methods: {
    removetocart:function(number){
       this.$store.dispatch('Deincrementbis',number)
     },
    
  },
}
</script>

<style>
#price{
    color:green;
    font-weight: bold;
  }
  #totalPrice{
  color:white;
  font-weight: bolder;
  margin: 0 auto;
  background-color: blue;
  }

</style>