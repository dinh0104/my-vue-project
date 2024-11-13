<script setup xmlns="http://www.w3.org/1999/html">
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
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
    <div class="headshots">
      
      <router-link :to="{ name: 'EliraPendora' }">
      <div class="elira box"></div>
      </router-link>

      <div class="finana box"></div>

      <div class="rosemi box"></div>

      <div class="petra box"></div>

      <div class="enna box"></div>

      <div class="millie box"></div>

      <div class="reimu box"></div>

      <div class="ike box"></div>

      <div class="luca box"></div>

      <div class="shu box"></div>

      <div class="vox box"></div>

      <div class="alban box"></div>

      <div class="fulgur box"></div>

      <div class="sonny box"></div>

      <div class="uki box"></div>

      <div class="aia box"></div>

      <div class="aster box"></div>

      <div class="maria box"></div>

      <div class="ren box"></div>

      <div class="scarle box"></div>

      <div class="doppio box"></div>

      <div class="kotoka box"></div>

      <div class="meloco box"></div>

      <div class="ver box"></div>

      <div class="vanta box"></div>

      <div class="zali box"></div>

      <div class="wilson box"></div>

      <div class="vivi box"></div>

      <div class="claude box"></div>

      <div class="klara box"></div>

      <div class="ryoma box"></div>

      <div class="twisty box"></div>

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

  .elira {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #95c8d8;
    background-image: url("src/assets/niji_pics/lazulight/background remove.png");
    background-size: 90% 100%;
    background-repeat: no-repeat;
    background-position: right;
  }

  .finana {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #79CFB8;
    background-image: url("src/assets/niji_pics/lazulight/background remove finana.png");
    background-size: 100% 110%;
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

  .enna {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #858ED1;
    background-image: url("src/assets/niji_pics/ethyria/enna/background remove enna.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
  }

  .millie {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #858ED1;
    background-image: url("src/assets/niji_pics/ethyria/millie/background remove millie.png");
    background-size: 100% 140%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .reimu {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #B90B4A;
    background-image: url("src/assets/niji_pics/ethyria/reimu/background remove reimu.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
  }

  .ike {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #348EC7;
    background-image: url("src/assets/niji_pics/luxiem/ike/background remove ike.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
  }

  .luca {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #D4AF37;
    background-image: url("src/assets/niji_pics/luxiem/luca/background remove luca.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
  }

  .shu {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #A660A7;
    background-image: url("src/assets/niji_pics/luxiem/shu/background remove shu.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
  }

  .vox {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #960018;
    background-image: url("src/assets/niji_pics/luxiem/vox/background remove vox.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .alban {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #FF5F00;
    background-image: url("src/assets/niji_pics/noctyx/alban/background remove alban.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .fulgur {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #FF0000;
    background-image: url("src/assets/niji_pics/noctyx/fulgur/background remove fulgur.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .sonny {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #FFF321;
    background-image: url("src/assets/niji_pics/noctyx/sonny/background remove sonny.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .uki {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #B600FF;
    background-image: url("src/assets/niji_pics/noctyx/uki/background remove uki.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .aia {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #FFFEF7;
    background-image: url("src/assets/niji_pics/iluna/aia/background remove aia.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    outline: 1px solid darkgray;
  }

  .aster {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #6662A4;
    background-image: url("src/assets/niji_pics/iluna/aster/background remove aster.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .maria {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #E55A9B;
    background-image: url("src/assets/niji_pics/iluna/maria/background remove maria.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .ren {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #429B76;
    background-image: url("src/assets/niji_pics/iluna/ren/background remove ren.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .scarle {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #E60012;
    background-image: url("src/assets/niji_pics/iluna/scarle/background remove scarle.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .doppio {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #A50082;
    background-image: url("src/assets/niji_pics/xsoleil/doppio/background remove doppio.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .kotoka {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #DC6B9A;
    background-image: url("src/assets/niji_pics/xsoleil/kotoka/background remove kotoka.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .meloco {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #A09BD8;
    background-image: url("src/assets/niji_pics/xsoleil/meloco/background remove meloco.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .ver {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #D5345E;
    background-image: url("src/assets/niji_pics/xsoleil/ver/background remove ver.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .vanta {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #8728E1;
    background-image: url("src/assets/niji_pics/krisis/vantacrow/background remove vanta.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .zali {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #C34196;
    background-image: url("src/assets/niji_pics/krisis/vezalius/background remove zali.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .wilson {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #F5EB28;
    background-image: url("src/assets/niji_pics/krisis/wilson/background remove wilson.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
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

  .klara {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #DFCDBF;
    background-image: url("src/assets/niji_pics/denauth/klara/background remove klara.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .ryoma {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #952D22;
    background-image: url("src/assets/niji_pics/denauth/ryoma/background remove ryoma.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .twisty {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #78ECD5;
    background-image: url("src/assets/niji_pics/denauth/twisty/background remove twisty.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
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