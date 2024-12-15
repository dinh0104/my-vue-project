<script setup>
import {onMounted, ref} from "vue";
import characterFile from '../components/characters.js'
import {useRoute, useRouter} from 'vue-router';
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";

const route = useRoute();
const router = useRouter();
const characterName = route.params.name;
const character = characterFile.data.filter(character => character.name.toLowerCase().includes(characterName))[0]

console.log('character: ', character)

onMounted(() => {
  if (!character) {
    router.push({
      name: 'Home'
    })
  }
})
</script>

<template>
<primary-template>

  <section class="top" :style="'background-color: ' + character.color + ';'">
    <router-link :to="{ name: 'Home' }">
      <img src="/src/assets/svg%20icons/icons8-back-64.png" alt="back arrow">
    </router-link>

    <div class="intro" :style="'color: ' + character.textColor + ';'">
      <h1>{{ character.name }}</h1>
      <h1>{{ character.JPname }}</h1>

      <p>{{ character.bio }}</p>
      <p>{{ character.JPbio }}</p>
    </div>
    <div class="half-body" :style="'background-image: url(' + character.image + ');'"></div>

  </section>

  <section class="information">
    <ul>
      <li><b>Gender:</b> {{ character.gender }}</li>
      <li><b>Age:</b> {{ character.age }}</li>
      <li><b>Birthday:</b> {{ character.birthday }}</li>
      <li><b>Height:</b> {{ character.height }}</li>
      <li><b>Color:</b> {{ character.color }}</li>
      <li><b>Fan name:</b> {{ character.fanName }}</li>
    </ul>

    <iframe width="348" height="176" :src="character.videoUrl"></iframe>

    <div class="social-icons">
      <span><a :href="character.twitter" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" fill-rule="evenodd" clip-rule="evenodd" baseProfile="basic">
          <path fill="#212121" fill-rule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clip-rule="evenodd"/><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"/>
          <polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"/><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"/>
        </svg>
      </a></span>
      <span><a :href="character.youtube" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px">
          <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="#FFF" d="M20 31L20 17 32 24z"/>
        </svg>
      </a></span>
      <span><a :href="character.twitch" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px">
          <path fill="#7e57c2" d="M42,27.676c-3,3.441-6,6.882-9,10.324c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c-1,0-2,0-3,0	c0-2,0-4,0-6c-3.333,0-6.667,0-10,0c0-7.431,0-14.863,0-22.294C7.455,12.804,8.909,9.902,10.364,7C20.909,7,31.455,7,42,7	C42,13.892,42,20.784,42,27.676z"/><path fill="#fafafa" d="M39,26.369c-1.667,1.877-3.333,3.754-5,5.631c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c0-2,0-4,0-6	c-2.667-0.008-5.333-0.016-8-0.024c0-7.326,0-14.651,0-21.976c9,0,18,0,27,0C39,15.456,39,20.912,39,26.369z"/>
          <rect width="3" height="10" x="21" y="16" fill="#7e57c2"/><rect width="3" height="10" x="30" y="16" fill="#7e57c2"/>
        </svg>
      </a></span>
    </div>
    <router-link :to="{ name: 'StreamerGallery', params: { name: characterName } }">
      <h2>Gallery</h2>
    </router-link>
  </section>
</primary-template>
</template>

<style scoped>

section.top {
  //background-color: #95c8d8;
  padding-top: 20px;
}

img {
  width: 40px;
  height: 40px;
  padding: 0 0 0 20px;
}

svg {
  width: 45px;
  height: 45px;
  padding: 0 0 0 20px;
}

h1 {
  display: flex;
  //color: white;
  font-size: 25px;
  margin: 0;
  justify-content: center;
  font-family: 'raleway bold', sans-serif;
}

.half-body {
  width: 430px;
  height: 499px;
  background-size: 901px 1159px;
  background-position: top;
}


p {
  display: flex;
  margin: 20px;
  font-family: 'raleway', sans-serif;
  //color: white;
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
    font-size: 40px;
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