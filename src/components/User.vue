<template>

        <div v-if="loading" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
       <div v-else class="col-md-4">
        <CardView :item="item"/>
       </div>

</template>

<script>
import axios from 'axios';
import {ref} from 'vue';
import CardView from "./CardView.vue";
import {useRoute} from 'vue-router';

export default {
    components:{
CardView
    },
    setup(){
        const item = ref({});
        const loading = ref(true);
        const route = useRoute();
function getData() {
    axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
  .then(function (response) {
    // handle success
    console.log(response);
    item.value = response.data;
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

getData()

return { item , loading}
    }

}
</script>

<style>

</style>