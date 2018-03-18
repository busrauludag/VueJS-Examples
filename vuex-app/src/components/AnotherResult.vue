<template>
  <div>
    <p>
      <!-- Counter is: {{ counter }} -->
      Counter is: {{ doubleCounter }}
    </p>
    <p>
      <!-- Number of Clicks: {{ clicks }} -->
      Number of Clicks: {{ stringCounter }}
    </p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'; // getters'i tekrar tekrar kullanmamak için!
  export default {
    //props: ['counter']
    // computed: {
    //   counter() {
    //     // with Satate
    //     //return this.$store.state.counter * 2;

    //     // with Getters
    //     return this.$store.getters.doubleCounter;
    //   },
    //   clicks() {
    //     return this.$store.getters.stringCounter;
    //   }
    // }

    // daha az kodla yukarıdaki ile aynı işlevi yapmak için mapGetters kullanılır
    computed: {
      // ... (ES6 özelliği) ile getter objesini computed propery'içinde ayırırız ve 
      // böylece devamına kendi computed property objelerimizi ekleyebilriiz.

      // fakat tarayıcı tanımadığı için hata verir ve ES6'nın ES2'ye dönüştürülmesi için;
      // npm install --save-dev babel-preset-stage-2 paketini kurmamız gerekir !!
      // ve ardından .babelrc dosyasına gidip yeni bir dizi elemanı ekleriz !!
      ...mapGetters([
      'doubleCounter',
      'stringCounter'
      ]),
      myProperty() {
        // ...
      }
    }
    // mutations: bir noktada ya da bir componentte state'te bi değişiklik yapıp, diğer state'i kullanan 
    // componentlerin de bu değişikliği dinlemesi, değişikliğin onlarda da uygulanması
  }
</script>