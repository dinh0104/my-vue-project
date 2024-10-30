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
    top: 0;
    left: 0;
    background-color: #95c8d8;
    background-image: url("public/niji_pics/lazulight/background remove.png");
    background-size: 90% 100%;
    background-repeat: no-repeat;
    background-position: right;
  }

  .elira-box:hover {
    background-size: 110% 130%;
  }

  .finana-box {
    width: 131px;
    height: 125px;
    top: 0;
    left: 0;
    background-color: #79CFB8;
    background-image: url("public/niji_pics/lazulight/background remove finana.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .rosemi-box {
    width: 131px;
    height: 125px;
    top: 0;
    left: 0;
    background-color: #DC3753;
    background-image: url("public/niji_pics/obsydia/background remove rosemi.png");
    background-size: 100% 110%;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .petra-box {
    width: 131px;
    height: 125px;
    top: 0;
    left: 0;
    background-color: #FFAE42;
    background-image: url("public/niji_pics/obsydia/background remove petra.png");
    background-size: 90% 110%;
    background-repeat: no-repeat;
    background-position: bottom;
  }



</style>