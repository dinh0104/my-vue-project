<script setup xmlns="http://www.w3.org/1999/html">
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <div class="big-nav">
      <router-link :to="{ name: 'Home'}">All</router-link>
      <router-link :to="{ name: 'LazuLight'}">LazuLight</router-link>
      <router-link :to="{ name: 'Obsydia'}">Obsydia</router-link>
      <router-link :to="{ name: 'Ethyria'}">Ethyria</router-link>
      <router-link :to="{ name: 'Luxiem'}">Luxiem</router-link>
      <router-link :to="{ name: 'Noctyx'}">Noctyx</router-link>
      <router-link :to="{ name: 'Iluna'}">Iluna</router-link>
      <router-link :to="{ name: 'Xsoleil'}">Xsoleil</router-link>
      <router-link :to="{ name: 'Krisis'}">Krisis</router-link>
      <router-link :to="{ name: 'TTT'}">TTT</router-link>
      <router-link :to="{ name: 'Denauth'}">Denauth</router-link>
    </div>

    <router-link :to="{ name: 'Home' }">
      <img src="/src/assets/svg%20icons/icons8-back-64.png" alt="back button">
    </router-link>


    <h2>TTT</h2>

    <div class="headshots">
      <router-link :to="{ name: 'VictoriaBrightshield'}">
        <div class="vivi box"></div>
      </router-link>

      <router-link :to="{ name: 'ClaudeClawmark'}">
        <div class="claude box"></div>
      </router-link>
    </div>

    <div class="bio-text">
      <p>TTT (pronounced "Triple T") is abbreviated from the first 3 words of the group
        name, "These Three Troublemaking Adventurers from Another World are Actually a
        Comedy Troupe?!" They debuted on 27 October 2023. Unlike previous NIJISANJI EN
        waves, and similar to more recent NIJISANJI waves from 2023 and prior to 2022, it
        didn't feature a debut song (instead having a theme song sang by EN Livers) and
        it had no official unit name with a logo prior to debut, instead having an
        unofficial name like older and 2023 debuts in NIJISANJI.</p>
    </div>
    <div class="vid-content">
      <iframe width="325" height="164" src="https://www.youtube.com/embed/JebSygojkM4?si=kPW16tswGFrCp_46"></iframe>
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

.vivi {
  width: 131px;
  height: 125px;
  margin: 10px 0 10px 0;
  background-color: #D7D2EB;
  background-image: url("src/assets/niji_pics/ttt/victoria/background remove vivi.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.claude {
  width: 131px;
  height: 125px;
  margin: 10px 0 10px 0;
  background-color: #7D3CAF;
  background-image: url("src/assets/niji_pics/ttt/claude/background remove claude.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
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