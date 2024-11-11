<script setup>

import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
</script>

<template>
<primary-template>
  <section class="top">
    <img src="/src/assets/icons8-back-64.png" alt="back arrow">
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
      <li>Gender: Female</li>
      <li>Age: Never ask a lady her age</li>
      <li>Birthday: October 16</li>
      <li>Height: 160 cm/5'2"</li>
      <li>Color: #95C8D8</li>
      <li>Fan name: FamElira</li>
    </ul>

    <div class="social-icons">

    </div>

    <iframe width="348" height="176" src="https://www.youtube.com/embed/nQb5s3QXFGA?si=6wfZNSsDxDEORhVW"></iframe>
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
}

.half-body {
  width: 430px;
  height: 499px;
  background-color: #95C8D8;
  background-image: url("/src/assets/niji_pics/lazulight/background remove fullbody.png");
  background-size: 901px 1159px;
  background-position: top;
}

</style>