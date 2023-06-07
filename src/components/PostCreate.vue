<template>
  <div class="col-md-6">
    <h2>Create Post :</h2>

    <Form @formData="createPost" :loading-bool="loading" button-text="create"/>
  </div>
</template>

<script>
 import axios from "axios";
import Swal from "sweetalert2"; 
import Form from "../components/Form.vue";
import { ref } from 'vue';

export default {
  components: {
    Form
  },
  setup() {

    const loading = ref(false);

    function createPost(data) {
loading.value = true;
      //console.log(data)
       axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          id: 1,
          title: data.title,
          body: data.body
        })
        .then(function(response) {
          // handle success
          console.log(response);
          Swal.fire({
            icon: "success",
            title: "Post created successfuly!!"
          });

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

    return { createPost , loading};
  }
};
</script>

<style>
</style>