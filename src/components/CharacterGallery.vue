<script setup>

import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import {useRoute, useRouter} from "vue-router";
import characterFile from "./characters.js";
import {ref} from "vue";

const route = useRoute();
const router = useRouter();
const characterName = route.params.name;
const character = characterFile.data.filter(character => character.name.toLowerCase().includes(characterName))[0]
const gallery = character.gallery

const currentImage = ref(null); // Holds the current image being displayed
const isLightboxVisible = ref(false); // Toggle for lightbox visibility

const openLightbox = (image) => {
  currentImage.value = image;
  isLightboxVisible.value = true;
};

const closeLightbox = () => {
  isLightboxVisible.value = false;
  currentImage.value = null;
};

</script>

<template>
  <primary-template>


    <h1>{{ character.name }} Gallery</h1>

    <div class="gallery">
      <img v-for="image in gallery" :src="image" alt="gallery image" @click="openLightbox(image)"/>
    </div>
      <!--lightbox-->
    <div v-if="isLightboxVisible" class="lightbox" @click.self="closeLightbox">
      <span :style="{ backgroundImage: 'url(' + currentImage + ')' }"></span>
    </div>

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
  flex-wrap: wrap;
  margin: 0 auto;
  width: 80%;
  //flex-flow: row wrap;
  /*justify-content: center;*/
  gap: 1rem;

  img {
    width: 23%;
    height: 23%;
    //height: 100%;
  }

  a {
    width: 50%;
    height: 50%;
    padding: 0;
  }
}

/*lightbox*/

.lightbox {
  display: flex;
  align-items: center;
  justify-content: center;

  /* Full-screen overlay */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  background: rgba(0, 0, 0, 0.8);
  cursor: pointer;
}

.lightbox span {
  display: flex;
  width: 80%;
  height: 80%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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