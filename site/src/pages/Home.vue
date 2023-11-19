<script setup lang="ts">
import { ref } from 'vue';

const isTrick = ref(false);
const lastTrick = ref('');

const tricks = [
  'ollie',
  'kickflip',
  'big-ollie',
  'shove-it-180',
  'shove-it-360',
  'ollie-nose-slide',
  'varial-kickflip',
  'laserflip',
  'nollie-heel-slide',
];

const doTrick = () => {
  let trick = '';
  
  do {
    const rando = Math.floor(Math.random() * tricks.length);
    trick = tricks[rando];
  } while (trick === lastTrick.value);

  lastTrick.value = trick;
  isTrick.value = !isTrick.value;

  const logo = document.querySelector('.logo');
  if (logo) {
    logo.classList.remove(...tricks);
    logo.classList.add(trick);
  }
};


</script>

<template>
  <div class="wrapper">
    <div class="drop-in">
      <div class="logo" :class="{ '': isTrick }" @click="doTrick">
        <img src="../assets/svg/logo.svg" class="logo-svg">
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  p {
    font-family: 'Bebas Neue';
    font-size: clamp(1rem, 10vw, 2rem);
    margin: 0;
  }
  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .drop-in {
    animation: drop-in 3s cubic-bezier(.24,-0.01,.1,1.13);
    text-align: center;
  }
  @keyframes drop-in {
    0% { opacity: 0; transform: translateY(-60vh); }
    30% { opacity: 0; transform: translateY(-60vh); }
    70% { opacity: 1; transform: translateY(1vh); }
    90% { opacity: 1; transform: translateY(-2vh); }
    100% { opacity: 1; transform: translateY(0vh) }
  }
  .logo {
    opacity: 1;
    cursor: pointer;
  }
  .logo-svg {
    height: 96px;
  }
  @media (max-width: 400px) {
    .logo-svg {
      height: 64px;
    }    
  }
  @media (max-width: 300px) {
    .logo-svg {
      height: 48px;
    }    
  }
  @media (max-width: 200px) {
    .logo-svg {
      height: 32px;
    }    
  }
  @media (max-width: 140px) {
    .logo-svg {
      height: 16px;
    }    
  }
/*  .soon {
    transform: translateY(-10px);
    transition: all 1s ease-out;
    opacity: 0;
  }
  .logo:hover ~ .soon {
    opacity: .2;
    transform: translateY(0px);
    transition: all .4s ease-out;
  }
*/

  /* All the tricks */


  .logo.kickflip {
    animation: kickflip 1s cubic-bezier(.34,-0.3,.67,1.25);
  }
  @keyframes kickflip {
    0% {transform: rotate(0deg) rotate3d(1,0,0,0deg) translateY(0px);}
    20% {transform: rotate(-5deg) rotate3d(1,0,0,0deg) translateY(20px);}
    21% {transform: rotate(-5deg) rotate3d(1,0,0,0deg) translateY(20px);}
    100% {transform: rotate(0deg) rotate3d(1,0,0,360deg) translateY(0px);}
  }
  .logo.ollie {
    animation: ollie 1s cubic-bezier(.34,-0.3,.67,1.25);
  }
  @keyframes ollie {
    0% {transform: rotate(0deg) translateY(0px);}
    20% {transform: rotate(-5deg) translateY(20px);}
    21% {transform: rotate(-5deg) translateY(20px);}
    60% {transform: rotate(0deg) translateY(-40px);}
    100% {transform: rotate(0deg) translateY(0px);}
  }
  .logo.big-ollie {
    animation: big-ollie 1.5s cubic-bezier(.34,-0.3,.67,1.25);
  }
  @keyframes big-ollie {
    0% {transform: rotate(0deg) translateY(0px);}
    40% {transform: rotate(-5deg) translateY(20px);}
    41% {transform: rotate(-5deg) translateY(20px);}
    60% {transform: rotate(3deg) translateY(-100px);}
    100% {transform: rotate(0deg) translateY(0px);}
  }
  .logo.shove-it-180 {
    animation: shove-it-180 1.8s cubic-bezier(.34,-0.3,.67,1.25);
  }
  @keyframes shove-it-180 {
    0% {transform: rotate(0deg);}
    40% {transform: rotate(180deg);}
    60% {transform: rotate(180deg);}
    100% {transform: rotate(360deg);}
  }
  .logo.shove-it-360 {
    animation: shove-it-360 1s cubic-bezier(.34,-0.3,.67,1.25);
  }
  @keyframes shove-it-360 {
    0% {transform: rotate(0deg);}
    20% {transform: rotate(20deg);}
    21% {transform: rotate(20deg);}
    100% {transform: rotate(-360deg);}
  }
  .logo.ollie-nose-slide {
    animation: ollie-nose-slide 2s cubic-bezier(.34,-0.3,.67,1.25);
    transform-origin: right;
  }
  @keyframes ollie-nose-slide {
    0% {transform: rotate(0deg) translateY(0px);}
    10% {transform: rotate(-5deg) translateY(20px);}
    11% {transform: rotate(-5deg) translateY(20px);}
    30% {transform: rotate(20deg) translateY(-20px);}
    77% {transform: rotate(18deg) translateY(-15px);}
    100% {transform: rotate(0deg) translateY(0px);}
  }
  .logo.varial-kickflip {
    animation: varial-kickflip 1s cubic-bezier(.34,-0.3,.67,1.25);
  }
  @keyframes varial-kickflip {
    0% {transform: rotate(0deg) rotate3d(1,0,0,0deg) translateY(0px);}
    20% {transform: rotate(-10deg) rotate3d(1,0,0,0deg) translateY(20px);}
    21% {transform: rotate(-10deg) rotate3d(1,0,0,0deg) translateY(20px);}
    100% {transform: rotate(0deg) rotate3d(1,1,1,360deg) translateY(0px);}
  }
  .logo.laserflip {
    animation: laserflip 1.6s cubic-bezier(.34,-0.3,.67,1.25);
  }
  @keyframes laserflip {
    0% {transform: rotate(0deg) rotate3d(1,0,0,360deg) translateY(0px);}
    20% {transform: rotate(-10deg) rotate3d(0,1,0,360deg) translateY(20px);}
    21% {transform: rotate(-10deg) rotate3d(0,1,0,360deg) translateY(20px);}
    100% {transform: rotate(-360deg) rotate3d(0,1,1,0deg) translateY(0px);}
  }
  .logo.nollie-heel-slide {
    animation: nollie-heel-slide 2s cubic-bezier(.34,-0.3,.67,1.25);
    transform-origin: left;
  }
  @keyframes nollie-heel-slide {
    0% {transform: rotate(0deg) translateY(0px);}
    10% {transform: rotate(5deg) translateY(10px);}
    11% {transform: rotate(5deg) rotate3d(0,0,0,0deg) translateY(10px);}
    30% {transform: rotate(-40deg) rotate3d(1,1,0,40deg) translateY(-10px);}
    77% {transform: rotate(-32deg) rotate3d(1,1,0,40deg) translateY(-15px);}
    80% {transform: rotate(-40deg) rotate3d(1,1,0,40deg) translateY(-15px);}
    100% {transform: rotate(0deg) rotate3d(0,0,0,0deg) translateY(0px);}
  }

</style>
