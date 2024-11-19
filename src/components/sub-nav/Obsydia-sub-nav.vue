<script setup xmlns="http://www.w3.org/1999/html">
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <div class="big-nav">
      <router-link :to="{ name: 'Home'}">All</router-link>
      <router-link :to="{ name: 'LazuLight'}">LazuLight</router-link>
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


    <h2>Obsydia</h2>

    <div class="headshots">
      <router-link :to="{ name: 'RosemiLovelock' }">
        <div class="rosemi box"></div>
      </router-link>

      <router-link :to="{ name: 'PetraGurin'}">
        <div class="petra box"></div>
      </router-link>
    </div>

    <div class="bio-text">
      <p>Debuted on 17 July 2021, OBSYDIA is a dark counterpart to LazuLight,
        featuring similar fantasy motifs and mirroring its earth-sea-sky trichotomy.
        OBSYDIA's name is derived from obsidian, a black volcanic glass.</p>
    </div>
    <div class="vid-content">
      <iframe width="325" height="164" src="https://www.youtube.com/embed/D-V0EHF30rk?si=zzp2IxHjNi_b7UXl"></iframe>
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

.petra {
  width: 131px;
  height: 125px;
  margin: 10px 0 10px 0;
  background-color: #FFAE42;
  background-image: url("src/assets/niji_pics/obsydia/background remove petra.png");
  background-size: 90% 110%;
  background-repeat: no-repeat;
  background-position: bottom;
}

.rosemi {
  width: 131px;
  height: 125px;
  margin: 10px 0 10px 0;
  background-color: #DC3753;
  background-image: url("src/assets/niji_pics/obsydia/background remove rosemi.png");
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