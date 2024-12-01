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
      <h1>Uki Violeta</h1>
      <h1>浮奇ヴィオレタ</h1>
      <p>A sorcerer from the past with mysterious abilities.
        Though kind-hearted, he can call down a
        malediction upon those who wrong him.</p>

      <p>過去からやってきた不思議な力を持つ呪術師
        穏やかな性格の持ち主だが、自分に危害を加えよう
        とする者には容赦なく呪いをかけてしまう</p>
    </div>
    <div class="half-body"></div>
  </section>

  <section class="information">
    <ul>
      <li><b>Gender:</b> Male</li>
      <li><b>Age:</b> Doesn't matter anymore</li>
      <li><b>Birthday:</b> July 17</li>
      <li><b>Height:</b> 169 cm/5'6"</li>
      <li><b>Color:</b> #B600FF</li>
      <li><b>Fan name:</b> Stargazers</li>
    </ul>

    <iframe width="348" height="176" src="https://www.youtube.com/embed/2X39X6ln3BE?si=87_h3_fiOVpFcj-R"></iframe>

    <div class="social-icons">
      <span><a href="twitter.com/uki_violeta"><img src="/src/assets/icons8-twitterx.svg" alt="twitter/x icon"></a></span>
      <span><a href="https://www.youtube.com/@UkiVioleta"><img src="/src/assets/icons8-youtube.svg" alt="youtube icon"></a></span>
      <span><a href="https://www.twitch.tv/nijisanji_en"><img src="/src/assets/icons8-twitch.svg" alt="twitch icon"></a></span>
    </div>
    <router-link :to="{ name: 'PetraGallery' }">
      <h2>Gallery</h2>
    </router-link>
  </section>
</primary-template>
</template>

<style scoped>

section.top {
  background-color: #B600FF;
  padding-top: 20px;
}

img {
  width: 40px;
  height: 40px;
  padding: 0 0 0 20px;
}

h1 {
  display: flex;
  background-color: #B600FF;
  color: white;
  font-size: 35px;
  margin: 0;
  justify-content: center;
  font-family: 'raleway bold', sans-serif;
}

.half-body {
  width: 430px;
  height: 499px;
  background-color: #B600FF;
  background-image: url("/src/assets/niji_pics/noctyx/uki/uki fuull body background remove.png");
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
    background-color: #B600FF;
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