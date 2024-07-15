<script lang="ts" setup>
import type { ArtObject } from '~/types/collections.types'

const {
  updateSearchQuery,
  collections,
  loadMore,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  isError,
  isFetching,
  error,
} = useCollections()

const { toggleCollection } = useCollectionsStore()

const selectedCollection = ref<ArtObject | null>(null)

const modalState = reactive({
  collectionView: false,
})

function handleArtObjectDetailledView(collection: ArtObject) {
/*   console.log('collection', collection) */
  selectedCollection.value = collection
  modalState.collectionView = true
}

const query = ref('')
const searchInputPlaceholder = 'Search for a collection'
const displayMoreText = computed(() => {
  if (isFetchingNextPage.value)
    return 'Loading'
  if (hasNextPage.value)
    return 'Load more'
  return 'No more results'
})
const displayMoreIsDisabled = computed(() => {
  return Boolean(!hasNextPage || isFetchingNextPage)
})
</script>

<template>
  <div class="main">
    <header class="main__header">
      <UiInputText
        v-model="query"
        :loading="isLoading"
        :placeholder="searchInputPlaceholder"
        @update:search="updateSearchQuery(query)"
      >
        <template #button>
          <UiBtn
            variant="fab"
            @click="updateSearchQuery(query)"
          >
            <Icon v-if="!isLoading" name="ic:outline-search" />
            <Icon v-else name="svg-spinners:wind-toy" />
          </UiBtn>
        </template>
      </UiInputText>
    </header>
    <div v-if="isError">
      An error occurs : {{ error }}
    </div>
    <div v-if="!isError && !isLoading && !collections?.length">
      <CollectionNoResults />
    </div>
    <div>
      <CollectionGrid>
        <div v-for="(collection, index) in collections" :key="collection?.id">
          <CollectionCard
            :collection="collection!"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="navigateTo(`/collection-${collection?.objectNumber}`)"
            @update:saved-collection="toggleCollection(collection!)"
          />
        </div>
        <template v-if="isLoading || isFetching">
          <div v-for="i in 20" :key="i">
            <SkeletonCard />
          </div>
        </template>
      </CollectionGrid>
      <div v-if="collections?.length" class="main__footer">
        <UiBtn
          :disabled="displayMoreIsDisabled"
          :loading="isFetchingNextPage"
          variant="secondary"
          @click="loadMore"
        >
          {{ displayMoreText }}
          <Icon v-if="isFetching" name="svg-spinners:wind-toy" />
        </UiBtn>
      </div>
    </div>
    <UiModal v-model="modalState.collectionView">
      {{ selectedCollection }}
      <div>
        <ZoomableImg :src="selectedCollection?.webImage?.url" />
      </div>
    </UiModal>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 1rem;
  justify-content: start;
  overflow-x: scroll;
}

.main__header {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  justify-content: start;
}

.main__footer {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
</style>
