  <template>
  <div>
    <router-link class="btn btn-dark" :to="{name:'createPost'}">Create</router-link>
  </div>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-4" v-for="item in items" :key="item.id">
    <div class="card">
      <div class="card-header">
        <router-link :to="{name:'post' , params:{id:item.id}}">{{ item.title }}</router-link>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">body: {{ item.body }}</li>
      </ul>
    </div>
  </div>
</template>

  <script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const items = ref([]);
    const loading = ref(true);

    function getDatas() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function(response) {
          // handle success
          console.log(response);

          items.value = response.data;
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

    getDatas();

    return { items, loading };
  }
};
</script>

  <style>
</style>