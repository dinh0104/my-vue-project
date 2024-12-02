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
      <h1>Ver Vermillion</h1>
      <h1>ヴェール ヴァーミリオン</h1>
      <p>XSOLEIL Institute of Infinity 3rd Year.
        President of the Student Council who is veiled in charisma and mystery.
        He can look into your very soul and read your future.</p>

      <p>XSOLEIL Institute of Infinity 3年目。
        カリスマ性と謎に包まれた生徒会長。
        神はあなたの魂そのものを調べ、あなたの未来を読むことができます。</p>
    </div>
    <div class="half-body"></div>
  </section>

  <section class="information">
    <ul>
      <li><b>Gender:</b> Male</li>
      <li><b>Age:</b> 94</li>
      <li><b>Birthday:</b> August 25</li>
      <li><b>Height:</b> 173 cm/5'8"</li>
      <li><b>Color:</b> #D5345E</li>
      <li><b>Fan name:</b> Villions</li>
    </ul>

    <iframe width="348" height="176" src="https://www.youtube.com/embed/UmASg4svodc?si=VFkQ4HB9x7vIk-Ez"></iframe>

    <div class="social-icons">
      <span><a href="twitter.com/D_Dropscythe"><img src="/src/assets/icons8-twitterx.svg" alt="twitter/x icon"></a></span>
      <span><a href="https://www.youtube.com/@DoppioDropscythe"><img src="/src/assets/icons8-youtube.svg" alt="youtube icon"></a></span>
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
  background-color: #D5345E;
  padding-top: 20px;
}

img {
  width: 40px;
  height: 40px;
  padding: 0 0 0 20px;
}

h1 {
  display: flex;
  background-color: #D5345E;
  color: white;
  font-size: 35px;
  margin: 0;
  justify-content: center;
  font-family: 'raleway bold', sans-serif;
}

.half-body {
  width: 430px;
  height: 499px;
  background-color: #D5345E;
  background-image: url("/src/assets/niji_pics/xsoleil/ver/ver full body background remove.png");
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

.information {

  ul {
    list-style-type: none;
  }

  li {
    font-family: 'raleway', sans-serif;
    padding: 5px;
  }
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
    background-color: #D5345E;
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