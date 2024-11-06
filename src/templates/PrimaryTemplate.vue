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
      <div class="footer-border"></div>
      <div class="social">socials</div>
        <ul>
          <li><a href="#">X (formerly Twitter)</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">Reddit</a></li>
        </ul>

    </footer>
  </section>
</template>

<style scoped>
/*mobile*/
img {
  max-width: 30%;
  padding: 20px;
}

div.header-border, div.footer-border {
  border-top: 5px solid #0065B0;
  padding: 0 0 20px 0;
  margin: 0;
}

div.footer-border {
  margin-top: 30px;
}

div.nav-icon {
  float: right;
}

div.social {
  margin-left: 30px;
}

ul > li {
  display: inline-block;
}

ul {
  list-style-type: none;
}

li {
  margin: 0;
  padding: 0 10px 0 10px;
  text-decoration: none;
}

@media screen and (width > 430) {
  img {
    max-width: 231px;
    max-height: 49px;
  }

  div.header-border, div.footer-border {
    border-top: 6px solid #0065B0;
  }

  div.nav-icon {
    display: none;
  }
}

@media screen and (width > 1000px) {
  img {
    max-width: 400px;
    max-height: 85px;
  }
  div.header-border, div.footer-border {
    border-top: 7px solid #0065B0;
  }

  div.nav-icon {
    display: none;
  }
}

</style>