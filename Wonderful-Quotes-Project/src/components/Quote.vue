<template>
  <div class="col-sm-6 col-md-4 col-lg-3 mb-2">
    <div class="card">
      <div class="card-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['quotes'],
    data() {
      return {
        
      }
    }
  }
</script>

<style>
  .card-body{
    font-family: 'Arizonia', cursive;
    font-size: 24px;
    color: #6e6e6e;
  }
  .quote{
    cursor: pointer;
  }
  .quote:hover{
    background-color: #ffe2e2;
  }
</style>