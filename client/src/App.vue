<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <div class="main-app">
    <main class="main-layout">

      <Header />
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/main.scss';

.main-app {
  align-items: center;
  display: grid;
  gap: 2rem;
  grid-template-rows: auto 1fr auto;
  grid-auto-flow: row;
  max-width: 1000px;
  min-height: 100vh;
  width: 100%;
  padding: 36px;

}

.main-layout {
  display: flex;
  flex-direction: column;

}

// @media (max-width: 1100px {
//     .main-app {}
//   })
</style>
