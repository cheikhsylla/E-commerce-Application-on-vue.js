<template>
  <div>
    <v-container>
      <v-container>
        <v-row>
            <h1 id="search">Articles</h1>
        </v-row>
        <v-row>
                <input type="search" v-model="searchkey" id="search" placeholder="Rechercher...." class="searchinput" >
                <span v-if="searchkey && filteredList.length>=1" id="results">
                    {{ filteredList.length}} résultat<span v-if=" filteredList.length>=2">s</span>
                </span>
        </v-row>
          
      </v-container>
          <div class="home">
            <v-row dense>
              <v-col
                v-for="(product, index) in pageOfItems" :key="index"
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
                          

                          <v-btn icon color="red" @click="addtocart(product)" >
                            <v-icon >mdi-heart</v-icon>
                          </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn id="buttonprice" color="blue" disabled>
                            <span class="subheading mr-2" id="price">{{product.price}}€</span>
                            </v-btn>
                            <v-spacer></v-spacer>
                          <v-btn icon color="blue" @click="addToShopping(product)">
                            <v-icon>mdi-cart</v-icon>
                          </v-btn>
                        </v-card-actions>
                        
                    </v-card>
              </v-col>
            </v-row>
            <!-- no result found -->
            <div v-if="filteredList.length == []" id="nor">
                  <h3 id="no-result">Désolé</h3>
                  <span id="no-result"> aucun résultat trouvé </span>
            </div>
          </div>
    </v-container>
    <div class="text-center">
            <jw-pagination :items="filteredList" @changePage="onChangePage" :pageSize='6'></jw-pagination>
    </div>
</div>

</template>

<script>
import products from '@/assets/product.js'


export default {
  name: 'Home',
  data(){
    return{
      products,
      cart:[],
      searchkey:'',
      pageOfItems: [],
      
    }
  },
  components:{
  
  },
  methods: {
       
    
     addtocart:function(number){
       this.$store.dispatch('increment',number);
       //show alert message 
          
            //Display alert message
            this.$swal({
              position: 'center',
              icon: 'success',
              title: 'Article ajouté dans favoris',
              showConfirmButton: false,
              timer: 1500
              });
      
     },
     onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
      addToShopping (cart){
        this.$store.dispatch('incrementbis',cart);
        //Display alert message
            this.$swal({
              position: 'center',
              icon: 'success',
              title: 'Article ajouté dans Panier',
              showConfirmButton: false,
              timer: 1500
              });
      }
    },
    computed: {
        filteredList(){
            return this.products.filter((index)=>{
                return index.description.toLowerCase().includes(this.searchkey.toLowerCase())
            })
        },

       
    },
}
</script>

<style scoped>

  #price{
    color:green;
    font-weight: bold;
  }
  #search{
    color: blue;
    margin-top: 0.5%;
    margin-left: 2%;
    

    }
    .searchinput{
      border: 2px solid black;
    border-radius: 4px;
    }


  #results{
    color: green;
    font-weight: bold;
    margin-top: 0.5%;
    margin-left: 2%;
    }
    #no-result  {
    
    color:red;
    font-weight: bold;
   
    }
  
  #nor{
    margin:0 auto;
    width: 300px;
  }
</style>
