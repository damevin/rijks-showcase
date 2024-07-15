<script lang="ts" setup>
withDefaults(
  defineProps<{
    variant?: 'grid' | 'masonry'
  }>(),
  {
    variant: 'grid',
  },
)
</script>

<template>
  <ClientOnly>
    <div
      :class="{
        'collection-grid': variant === 'grid',
        'masonry': variant === 'masonry',
      }"
    >
      <slot />
    </div>
  </ClientOnly>
</template>

<style scoped>
.collection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;
}

.masonry {
  column-count: 3;
  column-gap: 1rem;

}

.masonry > * {
  break-inside: avoid;
  
}
</style>
