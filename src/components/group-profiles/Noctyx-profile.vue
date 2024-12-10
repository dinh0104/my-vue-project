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


    <h2>Noctyx</h2>

    <div class="headshots">
      <router-link :to="{ name: 'AlbanKnox'}">
        <div class="alban box"></div>
      </router-link>

      <router-link :to="{ name: 'FulgurOvid'}">
        <div class="fulgur box"></div>
      </router-link>

      <router-link :to="{ name: 'SonnyBrisko'}">
        <div class="sonny box"></div>
      </router-link>

      <router-link :to="{ name: 'UkiVioleta'}">
        <div class="uki box"></div>
      </router-link>
    </div>

    <div class="bio-text">
      <p>Debuted on 27 February 2022, Noctyx is a dark, future-themed counterpart to
        Luxiem. In lore, its members originally come from the future. Noctyx's name
        may be derived from noct, the Latin word for night, and Nyx, the Greek goddess
        of the night.</p>
    </div>
    <div class="vid-content">
      <iframe width="325" height="164" src="https://www.youtube.com/embed/ySSUTOGO-3M?si=kbeAAMG060Ojf1ms"></iframe>
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

.alban {
  width: 131px;
  height: 125px;
  margin: 10px 0 10px 0;
  background-color: #FF5F00;
  background-image: url("../../assets/niji_pics/noctyx/alban/background-remove-alban.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.fulgur {
  width: 131px;
  height: 125px;
  margin: 10px 0 10px 0;
  background-color: #FF0000;
  background-image: url("../../assets/niji_pics/noctyx/fulgur/background-remove-fulgur.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.sonny {
  width: 131px;
  height: 125px;
  margin: 10px 0 10px 0;
  background-color: #FFF321;
  background-image: url("../../assets/niji_pics/noctyx/sonny/background-remove-sonny.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.uki {
  width: 131px;
  height: 125px;
  margin: 10px 0 10px 0;
  background-color: #B600FF;
  background-image: url("../../assets/niji_pics/noctyx/uki/background-remove-uki.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
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