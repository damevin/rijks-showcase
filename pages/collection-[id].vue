<script lang="ts" setup>
const { details, objectId } = useCollectionDetails()
const route = useRoute()

onMounted(() => {
  if (route.params.id !== null)
    objectId.value = String(route.params.id)
})
</script>

<template>
  <div v-if="details" class="collection">
    <h1 class="collection__title">
      {{ details?.title }}
    </h1>
    <NuxtImg
      width="800"
      :src="details?.webImage?.url"
      placeholder="img/placeholder.png"
      quality="80"
    />
    <span class="collection__description">
      {{ details?.label.description }}
    </span>
    <UiBtn variant="secondary">
      Add to my collection
    </UiBtn>
  </div>
</template>

<style>
.tracking-in-expand-fwd {
	-webkit-animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

.collection {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: start;
}

.collection__title {
  animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  font-family: 'Stardom';
}

.collection__description {
  text-align: justify;
  max-width: 800px;
}
</style>
