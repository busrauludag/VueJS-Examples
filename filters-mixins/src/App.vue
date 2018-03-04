<template>
  <div>
    <h3>Filters and Mixins</h3>
    <p>
      {{ text | toUppercase | to-lowercase }}
    </p>
    <hr>
    <button class="btn btn-primary btn-sm" @click="fruits.push('Berries')">Add New Item</button>
    <input type="text" v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits">
        {{ fruit }}
      </li>
    </ul>
    <hr>
    <app-list></app-list>
  </div>
</template>

<script>
  import List from './List.vue';
  import { fruitMixin } from './fruitMixin';

  export default {
    mixins: [fruitMixin],
    data() {
      return {
        text: 'Hello There!',
        // fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
        // filterText: ''
      }
    },
    // Locally
    filters: {
      // 'to-uppercase'(value){}
      toUppercase(value) {
        // value: değişecek olan değer
        return value.toUpperCase();
      }
    },
    // computed: {
    //   filteredFruits() {
    //     return this.fruits.filter((element) => {
    //       return element.match(this.filterText);
    //     });
    //   }
    // },
    components: {
      appList: List
    }
  }
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
</style>