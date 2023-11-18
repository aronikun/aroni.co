<script lang="ts">

</script>

<template>
  <div class="wrapper">
    <div class="logo">
      <img src="../assets/svg/logo-bg.svg" class="logo-bg">
      <img src="../assets/svg/logo-a.svg" class="logo-64 logo-a">
      <img src="../assets/svg/logo-r.svg" class="logo-64 logo-r">
      <img src="../assets/svg/logo-o.svg" class="logo-64 logo-o">
      <img src="../assets/svg/logo-n.svg" class="logo-64 logo-n">
      <img src="../assets/svg/logo-i.svg" class="logo-16 logo-i">
      <img src="../assets/svg/logo-dot.svg" class="logo-16 logo-dot-i">
      <img src="../assets/svg/logo-dot.svg" class="logo-16 logo-dot">
      <img src="../assets/svg/logo-c.svg" class="logo-64 logo-c">
      <img src="../assets/svg/logo-o.svg" class="logo-64 logo-co">
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    width: 100vw;
  }
  .logo {
    transform: translateX(-176px);
  }
  .logo-bg {
    height: 96px;
    transform-origin: right;
    transform: translate(352px, 16px);
    animation: logo-bg 30s ease-in-out;
  }

  @keyframes logo-bg {
    0% { transform: scale(0) translate(352px, 16px); }
    1% { transform: scale(1) translate(352px, 16px); }
  }

  .logo-16 {
    width: 16px;
  }
  .logo-64 {
    width: 64px;
  }
  .logo-16, .logo-64 {
    opacity: .8;
    mix-blend-mode: difference;
  }
  .logo-a {
    animation: logo-a 30s ease-in-out;
  }
  @keyframes logo-a {
    0% { transform: scale(0); }
    2% { transform: scale(0); }
    3% { transform: scale(1); }
  }

  .logo-r {
    transform: translateX(-16px);
    animation: logo-r 30s ease-in-out;
  }
  @keyframes logo-r {
    0% { transform: scale(0) translateX(-64px); }
    2.5% { transform: scale(0) translateX(-64px); }
    3.5% { transform: scale(1) translateX(-64px); }
  }
  .logo-o {
    transform: translateX(-32px);
    animation: logo-o 30s ease-in-out;
  }
  @keyframes logo-o {
    0% { transform: scale(0) translateX(-128px); }
    3% { transform: scale(0) translateX(-128px); }
    4% { transform: scale(1) translateX(-128px); }
  }
  .logo-n {
    transform: translateX(-48px);
    animation: logo-n 30s ease-in-out;
  }
  @keyframes logo-n {
    0% { transform: scale(0) translateX(-192px); }
    3.5% { transform: scale(0) translateX(-192px); }
    4.5% { transform: scale(1) translateX(-192px); }
  }
  .logo-i {
    transform: translateX(-48px);
    animation: logo-i 30s ease-in-out;
  }
  @keyframes logo-i {
    0% { transform: scale(0) translateX(-208px); }
    3.5% { transform: scale(0) translateX(-208px); }
    4.5% { transform: scale(1) translateX(-208px); }
  }
  .logo-dot-i {
    transform: translate(-64px, -52px);
    animation: logo-dot-i 30s ease-in-out;
  }
  @keyframes logo-dot-i {
    0% { transform: scale(0) translate(-248px, -24px); }
    3.5% { transform: scale(0) translate(-248px, -24px); }
    4.5% { transform: scale(1) translate(-248px, -24px); }
  }
  .logo-dot {
    transform: translateX(-64px);
    animation: logo-dot 30s ease-in-out;
  }
  @keyframes logo-dot {
    0% { transform: scale(0) translate(-264px, -24px); }
    4% { transform: scale(0) translate(-264px, -24px); }
    5% { transform: scale(1) translate(-264px, -24px); }
  }
  .logo-c {
    transform: translateX(-80px);
    animation: logo-c 30s ease-in-out;
  }
  @keyframes logo-c {
    0% { transform: scale(0) translateX(-304px); }
    4.5% { transform: scale(0) translateX(-304px); }
    5.5% { transform: scale(1) translateX(-304px); }
  }
  .logo-co {
    transform: translateX(-96px);
    animation: logo-co 30s ease-in-out;
  }
  @keyframes logo-co {
    0% { transform: scale(0) translateX(-368px); }
    5% { transform: scale(0) translateX(-368px); }
    6% { transform: scale(1) translateX(-368px); }
  }

</style>
