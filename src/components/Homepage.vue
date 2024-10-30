<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <div class="headshots">
      <div class="elira">
        <div class="elira-box"></div>
      </div>

      <div class="finana">
        <div class="finana-box"></div>
      </div>

      <div class="rosemi">
        <div class="rosemi-box"></div>
      </div>

      <div class="petra">
        <div class="petra-box"></div>
      </div>

      <div class="enna">
        <div class="enna-box"></div>
      </div>

      <div class="millie">
        <div class="millie-box"></div>
      </div>

      <div class="reimu">
        <div class="reimu-box"></div>
      </div>

      <div class="ike">
        <div class="ike-box"></div>
      </div>

      <div class="luca">
        <div class="luca-box"></div>
      </div>

      <div class="shu">
        <div class="shu-box"></div>
      </div>

      <div class="vox">
        <div class="vox-box"></div>
      </div>

    </div>
  </primary-template>
</template>

<style scoped>
  img {
    max-width: 30%;
  }

  .headshots {
    display: flex;
    flex-wrap: wrap;
    column-count: 2;
    column-gap: 50px;
    justify-content: center;
  }

  .elira-box {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #95c8d8;
    background-image: url("public/niji_pics/lazulight/background remove.png");
    background-size: 90% 100%;
    background-repeat: no-repeat;
    background-position: right;
  }

  .finana-box {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #79CFB8;
    background-image: url("public/niji_pics/lazulight/background remove finana.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .rosemi-box {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #DC3753;
    background-image: url("public/niji_pics/obsydia/background remove rosemi.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .petra-box {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #FFAE42;
    background-image: url("public/niji_pics/obsydia/background remove petra.png");
    background-size: 90% 110%;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .enna-box {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #858ED1;
    background-image: url("public/niji_pics/ethyria/enna/background remove enna.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
  }

  .millie-box {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #858ED1;
    background-image: url("public/niji_pics/ethyria/millie/background remove millie.png");
    background-size: 100% 140%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .reimu-box {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #B90B4A;
    background-image: url("public/niji_pics/ethyria/reimu/background remove reimu.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
  }

  .ike-box {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #348EC7;
    background-image: url("public/niji_pics/luxiem/ike/background remove ike.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
  }

  .luca-box {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #D4AF37;
    background-image: url("public/niji_pics/luxiem/luca/background remove luca.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
  }

  .shu-box {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #A660A7;
    background-image: url("public/niji_pics/luxiem/shu/background remove shu.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
  }

  .vox-box {
    width: 131px;
    height: 125px;
    margin: 10px 0 10px 0;
    background-color: #960018;
    background-image: url("public/niji_pics/luxiem/vox/background remove vox.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
  }

</style>