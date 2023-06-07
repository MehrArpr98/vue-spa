<template>

  <div class="container">
    <div class="row">
       <div class="col-md-6">
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque qui,
             eos fugit cupiditate maiores, officia consequuntur sapiente esse velit
              sint delectus ut ipsam pariatur unde ad rerum! Ipsa, tenetur eum.
        </p>
        <router-link class="btn btn-dark" :to="{ name:'users'}"> users</router-link>
        <router-link class="btn ms-3 btn-primary" :to="{ name:'posts'}"> posts</router-link>
       </div>

    </div>
      
  </div>


</template>

<script>
export default {

}
</script>

<style>

</style>