<template>
  <div class="collection-empty">
    <p class="collection-empty__title">
      Create your first collection, just add artworks to your collection by clicking on <span class="collection-empty__secondary">'Add to my collection'</span> and they will appear here.
    </p>
    <UiBtn variant="secondary" @click="navigateTo('/')">
      Browse artworks
    </UiBtn>
  </div>
</template>

<style scoped>
.collection-empty {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  height: 80vh;
  justify-content: center;
}

.collection-empty__title {
  font-family: 'Quicksand';
  font-weight: 100;
  font-size: clamp(1.5rem, 4vw, 3rem);
}

.collection-empty__secondary {
  color: var(--primary-color);
}
</style>
