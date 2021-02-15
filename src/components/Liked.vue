<template>
<v-container>
<div id="bloctext">
<span id="Likedproduit" > Les produits que vous avez aimés !</span>
</div>
  <div class="home">
    <v-row dense>
      
      <v-col
        v-for="(product,index) in $store.state.cart" :key="index"
      >
            <v-card
              
              class="mx-auto my-12"
              max-width="354"
              
            >
                <v-img
                  height="499"
                  :src="product.img"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                > 
              
                  <v-card-title v-text="product.description"> </v-card-title>
                  
                  
                  
                  
                </v-img>
                <v-card-actions>
                  

                  <v-btn icon color="red" >
                    <v-icon >mdi-heart</v-icon>
                  </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn id="buttonprice" color="blue" disabled>
                    <span class="subheading mr-2" id="price">{{product.price}}€</span>
                    </v-btn>
                    <v-spacer></v-spacer>
                  <v-btn icon color="blue" @click="removetocart(product)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
                
            </v-card>
      </v-col>
    </v-row>
    
  </div>
</v-container>
  
</template>

<script>


export default {
  name: 'Liked',
  methods: {
    removetocart:function(number){
       this.$store.dispatch('Deincrement',number)
     },
    
  },
  
}
</script>

<style scoped>
#price{
    color:green;
    font-weight: bold;
  }

#Likedproduit{
  color: blue;
  font-size: 31px;
}
#bloctext{
width: 500px;
  margin: 0 auto;

}

</style>
