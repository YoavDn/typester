<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { useUserStore } from './stores/UserStore';
import { useThemeStore } from './stores/ThemeStore'
import { useLeaderboardStore } from './stores/LeaderboardStore';

const userStore = useUserStore()
const LeaderboardStore = useLeaderboardStore()
const themeStore = useThemeStore()

userStore.setLoggedInUser()
LeaderboardStore.getLeaderboardTests()
themeStore.localTheme()


</script>

<template>
  <main class="main-app">
    <Header />
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <Footer />
  </main>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s ease;

}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 550px) {
  .main-app {
    padding: 16px;
  }
}
</style>
