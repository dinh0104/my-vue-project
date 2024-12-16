<script setup>

</script>

<template>
  <section class="primary-template">
    <router-link :to="{ name: 'Home' }">
      <img src="/src/assets/niji_pics/nijisanji_logo.webp" alt="nijisanji logo">
    </router-link>
    <div class="nav-icon">
      <router-link :to="{ name: 'Navbar' }">
        <img src="/src/assets/svg%20icons/icons8-menu.svg" alt="back arrow">
      </router-link>
    </div>

    <div class="header-border"></div>
    <section class="main">
      <slot/>
    </section>
    <footer>
      <div class="footer-border"></div>
      <h1>Learn more about the company</h1>
      <router-link :to="{ name: 'AboutUs' }">About Us</router-link>

      <router-link :to="{ name: 'Home' }">Our Talents</router-link>

      <h1>Nijisanji EN Socials</h1>
      <a href="https://x.com/NIJISANJI_World?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">X (formerly
        Twitter)</a>
      <a href="https://www.youtube.com/c/nijisanji_en">YouTube</a>
      <a href="https://www.reddit.com/r/Nijisanji/">Reddit</a>

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
  margin: 0;
}

div.footer-border {
  margin-top: 30px;
}

a {
  text-decoration: none;
  color: #0065B0;
  font-family: 'raleway', sans-serif;
  padding: 40px 0 40px 40px;
}

div.nav-icon {
  float: right;
}

h1 {
  margin-left: 30px;
  color: #0065B0;
  font-family: "raleway bold", sans-serif;
}

/*
ul > li {
  display: inline-block;
}

ul {
  list-style-type: none;
}

li {
  margin: 0;
  padding: 0 10px 0 10px;
  font-family: 'raleway', sans-serif;
}*/

@media screen and (width > 530px) {
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
    margin-left: 20px;
  }

  div.header-border, div.footer-border {
    border-top: 7px solid #0065B0;
  }

}

</style>