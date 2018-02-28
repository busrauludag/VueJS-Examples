<template>
  <div class="container">
    <form action="">
      <div class="col-sm-8 offset-sm-2 form-group">
        <label for="">Quote</label>
        <textarea class="form-control" name="" id="" v-model="quote"
                  cols="30" rows="3"></textarea>
      </div>
      <div class="col-sm-8 offset-sm-2 form-group">
        <button class="btn btn-primary" @click.prevent="createNew">Add New Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      createNew() {
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      }
    }
  }
</script>

<style>
  
</style>