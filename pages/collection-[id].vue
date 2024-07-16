<script lang="ts" setup>
const { details, objectId } = useCollectionDetails()
const route = useRoute()

const { toggleCollection, isInCollection } = useCollectionsStore()

onMounted(() => {
  if (route.params.id !== null)
    objectId.value = String(route.params.id)
})

const isInStore = computed(() => details.value ? isInCollection(details.value.objectNumber) : false)
const toggleCollectionLabel = computed(() =>
  isInStore.value ? 'Remove from my collection' : 'Add to my collection',
)
</script>

<template>
  <div v-if="details" class="collection">
    <UiBtn variant="primary" class="collection__back" @click="$router.go(-1)">
      <Icon name="material-symbols:arrow-back-ios-rounded" />
      Go back
    </UiBtn>

    <h1 class="collection__title">
      {{ details?.title }}
    </h1>
    <NuxtImg :src="details?.webImage" placeholder="img/placeholder.png" quality="80" sizes="" class="collection__image" />
    <span class="collection__description">
      {{ details?.description }}
    </span>
    <UiBtn
      v-if="details" variant="secondary" @click="toggleCollection({ collection: {
        title: details.title,
        description: details.description,
        objectNumber: details.objectNumber,
        webImage: details.webImage },
      })"
    >
      {{ toggleCollectionLabel }}
    </UiBtn>
  </div>
</template>

<style>
.tracking-in-expand-fwd {
  -webkit-animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

.collection {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: auto;
  justify-content: start;
  width: 100%;
}

.collection__title {
  animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

.collection__description {
  max-width: 800px;
  text-align: justify;
}

.collection__image {
  border-radius: 6px;
  object-fit: contain;
  width: 100%;
}

.collection__back {
  display: flex;
  gap: 2px;
  align-items: center;
}
</style>
