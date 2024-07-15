<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'update:query', query: string): void
}>()

const suggestedQueries = ['Rembrandt van Rijn', 'Johannes Vermeer', 'Frans Hals', 'Vincent van Gogh']
</script>

<template>
  <div class="container">
    <div>
      <div class="wrapper">
        <h1 class="container__title">
          <span class="round">
            ❋
          </span>
          No results found
        </h1>
        <span>Try something different...</span>
      </div>
      <div v-for="query in suggestedQueries" :key="query">
        <UiBtn variant="plain" class="query__btn" @click="emit('update:query', query)">
          {{ query }}
        </UiBtn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

@media screen and (min-width: 768px) {
  .wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
}

.query__btn {
  margin: 0;
  font-size: clamp(1rem, 10vw, 8rem);

}

.container__title {
  font-size: clamp(1rem, 10vw, 2.5rem);
  color: var(--primary-color);
}
</style>
