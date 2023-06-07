<template>
  <div v-if="pageLoading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div> 

  <div v-else class="col-md-6">
    <h2 class="mb-5">Edit Post :</h2>

    <Form
      @formData="updatePost"
      :loading-bool="loading"
      button-text="Edit Post"
      :post="post"
    />
  </div>
</template>

<script>

import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
import Form from "../components/Form.vue";

export default {
  components: {
    Form,
  },
  setup() {
    const loading = ref(false);
    const pageLoading = ref(true);
    const post = ref({});
    const route = useRoute();

     function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          post.value = response.data;
          pageLoading.value = false
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getPost(); 

    function updatePost(formData) {
      loading.value = true;
      console.log();
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: formData.title,
          body: formData.body,
          userId: 1,
        })
        .then(function () {
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post update successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { updatePost, loading, post ,pageLoading};
  },
};
</script>

<style>
</style>