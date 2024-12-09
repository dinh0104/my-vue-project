<script setup xmlns="http://www.w3.org/1999/html">
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";

import characters from "./characters.js";
import groups from "./groups.js";

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


    <div class="headshots">
      <div v-for="(character, index) in characters.data" :key="index">
        <router-link :to="{ name: 'StreamerDetails', params: { name: character.name.split(' ')[0].toLowerCase() } }">
          <div class="box" :class="character.name.split(' ')[0].toLowerCase()"></div>
        </router-link>
      </div>

    </div>
  </primary-template>
</template>

<style scoped>
  .headshots {
    display: flex;
    flex-wrap: wrap;
    column-count: 2;
    column-gap: 40px;
    justify-content: center;
    margin-top: 30px;
  }

  .big-nav {
    display: none;
  }

  @media screen and (width > 530px){
    .headshots {
      column-count: 4;
      margin: 10px;
    }

    .big-nav {
      display: flex;
      flex-wrap: wrap;
      column-count: 5;
      column-gap: 15px;
      justify-content: center;
      font-family: 'raleway bold', sans-serif;
      margin-top: 60px;

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
      margin: 20px 0 ;
    }

    .box:hover {
      transform: scale(1.1);
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


  }

</style>