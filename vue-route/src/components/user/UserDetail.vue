<template>
  <div>
    <h5>User Detail Page</h5>
    <p>User Loaded ID: {{ id }}</p>
    <!--  ya da scriptte data oluşturmadan şu şekilde de çağıdabiliriz. -->
    <!-- <p>User Loaded ID: {{ $route.params.id }}</p> -->

    <!-- Route with just id -->
    <router-link tag="button" class="btn btn-info" :to="'/user/'+ id + '/edit'">Edit (ID)</router-link>
    <!-- Route with name and params -->
    <router-link tag="button" class="btn btn-info" :to="link">
      Edit (Name.Params,Query)
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        link: { 
          name: 'userEdit', 
          params: { id: this.$route.params.id }, 
          query: { locale: 'en', q: 100 }
          // .../user/1/edit?locale=en&q=100#data
          //hash: '#data'
        }
      }
    },
    // this is LifeCycle Hook
    beforeRouteEnter: (to, from, next) => {
      // this.link buarada çalışmayacaktır çünkü component henüz oluşturulmadı, şu şekilde ulaşabiliriz:
      // next(vm => {
      //   this.link;
      // });

      // if(false) ile user detail'a gitmeyi engellemiş oluruz
      if(true){
        next();
      }else{
        next(false);
      }
    }
  }
</script>

<style>
</style>