<script setup>

import PrimaryTemplate from "../../../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <h1>Gallery</h1>
    <div class="row">
      <!--<div class="lightbox">
        <a href="#">-->
          <img src="/src/assets/niji_pics/lazulight/background remove elira portrait.png" alt="elira portrait">
        <!--</a>-->
      </div>
        <img src="/src/assets/niji_pics/lazulight/background remove fullbody.png" alt="elira full body">
        <img src="/src/assets/niji_pics/lazulight/background remove.png" alt="elira headshot">
        <img src="/src/assets/niji_pics/lazulight/Elira_Pandora_-_Key_Visual.webp" alt="elira key visual">
        <img src="/src/assets/niji_pics/lazulight/Elira_Pendora_-_April_2023_Costume.webp" alt="elira outfit4">
        <img src="/src/assets/niji_pics/lazulight/Elira_Pendora_-_January_2022_Costume.webp" alt="elira outfit2">
        <img src="/src/assets/niji_pics/lazulight/Elira_Pendora_-_October_2023_outfit.webp" alt="elira outfit3">
        <img src="/src/assets/niji_pics/lazulight/Eliref1.webp" alt="reference sheet1">
        <img src="/src/assets/niji_pics/lazulight/Eliref2.webp" alt="reference sheet2">
    <!--</div>-->
  </primary-template>
</template>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-family: "raleway bold", sans-serif;
  color: #0065B0;
}
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
}

img {
  width: 50%;
  height: 50%;
}



</style>