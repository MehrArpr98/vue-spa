<template>
  
 
        <div v-if="loading" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
       <div v-else class="col-md-4" v-for="item in items" :key="item.id">
        <CardView :item="item"/>
       </div>

</template>

<script>
import axios from 'axios';
import {ref} from 'vue';
import CardView from "./CardView.vue";


export default {
    components:{
CardView
    },
    setup(){
        const items = ref([]);
        const loading = ref(true);
        

function getDatas() {
    axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // handle success
    console.log(response);
    
    items.value = response.data;
    loading.value = false;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    
}

getDatas()

return { items , loading }
    }

}
</script>

<style>

</style>