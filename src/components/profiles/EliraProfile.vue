<script setup>

import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
</script>

<template>
<primary-template>
  <section class="top">
    <a href="#"><img src="/src/assets/icons8-back-64.png" alt="back arrow"></a>
    <h1>Elira Pendora</h1>
    <h1>エリーラ ペンドラ</h1>
    <div class="half-body"></div>
  </section>

  <section class="information">
    <p>A sky dragon who came from the heavens closest to the sun. She has the kindness
      and receptiveness that makes the light of a sunny day fall equally on all.</p>

    <p>太陽に最も近い天空からやって来た天空竜。彼女は、晴れた日の光を誰にでも平等に当て
      る優しさと包容力を持っています。</p>

    <ul>
      <li><b>Gender:</b> Female</li>
      <li><b>Age:</b> Never ask a lady her age</li>
      <li><b>Birthday:</b> October 16</li>
      <li><b>Height:</b> 160 cm/5'2"</li>
      <li><b>Color:</b> #95C8D8</li>
      <li><b>Fan name:</b> FamElira</li>
    </ul>

    <iframe width="348" height="176" src="https://www.youtube.com/embed/nQb5s3QXFGA?si=6wfZNSsDxDEORhVW"></iframe>

    <div class="social-icons">
      <span><a href="https://x.com/EliraPendora"><img src="/src/assets/icons8-twitterx.svg" alt="twitter/x icon"></a></span>
      <span><a href="https://www.youtube.com/channel/UCIeSUTOTkF9Hs7q3SGcO-Ow"><img src="/src/assets/icons8-youtube.svg" alt="youtube icon"></a></span>
      <span><a href="https://www.twitch.tv/elirapendora"><img src="/src/assets/icons8-twitch.svg" alt="twitch icon"></a></span>
    </div>
  </section>
</primary-template>
</template>

<style scoped>

section.top {
  background-color: #95c8d8;
  padding-top: 20px;
}

img {
  width: 40px;
  height: 40px;
  padding: 0 0 0 20px;
}

h1 {
  display: flex;
  background-color: #95c8d8;
  color: white;
  font-size: 35px;
  margin: 0;
  justify-content: center;
  font-family: 'raleway bold', sans-serif;
}

.half-body {
  width: 430px;
  height: 499px;
  background-color: #95C8D8;
  background-image: url("/src/assets/niji_pics/lazulight/background remove fullbody.png");
  background-size: 901px 1159px;
  background-position: top;
}


p {
  display: flex;
  margin: 20px;
  font-family: 'raleway', sans-serif;
  justify-content: center;
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
}

</style>