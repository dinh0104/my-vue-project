<script setup xmlns="http://www.w3.org/1999/html">
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <div class="big-nav">
      <router-link :to="{ name: 'Home'}">All</router-link>
      <a href="#">LazuLight</a>
      <a href="#">Obsydia</a>
      <a href="#">Ethyria</a>
      <a href="#">Luxiem</a>
      <a href="#">Noctyx</a>
      <a href="#">Iluna</a>
      <a href="#">Xsoleil</a>
      <a href="#">Krisis</a>
      <a href="#">TTT</a>
      <a href="#">Denauth</a>
    </div>

    <img src="/src/assets/icons8-back-64.png" alt="back button">

    <h2>LazuLight</h2>

    <div class="headshots">
      <router-link :to="{ name: 'EliraPendora' }">
        <div class="elira box"></div>
      </router-link>

      <router-link :to="{ name: 'FinanaRyugu' }">
        <div class="finana box"></div>
      </router-link>
    </div>

    <div class="bio-text">
      <p>Debuted on 16 May 2021, LazuLight is the first wave of NIJISANJI EN.
      Each member is a fantasy creature associated with a different part of nature:
      earth, sea, or sky.</p>

      <p>LazuLight's name is derived from lazulite, a blue-green gemstone, and light.
      The use of lazulite comes from LazuLight's blue and green color schemes, as well
      as to indicate that LazuLight's members are "precious" like gemstones.</p>
    </div>

    <iframe width="325" height="164" src="https://www.youtube.com/embed/ZnP0cKNPE04?si=cc0X4Q8ZUHsFRcdD"></iframe>
  </primary-template>
</template>

<style scoped>
  img {
    width: 40px;
    height: 40px;
    margin: 20px;
  }

  h2 {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-family: "raleway bold", sans-serif;
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
    background-image: url("../../assets/niji_pics/lazulight/background remove.png");
    background-size: 90% 100%;
    background-repeat: no-repeat;
    background-position: right;
  }

  .finana {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #79CFB8;
    background-image: url("../../assets/niji_pics/lazulight/background remove finana.png");
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

  iframe {
    display: flex;
    justify-items: center;
    /*margin: 0 50px;*/
  }

  .big-nav {
    display: none;
  }

  @media screen and (width > 530px){
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
      /*margin-left: 240px;*/
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
      /*margin-left: 500px;*/
    }

  }

</style>