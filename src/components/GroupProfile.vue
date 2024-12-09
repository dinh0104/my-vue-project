<script setup xmlns="http://www.w3.org/1999/html">
import {onMounted} from "vue";
import {useRoute, useRouter} from 'vue-router';
import characters from "./characters.js";
import groups from "./groups.js";
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";

const route = useRoute();
const router = useRouter();

const groupName = route.params.name;
const group = groups.data.find(group => group.name.toLowerCase().includes(groupName.toLowerCase()))

console.log('groupName from route:', groupName);
console.log('group:', group)

onMounted(() => {
  if (!group) {
    router.push({
      name: 'Home'
    })
  }
})

</script>

<template>
  <primary-template>
    <div class="big-nav">
      <router-link :to="{ name: 'Home'}">All</router-link>
      <router-link v-for="group in groups.data" :key="group.name"
                   :to="{ name: 'GroupDetails', params: { name: group.name } }">
        {{ group.name }}
      </router-link>
    </div>

    <router-link :to="{ name: 'Home' }">
      <img src="/src/assets/icons8-back-64.png" alt="back button">
    </router-link>

    <h2>{{ group.name }}</h2>

    <div class="headshots">
      <div v-for="(character, index) in characters.data" :key="index">
        <router-link :to="{ name: 'StreamerDetails', params: { name: character.name.split(' ')[0].toLowerCase() } }">
          <div class="box" :class="character.name.split(' ')[0].toLowerCase()"></div>
        </router-link>
      </div>

    </div>

    <div class="bio-text">
      <p>{{ group.bio }}</p>
    </div>
    <div class="vid-content" v-if="group.videoUrl">
      <iframe width="325" height="164" :src="group.videoUrl"></iframe>
    </div>
  </primary-template>
</template>

<style scoped>
img {
  width: 40px;
  height: 40px;
  margin: 20px;
}

.vid-content {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

h2 {
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  font-family: "raleway bold", sans-serif;
  margin: 100px 0 50px 0;
}

.headshots {
  display: flex;
  flex-wrap: wrap;
  column-count: 1;
  column-gap: 40px;
  justify-content: center;
  margin-top: 30px;
}

.elira {
  width: 131px;
  height: 125px;
  margin: 10px 0 10px 0;
  background-color: #95c8d8;
  background-image: url("../assets/niji_pics/lazulight/background-remove.png");
  background-size: 90% 100%;
  background-repeat: no-repeat;
  background-position: right;
}

.finana {
  width: 131px;
  height: 125px;
  margin: 10px 0 10px 0;
  background-color: #79CFB8;
  background-image: url("../assets/niji_pics/lazulight/background-remove-finana.png");
  background-size: 100% 110%;
  background-repeat: no-repeat;
  background-position: bottom;
}


p {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 30px;
  font-family: 'raleway', sans-serif;
}

.big-nav {
  display: none;
}

@media screen and (width > 530px) {
  img {
    display: none;
  }

  .headshots {
    column-count: 4;
    margin: 10px;
  }

  ul {
    padding-left: 230px;
  }

  li {
    padding: 0 46px 0 40px;
  }

  .big-nav {
    display: flex;
    flex-wrap: wrap;
    column-count: 5;
    column-gap: 15px;
    justify-content: center;
    font-family: 'raleway bold', sans-serif;

    a {
      border: 3px solid #0065B0;
      border-radius: 10px;
      color: #0065B0;
      text-decoration: none;
      margin: 10px 0;
      padding: 11px 57px 11px 57px;

      &:hover {
        background-color: #0065B0;
        color: white;
      }
    }
  }


  .box {
    width: 148px;
    height: 143px;
    margin: 20px 0;
  }

  .box:hover {
    transform: scale(1.1);
  }

  iframe {
    width: 376px;
    height: 200px;
  }
}

@media screen and (width > 1000px) {
  .headshots {
    column-count: 5;
    column-gap: 40px;
    margin: 20px 180px 20px 180px;
  }

  .box {
    width: 190px;
    height: 184px;
  }

  .box:hover {
    transform: scale(1.1);
  }

  .big-nav {
    column-gap: 26px;
    margin: 60px 250px 20px 250px;
  }

  .bio-text {
    margin: 0 300px;
  }

  iframe {
    width: 476px;
    height: 250px;
  }

}

</style>