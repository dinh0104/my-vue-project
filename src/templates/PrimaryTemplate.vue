<script setup>

</script>

<template>
  <section class="primary-template">
    <img src="/public/niji_pics/nijisanji_logo.webp" alt="nijisanji">
    <div class="nav-icon"><img src="/public/icons8-menu.svg" alt="nav icon"></div>
    <div class="header-border"></div>
    <section class="main">
      <slot/>
    </section>
    <footer>
      <div class="social">socials</div>
      <div class="copyright">Nijisanji EN 2024</div>
    </footer>
  </section>
</template>

<style scoped>
img {
  max-width: 30%;
  padding: 20px;
}

div.header-border {
  border: 3px solid #0065B0;
  padding: 0;
  margin: 0;
}

div.nav-icon {
  float: right;
}

</style>