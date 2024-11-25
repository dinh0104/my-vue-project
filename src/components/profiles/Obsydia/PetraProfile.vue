<script setup>

import PrimaryTemplate from "../../../templates/PrimaryTemplate.vue";
</script>

<template>
<primary-template>
  <section class="top">
    <router-link :to="{ name: 'Home' }">
      <img src="/src/assets/icons8-back-64.png" alt="back arrow">
    </router-link>
    <div class="intro">
      <h1>Petra Gurin</h1>
      <h1>ペトラ グリン</h1>
      <p>A penguin who spent much time alone in the frosty sea.
        Has charm and complex emotions as the stormy sea.</p>

      <p>凍てつく海で一人で過ごす時間が多かったペンギン。
        嵐の海のような魅力と複雑な感情を持つ。</p>
    </div>
    <div class="half-body"></div>
  </section>

  <section class="information">
    <ul>
      <li><b>Gender:</b> Female</li>
      <li><b>Age:</b> No ^_^</li>
      <li><b>Birthday:</b> December 4</li>
      <li><b>Height:</b> 152 cm/4'11"</li>
      <li><b>Color:</b> #FFAE42</li>
      <li><b>Fan name:</b> PenTomo</li>
    </ul>

    <iframe width="348" height="176" src="https://www.youtube.com/embed/o1M8YeJzdVg?si=xpwvKhD-HQu4OBz9"></iframe>

    <div class="social-icons">
      <span><a href="https://www.twitter.com/Petra_Gurin/"><img src="/src/assets/icons8-twitterx.svg" alt="twitter/x icon"></a></span>
      <span><a href="https://www.youtube.com/@petragurin"><img src="/src/assets/icons8-youtube.svg" alt="youtube icon"></a></span>
      <span><a href="https://www.twitch.tv/petragurin/"><img src="/src/assets/icons8-twitch.svg" alt="twitch icon"></a></span>
    </div>
    <router-link :to="{ name: 'PetraGallery' }">
      <h2>Gallery</h2>
    </router-link>
  </section>
</primary-template>
</template>

<style scoped>

section.top {
  background-color: #FFAE42;
  padding-top: 20px;
}

img {
  width: 40px;
  height: 40px;
  padding: 0 0 0 20px;
}

h1 {
  display: flex;
  background-color: #FFAE42;
  color: white;
  font-size: 35px;
  margin: 0;
  justify-content: center;
  font-family: 'raleway bold', sans-serif;
}

.half-body {
  width: 430px;
  height: 499px;
  background-color: #FFAE42;
  background-image: url("/src/assets/niji_pics/obsydia/petra full body background remove.png");
  background-size: 901px 1159px;
  background-position: top;
}


p {
  display: flex;
  margin: 20px;
  font-family: 'raleway', sans-serif;
  color: white;
  justify-content: center;
  text-align: center;
}

ul {
  list-style-type: none;
}

li {
  font-family: 'raleway', sans-serif;
  padding: 5px;
}

span {
  padding-left: 58px;
}

iframe {
  padding-left: 40px;
  border: none;
}

h2 {
  display: flex;
  justify-content: center;
  border: 3px solid #0065B0;
  border-radius: 10px;
  background-color: #0065B0;
  color: white;
  font-family: 'raleway', sans-serif;
  padding: 11px 17px 11px 17px;
  /*width: 70px;*/
  margin: 50px 90px  0 90px;
}

@media screen and (width > 530px){
  section.top {
    display: flex;
  }

  h1 {
    justify-content: center;
  }

  .half-body {
    display: flex;
    background-position: top;
    /*margin-left: 400px;*/
  }

  div.intro {
    display: flex;
    flex-direction: column;
    align-content: center;
    padding-top: 50px;
  }

  p {
    background-color: #FFAE42;
    color: white;
    float: left;
    width: 300px;
  }

  ul {
    float: right;
    padding: 50px 70px 50px 50px;
  }

  iframe {
    width: 380px;
    height: 200px;
    padding: 50px 50px 0 50px;
  }

  .social-icons {
    display: flex;
    align-content: center;
    padding-left: 20px;
  }

  h2 {
    align-items: center;
    margin: 50px 300px 50px 300px;
  }
}

@media screen and (width > 1000px){
  div.intro {
    display: flex;
    padding: 50px 0 0 180px;
  }

  section.top div.half-body {
    padding: 0 60px 0 40px;
  }

  h1 {
    font-size: 50px;
  }

  p {
    width: 500px;
    font-size: 20px;
  }

  iframe {
    width: 650px;
    height: 360px;
    padding-left: 150px;
  }

  ul {
    font-size: 25px;
    padding: 70px 200px 0 0;
  }

  .social-icons {
    padding-left: 190px;
  }

  span {
    padding-left: 90px;
  }

  h2 {
    display: flex;
    align-items: center;
    margin: 50px 700px 50px 700px;
    padding: 10px 80px;
  }
}

</style>