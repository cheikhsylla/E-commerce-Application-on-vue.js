<template>
<v-container>
  <v-app-bar app
    extended
    extension-height="60"
    color="#FAFAFA"

  >
      <v-app-bar-nav-icon class="mt-5" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <div class="logo">
        <router-link to="/">
        <v-img class="logo1" src="@/assets/travel.png"></v-img>
        </router-link>
      </div>
      <v-spacer></v-spacer>
    <!-- Icone -->
      <div class="mt-5">
        <v-btn icon router to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn icon router to="/liked" color="red">
                    <v-icon>mdi-heart</v-icon>

          <v-badge bordered  v-if="$store.state.cart.length>0" :content="$store.state.cart.length">
          </v-badge>
        </v-btn>


        <v-btn icon router to="/shopping" color="blue">
          <v-icon>mdi-cart</v-icon>
        </v-btn>

       
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </div>

  
  </v-app-bar>

  <v-navigation-drawer v-if="drawer" app color="#FAFAFA" >
    <v-list class="mt-16">

      <v-list-item router to="/">
        <v-list-item-icon>   
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-item router to="/Liked">
        <v-list-item-icon>
          <v-icon color="red">mdi-heart</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Liked</v-list-item-title>
      </v-list-item>

      <v-list-item router to="/Shopping">
        <v-list-item-icon>
          <v-icon color="blue">mdi-cart</v-icon>      
        </v-list-item-icon>
        <v-list-item-title>Shopping</v-list-item-title>
      </v-list-item>
    
    
    </v-list>

    <div class="logo_draw">
        <router-link to="/about">
        <v-img class="logo1" src="@/assets/travel.png"></v-img>
        </router-link>
    </div>
    <div class="design1">
        <p class="design2"> Design & Developed by <strong class="author">Cheikh SYLLA</strong></p>
        <p class="design3">Cheikh SYLLA</p>
    </div>
    
    
  </v-navigation-drawer>
  <!-- shopping card items -->
      

    <v-navigation-drawer
      absolute
      
      right
      class="ert"
      height="600px"
      v-if="$store.state.shopping.length!=0"
    >
    
    <template v-slot:prepend>
        <v-list-item two-line>
    
          <v-list-item-content>
           <img src="@/assets/travel.png" width="100px">
           <v-list-item-title class="text-center green " id="cart-list">Shopping cart list</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
        <ListOfShopping v-if="$store.state.shopping.length!=0"/>

    </v-navigation-drawer>

   
</v-container>
</template>

<script>
import ListOfShopping from '@/components/ListOfShopping.vue'
export default {
  name:'Navbar',
  components:{
    ListOfShopping
  },
  data(){
    return{
      drawer:false,
     
    }
  },
 
}
</script>

<style scoped>
  .logo{
  margin-top:50px;
  }
  .logo1{
  height:60px ;
  }

  .logo_draw{
  
    margin-top: 120px;
  }
  .design1{
  
    margin-top:160px;
  }
  .design2{
  
    font-size: x-small;
    margin-left: 10px;
    color: red;
  }

  .design3{
  
    font-size: smaller;
    margin-left: 80px;
    font-weight: bold;
    color: blue;
  }
  .ert{
  margin-top: 120px;
  position: fixed;
  }
  #cart-list{
  font-weight: bold;
  color: white;
  }
  .author{
  color: blue;
  }

</style>