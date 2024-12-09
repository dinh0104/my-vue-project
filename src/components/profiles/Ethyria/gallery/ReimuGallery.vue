<script setup>

import PrimaryTemplate from "../../../../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <div class="back-button">
      <router-link :to="{ name: 'ReimuEndou' }">
        <img src="/src/assets/icons8-back-64.png" alt="back icon">
      </router-link>
    </div>

    <h1>Gallery</h1>

    <div class="gallery">
      <a href="#img1">
        <img src="/src/assets/niji_pics/ethyria/reimu/Reimu_Endou_Portrait.webp" alt="enna portrait">
      </a>
      <a href="#img2">
        <img src="/src/assets/niji_pics/ethyria/reimu/reimu-full-body-background-remove.png" alt="enna full body">
      </a>
      <a href="#img3">
        <img src="/src/assets/niji_pics/ethyria/reimu/background-remove-reimu.png" alt="enna headshot">
      </a>
      <a href="#img4">
        <img src="/src/assets/niji_pics/ethyria/reimu/Reimu_Endou_Queen_of_Hearts_Outfit.webp" alt="outfit1">
      </a>
      <a href="#img5">
        <img src="/src/assets/niji_pics/ethyria/reimu/Reimu_Endou_Reference_Sheet.webp" alt="reference sheet1">
      </a>
      <a href="#img6">
        <img src="/src/assets/niji_pics/ethyria/reimu/Reimu_Endou_Queen_of_Heart_Outfit_Reference_Sheet.webp" alt="reference sheet2">
      </a>
      <a href="#img7">
        <img src="/src/assets/niji_pics/ethyria/reimu/Reimu_Endou_Lace_Nightwear_Ghost_Reference_Sheet.webp" alt="reference sheet3">
      </a>
      <a href="#img8">
        <img src="/src/assets/niji_pics/ethyria/reimu/Reimu_Endou_zutto%253Fo_Summer_Ghost_Outfit_Reference_Sheet.webp" alt="reference sheet4">
      </a>
      <a href="#img9">
        <img src="/src/assets/niji_pics/ethyria/enna/Enna_Alouette_Reference_Sheet.webp" alt="reference sheet2">
      </a>
    </div>
      <!--lightbox-->
      <a href="#" class="lightbox" id="img1">
        <span style="background-image:url('/src/assets/niji_pics/ethyria/reimu/Reimu_Endou_Portrait.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img2">
        <span style="background-image:url('/src/assets/niji_pics/ethyria/reimu/background-remove-reimu.png')"></span>
      </a>
      <a href="#" class="lightbox" id="img3">
        <span style="background-image:url('/src/assets/niji_pics/ethyria/reimu/Reimu_Endou_Queen_of_Hearts_Outfit.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img4">
        <span style="background-image:url('/src/assets/niji_pics/ethyria/reimu/Reimu_Endou_Reference_Sheet.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img5">
        <span style="background-image:url('/src/assets/niji_pics/ethyria/reimu/Reimu_Endou_Queen_of_Heart_Outfit_Reference_Sheet.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img6">
        <span style="background-image:url('/src/assets/niji_pics/ethyria/reimu/Reimu_Endou_Lace_Nightwear_Ghost_Reference_Sheet.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img7">
        <span style="background-image:url('/src/assets/niji_pics/ethyria/reimu/Reimu_Endou_zutto%3Fo_Summer_Ghost_Outfit_Reference_Sheet.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img8">
        <span style="background-image:url('/src/assets/niji_pics/ethyria/enna/Enna_Alouette_Ref_Sheet_New_2.webp')"></span>
      </a>
      <a href="#" class="lightbox" id="img9">
        <span style="background-image:url('/src/assets/niji_pics/ethyria/enna/Enna_Alouette_Reference_Sheet.webp')"></span>
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