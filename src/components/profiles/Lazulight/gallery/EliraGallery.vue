<script setup>

import PrimaryTemplate from "../../../../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <div class="back-button">
      <router-link :to="{ name: 'EliraPendora' }">
        <img src="/src/assets/icons8-back-64.png" alt="back icon">
      </router-link>
    </div>

    <h1>Gallery</h1>

    <div class="gallery">
      <a href="#img1">
        <img src="/src/assets/niji_pics/lazulight/background%20remove%20elira%20portrait.png" alt="elira portrait">
      </a>
      <a href="#img2">
        <img src="/src/assets/niji_pics/lazulight/background%20remove%20fullbody.png" alt="elira full body">
      </a>
      <a href="#img3">
        <img src="/src/assets/niji_pics/lazulight/background%20remove.png" alt="elira headshot">
      </a>
      <a href="#img4">
        <img src="/src/assets/niji_pics/lazulight/Elira_Pandora_-_Key_Visual.webp" alt="elira key visual">
      </a>
      <a href="#img5">
        <img src="/src/assets/niji_pics/lazulight/Elira_Pendora_-_April_2023_Costume.webp" alt="elira outfit4">
      </a>
      <a href="#img6">
        <img src="/src/assets/niji_pics/lazulight/Elira_Pendora_-_January_2022_Costume.webp" alt="elira outfit2">
      </a>
      <a href="#img7">
        <img src="/src/assets/niji_pics/lazulight/Elira_Pendora_-_October_2023_outfit.webp" alt="elira outfit3">
      </a>
      <a href="#img8">
        <img src="/src/assets/niji_pics/lazulight/Eliref1.webp" alt="reference sheet1">
      </a>
      <a href="#img9">
        <img src="/src/assets/niji_pics/lazulight/Eliref2.webp" alt="reference sheet2">
      </a>
    </div>
      <!--lightbox-->
      <a href="#" class="lightbox" id="img1">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/background remove elira portrait.png')"></span>
      </a>
      <a href="#" class="lightbox" id="img2">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/background remove fullbody.png')"></span>
      </a>
      <a href="#" class="lightbox" id="img3">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/background remove.png')"></span>
      </a>
      <a href="#" class="lightbox" id="img4">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/Elira_Pandora_-_Key_Visual.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img5">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/Elira_Pendora_-_April_2023_Costume.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img6">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/Elira_Pendora_-_January_2022_Costume.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img7">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/Elira_Pendora_-_October_2023_outfit.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img8">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/Eliref1.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img9">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/Eliref2.webp')"></span>
      </a>

  </primary-template>
</template>

<style scoped>
.back-button {
  display: flex;

  img {
    width: 40px;
    height: 40px;
    margin: 20px 0 0 20px;
  }
}

h1 {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-family: "raleway bold", sans-serif;
  color: #0065B0;
}

.gallery {
  display: flex;
  flex-flow: row wrap;
  /*justify-content: center;*/
  padding: 30px;

  img {
    width: 100%;
    height: 100%;
  }

  a {
    width: 50%;
    height: 50%;
    padding: 0;
  }
}

/*lightbox*/

.lightbox {
  /* make hidden */
  display: none;

  /* Overlay entire screen */
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* padding around image */
  padding: 1em;

  /* background */
  background: rgba(0, 0, 0, 0.8);
}

/* Unhide the lightbox */
.lightbox:target {
  display: flex;
}

.lightbox span {
  /* Full width and height */
  display: flex;
  width: 100%;
  height: 100%;

  /* Size and position background image */
  background: no-repeat center;
  background-size: contain;
}

@media screen and (width > 530px) {
  h1 {
    font-size: 2.5rem;
  }

  .gallery {
    padding: 50px;

    a {
      width: 33%;
      height: 33%;
    }

  }

}

@media screen and (width > 1000px) {
  .back-button {
    display: flex;

    img {
      width: 50px;
      height: 50px;
      margin: 30px;
    }
  }

  h1 {
    font-size: 3rem;
  }

  .gallery {
    padding: 70px;

    a {
      width: 20%;
      height: 20%;
    }

  }
}


</style>