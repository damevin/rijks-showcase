<script lang="ts" setup>
const { collections } = useCollectionsStore()
</script>

<template>
  <div>
    <h1>Your collection</h1>
    <CollectionGrid variant="masonry">
      <CollectionCard v-for="collection in collections" :key="collection.id" :collection="collection" />
    </CollectionGrid>
  </div>
</template>

<style>

</style>
