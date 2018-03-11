<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/" active-class="active" exact>Home</router-link>
          <router-link class="nav-item nav-link" to="/user" active-class="active">User</router-link>
          <!-- User seçiliyken Home'u da aktif yapmasın diye 'exact' özelliği kullanılır. !! -->
          <!-- 
            router-link'te tag='li' kullanarak o elementi li yapıp, 
            içerisine a elementi ekleyerek kullanabiliriz. -> <li><a>Menu Item</a></li>
           -->
          <!-- <a class="nav-item nav-link" href="#">Home</a>
          <a class="nav-item nav-link" href="#">User</a> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

</script>

<style>
</style>