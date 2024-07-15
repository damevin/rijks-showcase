<script lang="ts" setup>
const { collections } = useCollectionsStore()
</script>

<template>
  <div>
    <h1>Your collection</h1>
    <CollectionGrid v-if="collections.length">
      <CollectionCard
        v-for="collection in collections"
        :key="collection.objectNumber"
        :collection="{ title: collection.title, objectNumber: collection.objectNumber, webImage: { url: collection.webImage } }"
        @click="navigateTo(`/collection-${collection?.objectNumber}`)"
      />
    </CollectionGrid>
    <CollectionEmpty v-else />
  </div>
</template>
