<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-4">
    <div class="card">
      <div class="card-header">
        <router-link :to="{name:'user' , params:{id:item.id}}">{{ item.title }}</router-link>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">body: {{ item.body }}</li>
      </ul>
      <div class="card-footer">
        <button @click="DeletePost" class="btn btn-danger me-3">Delete</button>
        <router-link class="btn btn-dark me-3" :to="{name:'editPost' , params:{id:item.id}}">Edit</router-link>
        <!--  <button class="btn btn-dark me-3"> Edit </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Swal from 'sweetalert2';

export default {
  setup() {
    const item = ref({});
    const loading = ref(true);
    const route = useRoute();
    function getData() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function(response) {
          // handle success
          console.log(response);
          item.value = response.data;
          loading.value = false;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
        });
    }

    getData();

    function DeletePost() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function(response) {
          // handle success
          Swal.fire({
            icon: "warning",
            title: "Post deleted successfuly!!"
          });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
        });
    }

    return { item, loading, DeletePost };
  }
};
</script>

<style>
</style>