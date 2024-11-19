<script setup>

</script>

<template>
  <div class="container">
    <div class="top">
      <div class="close-icon">
      <router-link :to="{name: 'Home'}">
        <img src="/src/assets/close-x-svgrepo-com.svg" alt="close icon">
      </router-link>
      </div>
      </div>

    <div class="main-links">
      <router-link :to="{ name: 'Home'}">All</router-link>
      <router-link :to="{ name: 'LazuLight'}">LazuLight</router-link>
      <a href="#">Obsydia</a>
      <a href="#">Ethyria</a>
      <a href="#">Luxiem</a>
      <a href="#">Noctyx</a>
      <a href="#">Iluna</a>
      <a href="#">Xsoleil</a>
      <a href="#">Krisis</a>
      <a href="#">TTT</a>
      <a href="#">Denauth</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #0065B0;
}

.top {

}

img {
  width: 40px;
  height: 40px;
  display: flex;
  justify-items: flex-end;
}

.main-links {
  padding: 40px 0;
}

a {
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  font-family: "raleway bold", sans-serif;
  font-size: 20px;
  color: white;
  padding: 10px 0;
}
</style>