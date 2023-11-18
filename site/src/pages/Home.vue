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
    transform: translate(352px, 16px);
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
  .logo-r {
    transform: translateX(-16px);
  }
  .logo-o {
    transform: translateX(-32px);
  }
  .logo-n {
    transform: translateX(-48px);
  }
  .logo-i {
    transform: translateX(-48px);
  }
  .logo-dot-i {
    transform: translate(-64px, -52px);
  }
  .logo-dot {
    transform: translateX(-64px);
  }
  .logo-c {
    transform: translateX(-80px);
  }
  .logo-co {
    transform: translateX(-96px);
  }

</style>
