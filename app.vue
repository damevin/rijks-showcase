<script lang="ts" setup>
onMounted(() => {
  useSmoothScroll()
})
</script>

<template>
  <div class="app">
    <LayoutHeader class="app__header" />
    <div class="app__container">
      <NuxtPage />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all .5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.4rem);
}

html {
  background-color: var(--background-surface);
  font-family: 'GeneralSans';
}

.app {
  color: white;
  position: relative;
}

.app__header {
  position: sticky;
  top: 0;
  z-index: 10;
}

.app__container {
  margin: 8px;
  height: 100%;
  min-height: 90vh;
}
</style>
