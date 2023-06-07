<template>
  <div class="card">
  <div class="card-header">
    
    <router-link :to="{name:'user' , params:{id:item.id}}">{{ item.name }}</router-link>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Username: {{ item.username }}</li>
    <li class="list-group-item">Email: {{ item.email }}</li>
    <li class="list-group-item">Phone: {{ item.phone }}</li>
  </ul>
</div>
</template>

<script>
export default {
props:{
    item:Object
}
}
</script>

<style>

</style>