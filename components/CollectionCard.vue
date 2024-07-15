<script lang="ts" setup>
import type { ArtObject } from '~/types/collections.types'

defineProps<{
  collection: Partial<ArtObject>
}>()

defineEmits<{
  (event: 'update:saved-collection', collection: ArtObject): void
}>()

const imageIsLoaded = ref<boolean>(false)
</script>

<template>
  <div>
    <article v-show="imageIsLoaded" class="collection-card">
      <div class="collection-card__image-container">
        <NuxtImg
          v-if="collection.webImage?.url"
          :src="collection.webImage?.url"
          quality="70"
          class="collection-card__img"
          sizes="100vw sm:200px md:300px"
          height="300"
          placeholder="img/placeholder.png"
          format="webp"
          :alt="collection.title"
          placeholder-class="skeleton"
          @load="imageIsLoaded = true"
        />
      </div>
      <div class="collection-card__overlay">
        <div class="collection-card__header">
          <h2 class="collection-card__title">
            {{ collection.title }}
          </h2>
        </div>
      </div>
    </article>
    <div v-show="!imageIsLoaded">
      <div class="skeleton" />
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  width: 100%;
  border-radius: 8px;
  background-color: var(--color-skeleton);
  height: 500px;
}

.collection-card {
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  height: 500px;
  overflow: hidden;
  background-color: var(--color-skeleton);
  animation: fade-in-fwd 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.collection-card__image-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.collection-card__img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.collection-card:hover .collection-card__img {
  transform: scale(1.1);
}

.collection-card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  padding: 20px;
}

.collection-card__header {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.collection-card__title {
  font-size: 22px;
  margin: 0 0 5px;
}

.collection-card__subtitle {
  font-size: 13px;
}

@keyframes fade-in-fwd {
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
</style>
