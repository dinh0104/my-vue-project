<script setup>
import {onMounted} from "vue";
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import { useRouter } from 'vue-router';
import WorkerBios from "./WorkerBios.js";

const router = useRouter();

const workers = WorkerBios.data;

console.log(workers);

onMounted(() => {
  if (!workers) {
    router.push({
      name: 'Home'
    })
  }
})
</script>

<template>
  <primary-template>
    <div class="about-information">
    <!--<h1>ABOUT</h1>-->
    <div class="mission">
      <h2>MISSION</h2>
      <h1>A NEW MAGICAL EXPERIENCE</h1>
      <div class="mission-info">
      <p>We are changing entertainment with technology.Sending out content that is freer,
        more colorful, and deeper, we are delivering new magical experiences to the world.</p>

      <p>And farther ahead in our sights is a new Entertainment Economy.</p>

      <p>Not so far in the future, as major changes come to the way people live and work, the
        time is coming when more time will be devoted to creative activities. It will also be a
        time when the barriers between users and creators disappear, as development of an
        Entertainment Economy accelerates based on a new cycle of consuming and creating.</p>

      <p>In our role as forerunner of such a new era, we are bringing magic to the everyday
        lives of people around the world.</p>
      </div>

      <img src="/src/assets/company-img.jpg" alt="company-img"/>
    </div>

    <div class="values">
      <h1>VALUES</h1>

      <div class="values-info">
      <div class="value1">
        <h2>Being Considerate</h2>
        <p>Cooperation is the key to achieve our goals, whether playing individual or team roles.
          Start with respect for everyone involved. Next is to expand your community of supporters,
          while drawing out the capability and passion of each of them.</p>
      </div>

      <div class="value2">
        <h2>Integrity</h2>
        <p>Don’t hesitate to express your opinion and act on that conviction when you believe that
          is right. When things don’t go right, rather than making excuses, accept the results
          honestly, then analyze, and improve them. In the spirit of self-responsibility and not
          shifting blame, strive to work with integrity.</p>
      </div>

      <div class="value3">
        <h2>Take the extra step</h2>
        <p>Having fulfilled your own role, seek to achieve even higher goals. Whatever the job,
          it is always possible to go the extra mile. When that tenacity lights a fire under the
          desire for improvement, growth becomes faster.</p>
      </div>
      </div>
    </div>

      <div class="message">
        <div class="message-info">
        <h2>Message From CEO</h2>
        <p>ANYCOLOR Inc. is an entertainment startup. We produce the VTuber/Virtual Liver project
          NIJISANJI, global VTuber projects, and other new ventures. In our role as forerunner of
          a new era, we are employing the latest technology to give tangible form to people’s dreams,
          bringing magic to the everyday lives of people around the world. We describe our mission
          as "A New Magical Experience." This phrase states our desire to remove the boundaries
          between users and creators, and our thoughts on consumption and creation, from the
          standpoint of how people live and work. The common values of ANYCOLOR Inc., and the
          values we seek to give to society, are summed up as "Be Considerate," "Speak with Honesty,
          and Be Sincere with Your Actions," and "Take the Extra Step.” With these in mind, we are
          pursuing the ideal form of an entertainment company that is not bound by the traditional
          framework of the industry.</p>
        </div>

        <img src="/src/assets/ceo-img.jpg" alt="riku tazumi"/>
      </div>

      <div class="worker-info">
        <h1>Meet Our Team</h1>
        <div class="worker-grid">
          <div class="worker-card" v-for="(worker, index) in workers" :key="index">
            <h2> {{ worker.firstName}} {{worker.lastName }} </h2>
            <h3> {{worker.position }} </h3>
            <p> {{ worker.bio }} </p>
         </div>
        </div>
      </div>
    </div>

  </primary-template>
</template>

<style scoped>

.about-information {
  padding: 20px;
  h1 {
    text-align: center;
    font-family: "raleway bold", sans-serif;
    font-size: 2rem;
    color: black;
  }

  .mission {
    margin: 40px 0;
    h1 {
      text-align: left;
    }
    h2 {
      font-family: "raleway bold", sans-serif;
      text-align: left;
      font-size: 20px;
    }
    p {
      font-family: 'raleway', sans-serif;
      font-size: 15px;
    }
    img {
      width: 50%;
      height: 50%;

    }
  }

  .values {
    margin: 40px 0;
    h2 {
      font-family: 'raleway', sans-serif;
      font-size: 18px;
    }
    p {
      font-family: 'raleway', sans-serif;
    }
  }

  .message {
    margin: 20px 0;
    h2 {
      font-family: "raleway bold", sans-serif;
      font-size: 2rem;
    }
    p {
      font-family: 'raleway', sans-serif;
    }
    img {
      width: 50%;
      height: 50%;
    }
  }

  .worker-info {
    margin-top: 90px;
    .worker-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;

      .worker-card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        h2 {
          font-family: 'raleway bold', sans-serif;
        }
        h3 {
          font-family: "raleway bold", sans-serif;
        }
        p{
          font-family: 'raleway', sans-serif;
        }
      }
    }
  }
}

@media screen and (width > 530px) {
  .about-information {
    margin: 0;
    padding: 0;
    .mission {
      padding-left: 20px;
      .mission-info {
        float: left;
        width: 50%;
        p {
          display: flex;
          width: 90%;
        }
      }
      img {
        display: flex;
        width: 45%;
        height: 45%;
      }
    }

    .values {
      padding: 20px 0 60px 0;
      background-color: #0065B0;
      h1 {
        color: white;
      }
      .values-info {
        display: flex;
        color: white;
        padding: 0 20px;
        .value1 {
          width: 90%;
          padding: 0 5px 0 0;
          border-right: 2px solid white;
        }
        .value2 {
          width: 90%;
          padding: 0 5px 0 9px;
          border-right: 2px solid white;
        }
        .value3 {
          width: 90%;
          padding: 0 5px 0 9px;
        }
      }
    }

    .message {
      height: 37rem;
      .message-info {
        padding: 0 10px;
        float: right;
        width: 45%;
        h2 {
          padding: 0;
        }
        p {
          width: 90%;
        }
      }
      img {
        padding-top: 40px;
        object-fit: contain;
        width: 45%;
        height: 65%;
      }
    }
    .worker-info {
      .worker-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}

@media screen and (width > 1000px) {
  .about-information {
    h2 {
      font-size: 5rem;
    }
    .mission {
      h1 {
        font-size: 50px;
      }
      .mission-info {
        p {
          font-size: 20px;
        }
      }
      img {
        padding-left: 141px;
        width: 40%;
        height: 40%;
      }
    }
    .values {
      .values-info {
        .value1 {
          h2 {
            font-size: 25px;
          }
          p {
            font-size: 18px;
          }
        }
        .value2 {
          padding: 0 10px;
          h2 {
            font-size: 25px;
          }
          p {
            font-size: 18px;
          }
        }
        .value3 {
          padding: 0 0 0 10px;
          h2 {
            font-size: 25px;
          }
          p {
            font-size: 18px;
          }
        }
      }
    }
    .message {
      padding-bottom: 20px;
      .message-info {
        h2 {
          font-size: 50px;
        }
        p {
          font-size: 20px;
        }
      }
      img {
        width: 40%;
        height: 95%;
      }
    }
    .worker-info {
      margin-top: 140px;
      h1 {
        font-size: 50px;
      }
      .worker-grid {
        grid-template-columns: repeat(3, 1fr);
        .worker-card {
          h2 {
            font-size: 30px;
          }
        }
      }
    }
  }

}

</style>