<template>
  <div
    class="collection-grid"
  >
    <slot />
  </div>
</template>

<style scoped>
.collection-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media screen and (min-width: 768px) {
  .collection-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1rem;
  }
}
</style>
