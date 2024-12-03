<script setup>

import PrimaryTemplate from "../../../../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <div class="back-button">
      <router-link :to="{ name: 'FinanaRyugu' }">
        <img src="/src/assets/icons8-back-64.png" alt="back icon">
      </router-link>
    </div>

    <h1>Gallery</h1>

    <div class="gallery">
      <a href="#img1">
        <img src="/src/assets/niji_pics/lazulight/Finana_Ryugu_Portrait.webp" alt="finana portrait">
      </a>
      <a href="#img2">
        <img src="/src/assets/niji_pics/lazulight/finana%20full%20body%20background%20remove.png" alt="finana full body">
      </a>
      <a href="#img3">
        <img src="/src/assets/niji_pics/lazulight/background%20remove%20finana.png" alt="finana headshot">
      </a>
      <a href="#img4">
        <img src="/src/assets/niji_pics/lazulight/Finana_Ryugu_-_Key_Visual.webp" alt="finana key visual">
      </a>
      <a href="#img5">
        <img src="/src/assets/niji_pics/lazulight/Finana_Ryugu_-_January_2022_Costume.webp" alt="finana outfit1">
      </a>
      <a href="#img6">
        <img src="/src/assets/niji_pics/lazulight/Finana_Ryugu_-_February_2023_Outfit.webp" alt="finana outfit2">
      </a>
      <a href="#img7">
        <img src="/src/assets/niji_pics/lazulight/FinaRef1.webp" alt="reference sheet1">
      </a>
      <a href="#img8">
        <img src alt="reference sheet2">
      </a>
    </div>
      <!--lightbox-->
      <a href="#" class="lightbox" id="img1">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/Finana_Ryugu_Portrait.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img2">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/finana full body background remove.png')"></span>
      </a>
      <a href="#" class="lightbox" id="img3">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/background remove finana.png')"></span>
      </a>
      <a href="#" class="lightbox" id="img4">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/Finana_Ryugu_-_Key_Visual.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img5">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/Finana_Ryugu_-_January_2022_Costume.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img6">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/Finana_Ryugu_-_February_2023_Outfit.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img7">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/FinaRef1.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img8">
        <span style="background-image:url('/src/assets/niji_pics/lazulight/FinaRef2.webp')"></span>
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