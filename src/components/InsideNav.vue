<script setup>

</script>

<template>
  <div class="container">
    <div class="top">
      <div class="logo">
        <img src="/src/assets/niji_pics/white niji logo.png" alt="white nijisanji logo">
      </div>
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

    <div class="socials">
      <h2>Socials</h2>
      <a href="#">twitter</a>
      <a href="#">Youtube</a>
      <a href="#">Reddit</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #0065B0;
}

.top {
  padding: 30px;
  display: flex;
  align-items: center;

  img {
    width: 50%;
    height: 50%;
    float: left;
  }

  .logo {
    width: 90%;
    height: 90%;
  }

  .close-icon {
    width: 20%;
    height: 20%;
    float: right;
  }
}


.main-links {
  padding: 20px 0;

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
}

.socials {
  padding: 100px 30px 70px 30px;

  h2 {
    font-family: "raleway bold", sans-serif;
    color: white;
  }

  a {
    padding: 10px;
    font-family: 'raleway', sans-serif;
    color: white;
    text-decoration: none;
  }
}


</style>