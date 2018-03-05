<template>
  <div class="container">
    <h2>Animations and Transitions</h2>
    <hr>
    <select class="form-control mb-3" v-model="alertAnim">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </select>
    <button class="btn btn-primary" @click="show = !show">
      Show Alert
    </button>
    <!-- dynamic name, according to select -->
    <!-- :type, :name şeklinde kullanılabilir -->
    <transition :name="alertAnim">
      <div class="alert alert-info mt-2" v-if="show">
        This is some Info !
      </div>
    </transition>
    <transition name="fade">
      <div class="alert alert-info mt-2" v-if="show">
        This is some Info !
      </div>
    </transition>
    <transition name="slide">
      <div class="alert alert-info mt-2" v-if="show">
        This is some Info !
      </div>
    </transition>
    <!-- initial loading => appear sayfa yüklenince oynar -->
    <transition name="slide" appear>
      <div class="alert alert-info mt-2" v-if="show">
        This is some Info !
      </div>
    </transition>
    <!-- animate css kütüphanesine ait classlar ile karışmamas için
    farklı isimler verebiliriz, tanımlarken aşağıdaki özellikleri kullanabiliriz. -->
    <!-- 
       enter-class="", leave-class=""   kullanmıyorsak silmemiz gerekir yoksa hata verir, bir class atamaya çalışır
     -->
    <transition 
                enter-active-class="animated bounce"
                leave-active-class="animated shake">
      <div class="alert alert-info mt-2" v-if="show">
        This is some Info !
      </div>
    </transition>
    <!-- transition between multiple elements -->
    <!-- key kullanarak elemanları ayırabiliriz, vue bunun ayrımını yapacaktır -->
    <!-- out-in = önce eskisi kaybolsun, out -->
    <transition name="slide" mode="out-in">
      <div class="alert alert-info" v-if="show" key="info">
        This is some Info !
      </div>
      <div class="alert alert-warning" v-else="!show" key="warning">
        This is some Warning !
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        alertAnim: 'fade'
      }
    }
  }
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
  /* fade = transition name */
  .fade-enter{
    /* only first frame */
    opacity: 0;
  }
  .fade-enter-active{
    /* other frames */
    transition: opacity 1s;
  }

  .fade-leave{
    /* opacity: 1; */
    /* because dafult is 1              */
  }
  .fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }

  /* slide = transition name */
  .slide-enter{
    opacity: 0;
    /* transform: translateY(20px); */
  }
  .slide-enter-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave{

  }
  .slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
  }
  @keyframes slide-in{
    from{
      transform: translateY(20px);
    }
    to{
      transform: translateY(0);
    }
  }
   @keyframes slide-out{
    from{
      transform: translateY(0);
    }
    to{
      transform: translateY(20px);
    }
  }
</style>