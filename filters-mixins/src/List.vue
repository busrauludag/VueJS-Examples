<template>
  <div>
    <h3>Filters and Mixins</h3>
    <input type="text" v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits">
        {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<!-- Önce mixin'ler yüklenir, daha sonra Component'ler yüklenir. -->
<script>
  import { fruitMixin } from './fruitMixin';
  export default {
    mixins: [fruitMixin],
    created(){
      console.log('List Created!');
    }
  }
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
</style>