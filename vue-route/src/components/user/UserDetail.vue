<template>
  <div>
    <h5>User Detail Page</h5>
    <p>User Loaded ID: {{ id }}</p>
    <!--  ya da scriptte data oluşturmadan şu şekilde de çağıdabiliriz. -->
    <!-- <p>User Loaded ID: {{ $route.params.id }}</p> -->
    
    <!-- Route with just id -->
    <router-link tag="button" class="btn btn-info" 
                 :to="'/user/'+ id + '/edit'">Edit (ID)</router-link>
    <!-- Route with name and params -->
    <router-link tag="button" class="btn btn-info" 
                 :to="{ name: 'userEdit', params: { id: $route.params.id }, query:{ locale: 'en', q: 100} }">
                 Edit (Name.Params,Query)
    </router-link>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        id: this.$route.params.id
      }
    }
  }
</script>

<style>
  
</style>